import { useEffect, useState } from 'react';
import lolServices from 'services/lol';
import { DailyType } from 'types/daily';
import { getDailyChampion } from 'utils/dailies';

const GameHeader = () => {
  const [yesterdayChampion, setYesterdayChampion] = useState<any>(null);

  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setYesterdayChampion(res.data.data[dailyInfos.championName]);
    };
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayChamp = getDailyChampion(yesterday);
    getChampionInfos(yesterdayChamp as DailyType);
  }, []);

  return (
    <div className="flex flex-col items-center mb-[32px]">
      <h1 className="text-[32px] beaufort uppercase">Devine le champion</h1>
      {yesterdayChampion && (
        <div className="flex flex-wrap items-center">
          <p>
            Le champion d&apos;hier était...{' '}
            <span className="text-[#d0a85c] beaufort uppercase">
              {yesterdayChampion?.name}
            </span>
          </p>
          <img
            className="w-[24px] h-[24px] rounded-full overflow-hidden ml-[8px]"
            src={`https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${yesterdayChampion.id}.png`}
          />
        </div>
      )}
    </div>
  );
};

export default GameHeader;
