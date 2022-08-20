interface onIconPressProps {
  onIconPress: (abilityId: number) => void;
  championId: number;
  abilityId: number;
  spellType: string;
  hidden: boolean;
}

const GameSpellsIcon: React.FC<onIconPressProps> = ({
  onIconPress,
  championId,
  abilityId,
  spellType,
  hidden,
}) => {
  return (
    <div
      onClick={() => onIconPress(abilityId)}
      className="card w-full rounded-[16px] overflow-hidden cursor-pointer"
    >
      <div className="pb-[100%] relative">
        {!hidden && (
          <img
            src={`https://cdn.communitydragon.org/latest/champion/${championId}/ability-icon/${spellType}`}
            alt={`champion ${spellType} spell`}
            className="absolute w-full h-full object-cover custom-pulse"
          />
        )}
      </div>
    </div>
  );
};

export default GameSpellsIcon;
