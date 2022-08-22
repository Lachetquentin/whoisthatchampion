import { TAGS_STEP } from 'lol/constants/steps';

interface LoLGameTagsProps {
  nbTry: number;
  hasWin: boolean;
  tags: string[];
}

const LoLGameTags: React.FC<LoLGameTagsProps> = ({ nbTry, hasWin, tags }) => {
  if (nbTry < TAGS_STEP && !hasWin) return null;
  return (
    <div className="flex flex-wrap justify-center uppercase mt-[4px]">
      <p className="beaufort italic">{tags.join(' - ')}</p>
    </div>
  );
};

export default LoLGameTags;
