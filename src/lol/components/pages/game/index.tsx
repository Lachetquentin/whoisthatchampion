import { useEffect, useState, useCallback } from 'react';
import lolServices from 'lol/services/lol';
import { getDailyChampion } from 'lol/utils/dailies';
import { DailyType } from 'lol/types/daily';
import LoLGameHeader from './header';
import LolGameInput from './input';
import LolGameSpells from './spells';
import { TITLE_STEP } from 'lol/constants/steps';
import LolGameLore from './lore';
import LolGamePicture from './picture';
import LolGameTags from './tags';
import LolGameRoles from './roles';
import LolWinModal from 'lol/components/modals/winModal';

const getDailyDateValue = () => {
  const date = new Date();

  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
};

const LolGame = () => {
  const [guess, setGuess] = useState<{ value: string }>({ value: '' });
  const [dailyChampion, setDailyChampion] = useState<any>(null);
  const [nbTry, setNbTry] = useState<number>(0);
  const [hasWin, setHasWin] = useState<boolean>(false);
  const [gameNb, setGameNb] = useState<number>(0);

  useEffect(() => {
    const dailyDateValue = getDailyDateValue();
    const dailyGameCookie = localStorage.getItem(`lglg-${dailyDateValue}`);
    console.log(dailyGameCookie);
    if (!!dailyGameCookie) setHasWin(true);
  }, []);

  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setDailyChampion(res.data.data[dailyInfos.championName]);
    };
    const { dailyFound, gameIndex } = getDailyChampion(new Date());
    setGameNb(gameIndex);
    getChampionInfos(dailyFound as DailyType);
  }, []);

  const onGuess = useCallback(() => {
    if (!guess.value || guess.value.trim() === '') return;
    if (guess.value.toLowerCase() === dailyChampion.name.toLowerCase()) {
      const dailyDate = new Date();
      const dateValue = `${dailyDate.getFullYear()}${dailyDate.getMonth()}${dailyDate.getDate()}`;
      const dailyCookie = 'lglg-' + dateValue;
      localStorage.setItem(dailyCookie, 'true');
      setHasWin(true);
    } else {
      setNbTry((e: number) => e + 1);
    }
    setGuess({ value: '' });
  }, [dailyChampion, guess]);

  const handleKeyPress = useCallback(
    (event: any) => {
      const key = event.key;

      if (key === 'Enter') {
        return onGuess();
      }
    },
    [onGuess]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [handleKeyPress]);

  if (!dailyChampion) return null;
  return (
    <>
      <div className="p-[16px] relative">
        <LoLGameHeader />

        <LolGamePicture
          nbTry={nbTry}
          championId={dailyChampion.id}
          hasWin={hasWin}
        />

        <p className="text-center mb-[16px]">Tu recherches...</p>

        <LolGameRoles
          championId={dailyChampion.id}
          nbTry={nbTry}
          hasWin={hasWin}
        />
        <LolGameTags nbTry={nbTry} hasWin={hasWin} tags={dailyChampion.tags} />

        {(nbTry >= TITLE_STEP || hasWin) && (
          <p className="text-center text-[20px] custom-pulse mb-[8px] mt-[16px]">
            aussi appelé{' '}
            <span className="beaufort italic text-[24px]">
              {dailyChampion.title.toUpperCase()}
            </span>
          </p>
        )}

        {hasWin && (
          <p className="text-green-400 uppercase font-bold justify-center text-center text-[32px] beaufort italic">
            - {dailyChampion.name} -
          </p>
        )}

        <LolGameLore
          nbTry={nbTry}
          hasWin={hasWin}
          separator={dailyChampion.name}
          lore={dailyChampion.lore}
        />
        <LolGameSpells
          nbTry={nbTry}
          hasWin={hasWin}
          dailyChampion={dailyChampion}
        />
        <LolGameInput
          hasWin={hasWin}
          setGuess={setGuess}
          guess={guess}
          onGuess={onGuess}
        />
      </div>
      {hasWin && (
        <LolWinModal
          gameIndex={gameNb}
          nbTry={nbTry}
          dailyChampion={dailyChampion}
        />
      )}
    </>
  );
};

export default LolGame;
