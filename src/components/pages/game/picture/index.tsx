import { PICTURE_STEP } from 'constants/steps';
import UnknownPng from 'images/unknown.png';

interface GamePictureProps {
  hasWin: boolean;
  nbTry: number;
  championId: string;
}

const GamePicture: React.FC<GamePictureProps> = ({
  hasWin,
  nbTry,
  championId,
}) => {
  return (
    <img
      alt="champion"
      className="h-[120px] w-[120px] text-center mx-auto mb-[32px] bg-gray-800 rounded-full"
      src={
        hasWin || nbTry >= PICTURE_STEP
          ? `https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${championId}.png`
          : UnknownPng.src
      }
    />
  );
};

export default GamePicture;
