import { useEffect, useState, useCallback } from 'react';
import lolServices from 'services/lol';
import { getDailyChampion } from 'utils/dailies';
import { DailyType } from 'types/daily';
import GameHeader from './header';
import GameInput from './input';
import GameSpells from './spells';
import { TITLE_STEP } from 'constants/steps';
import GameLore from './lore';
import GamePicture from './picture';
import GameTags from './tags';

const Game = () => {
  const [guess, setGuess] = useState<{ value: string }>({ value: '' });
  const [dailyChampion, setDailyChampion] = useState<any>(null);
  const [nbTry, setNbTry] = useState<number>(0);
  const [hasWin, setHasWin] = useState<boolean>(false);
  console.log(dailyChampion);
  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setDailyChampion(res.data.data[dailyInfos.championName]);
    };
    const dailyInfos = getDailyChampion(new Date());
    getChampionInfos(dailyInfos as DailyType);
  }, []);

  const onGuess = useCallback(() => {
    if (!guess.value || guess.value.trim() === '') return;
    if (guess.value.toLowerCase() === dailyChampion.name.toLowerCase()) {
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
        <GameHeader />

        <GamePicture
          nbTry={nbTry}
          championId={dailyChampion.id}
          hasWin={hasWin}
        />

        <p className="text-center mb-[16px]">Tu recherches...</p>
        <GameTags nbTry={nbTry} hasWin={hasWin} tags={dailyChampion.tags} />

        {(nbTry >= TITLE_STEP || hasWin) && (
          <p className="text-center beaufort uppercase italic text-[24px] leading-[16px] custom-pulse mb-[8px]">
            {dailyChampion.title}
          </p>
        )}

        {hasWin && (
          <p className="text-green-400 uppercase font-bold justify-center text-center text-[32px] beaufort italic">
            - {dailyChampion.name} -
          </p>
        )}

        <GameLore
          nbTry={nbTry}
          hasWin={hasWin}
          separator={dailyChampion.name}
          lore={dailyChampion.lore}
        />
        <GameSpells
          nbTry={nbTry}
          hasWin={hasWin}
          dailyChampion={dailyChampion}
        />
        <GameInput
          hasWin={hasWin}
          setGuess={setGuess}
          guess={guess}
          onGuess={onGuess}
        />
      </div>
    </>
  );
};

export default Game;
