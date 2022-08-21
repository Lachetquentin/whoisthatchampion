import { TAGS_STEP } from 'constants/steps';

interface GameTagsProps {
  nbTry: number;
  hasWin: boolean;
  tags: string[];
}

const GameTags: React.FC<GameTagsProps> = ({ nbTry, hasWin, tags }) => {
  if (nbTry < TAGS_STEP && !hasWin) return null;
  return (
    <div className="flex flex-wrap justify-center uppercase">
      <p className="beaufort italic">{tags.join(', ')}</p>
    </div>
  );
};

export default GameTags;
