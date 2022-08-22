import PkmnGameRowItem from './item';
import PkmnGameRowItemPkmn from './item/pkmn';

const PkmnGameRow = () => {
  return (
    <div className="grid grid-cols-7 gap-[6px]">
      <PkmnGameRowItemPkmn />
      <PkmnGameRowItem label="Sinnoh" state="correct" />
      <PkmnGameRowItem label="1m34" state="incorrect" />
      <PkmnGameRowItem label="120kg" state="incorrect" />
      <PkmnGameRowItem label="Combat, Feu" state="x" />
      <PkmnGameRowItem label="3" state="correct" />
      <PkmnGameRowItem label="7ème" state="true" />
    </div>
  );
};

export default PkmnGameRow;
