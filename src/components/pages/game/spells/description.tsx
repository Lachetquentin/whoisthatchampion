interface GameSpellsDescriptionProps {
  description: string;
  hasWin: boolean;
  separator: string;
}

const GameSpellsDescription: React.FC<GameSpellsDescriptionProps> = ({
  description,
  hasWin,
  separator,
}) => {
  console.log(description.split(separator));
  return (
    <div className="w-[350px] mx-auto">
      {!hasWin && (
        <p className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
          {description.split(separator).map((e: string, index) => {
            if (e === '') return null;
            return (
              <span key={e}>
                {index > 0 && (
                  <span className="bg-gray-700 text-gray-700 rounded-[2px]">
                    ******
                  </span>
                )}
                <span>{e}</span>
              </span>
            );
          })}
        </p>
      )}
    </div>
  );
};

export default GameSpellsDescription;
