import Input from 'components/shared/input';
import { useEffect, useState } from 'react';
import lolServices from 'services/lol';
import { getDailyChampion } from 'utils/dailies';
import { DailyType } from 'types/daily';
import { purgeByName } from 'utils/champions';
import Link from 'next/link';

const Game = () => {
  const [guess, setGuess] = useState<{ value: string }>({ value: '' });
  const [dailyChampion, setDailyChampion] = useState<any>(null);

  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setDailyChampion(res.data.data[dailyInfos.championName]);
    };
    const dailyInfos = getDailyChampion();
    getChampionInfos(dailyInfos as DailyType);
  }, []);

  if (!dailyChampion) return null;
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center p-2">
        <p>Which Champion is that ?</p>
      </div>
      <p>{dailyChampion.name}</p>
      <p>{dailyChampion.title}</p>
      <p>{purgeByName(dailyChampion.lore, dailyChampion.name)}</p>
      <Input name="value" setForm={setGuess} value={guess.value} />
      <div className="w-full text-xl text-center pb-2">
        <a href="https://github.com/">Github</a>
        <p className="p-4">{'-'}</p>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Game;
