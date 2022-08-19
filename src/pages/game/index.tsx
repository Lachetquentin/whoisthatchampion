import { useEffect, useState, useCallback } from 'react';
import Input from 'components/shared/input';
import lolServices from 'services/lol';
import { getDailyChampion } from 'utils/dailies';
import { DailyType } from 'types/daily';
import { purgeByName } from 'utils/champions';
import Button from 'components/shared/button';

const Game = () => {
  const [guess, setGuess] = useState<{ value: string }>({ value: '' });
  const [dailyChampion, setDailyChampion] = useState<any>(null);
  const [nbTry, setNbTry] = useState<number>(0);
  const [hasWin, setHasWin] = useState<boolean>(false);

  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setDailyChampion(res.data.data[dailyInfos.championName]);
    };
    const dailyInfos = getDailyChampion();
    getChampionInfos(dailyInfos as DailyType);
  }, []);

  const onGuess = useCallback(() => {
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
      <div className="text-2xl text-center p-2">
        <p>Who is that champion ?</p>
      </div>
      <div className="flex flex-nowrap">
        <p>{purgeByName(dailyChampion.lore, dailyChampion.name)}</p>

        {hasWin && (
          <img
            alt="champion"
            className="h-64 w-64"
            src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${dailyChampion.id}.png`}
          />
        )}
      </div>

      {nbTry >= 1 || hasWin ? (
        <p className="justify-end flex">{dailyChampion.title}</p>
      ) : null}

      <div className="justify-center items-center flex flex-nowrap">
        <Input
          name="value"
          setForm={setGuess}
          value={guess.value}
          placeholder="Type champion name..."
        />

        <Button
          onClick={onGuess}
          className="bg-[#0CC6E3] max-w-[150px] py-[16px]"
          textClassName="uppercase text-black font-semibold"
          label="Guess"
        />
      </div>
      {hasWin && (
        <p className="text-green-400 uppercase font-bold justify-center text-center text-2xl">
          gagné !! c&apos;était bien {dailyChampion.name} !!!
        </p>
      )}
    </>
  );
};

export default Game;
