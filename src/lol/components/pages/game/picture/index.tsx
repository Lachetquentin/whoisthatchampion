import { PICTURE_STEP } from 'lol/constants/steps';
import UnknownPng from 'lol/images/unknown.png';

interface LolGamePictureProps {
  hasWin: boolean;
  nbTry: number;
  championId: string;
}

const LolGamePicture: React.FC<LolGamePictureProps> = ({
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

export default LolGamePicture;
