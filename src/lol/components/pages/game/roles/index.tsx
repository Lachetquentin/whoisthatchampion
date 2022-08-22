import { ROLES_STEP } from 'lol/constants/steps';
import ownDb from 'lol/data/ownDb';
import SupportImg from 'lol/images/support_icon.webp';
import TopImg from 'lol/images/top_icon.webp';
import MidImg from 'lol/images/mid_icon.webp';
import AdcImg from 'lol/images/adc_icon.webp';
import JungleImg from 'lol/images/jungle_icon.webp';

interface LolGameRolesProps {
  championId: string;
  nbTry: number;
  hasWin: boolean;
}

const LolGameRoles: React.FC<LolGameRolesProps> = ({
  nbTry,
  championId,
  hasWin,
}) => {
  const roles = ownDb.find((e) => e.id === championId)?.roles;

  const getRoleImg = (role: string) => {
    switch (role) {
      case 'top':
        return TopImg.src;
      case 'mid':
        return MidImg.src;
      case 'adc':
        return AdcImg.src;
      case 'jungle':
        return JungleImg.src;
      case 'support':
        return SupportImg.src;
      default:
        return '';
    }
  };

  if (!roles) return null;
  if (nbTry < ROLES_STEP && !hasWin) return null;
  return (
    <div className="flex flex-wrap items-center justify-center">
      {roles.map((role, index) => (
        <div
          key={role}
          className="flex flex-wrap justify-center uppercase items-center"
        >
          <img
            src={getRoleImg(role)}
            alt={role}
            className={`w-[18px] h-[18px] mr-[3px] mt-[2px] ${
              index === 0 ? '' : 'ml-[12px]'
            }`}
          />
          <p className="beaufort italic">{role}</p>
        </div>
      ))}
    </div>
  );
};

export default LolGameRoles;
