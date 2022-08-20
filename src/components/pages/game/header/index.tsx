import { getDailyChampion } from 'utils/dailies';

const GameHeader = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayChamp = getDailyChampion(yesterday);

  return (
    <div className="flex flex-col items-center mb-[32px]">
      <h1 className="text-[32px] beaufort uppercase">Guess the champion</h1>
      <p>
        Yesterday&apos;s champion was...{' '}
        <span className="text-[#d0a85c] beaufort uppercase">
          {yesterdayChamp?.championName}
        </span>
      </p>
    </div>
  );
};

export default GameHeader;
