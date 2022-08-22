import HiddenText from 'lol/components/shared/hiddenText';

interface LolGameSpellsDescriptionProps {
  description: string;
  hasWin: boolean;
  separator: string;
}

const LolGameSpellsDescription: React.FC<LolGameSpellsDescriptionProps> = ({
  description,
  hasWin,
  separator,
}) => {
  return (
    <div className="w-[350px] mx-auto">
      {!hasWin && (
        <p className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
          {description.split(separator).map((e: string, index) => {
            if (e === '') return null;
            return (
              <span key={e}>
                {index > 0 && <HiddenText />}
                <span>{e}</span>
              </span>
            );
          })}
        </p>
      )}
      {hasWin && (
        <p className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default LolGameSpellsDescription;
