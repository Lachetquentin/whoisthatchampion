import {
  E_STEP,
  PASSIVE_STEP,
  Q_STEP,
  R_STEP,
  W_STEP,
} from 'lol/constants/steps';
import { useCallback, useState } from 'react';
import LolGameSpellsDescription from './description';
import LolGameSpellsIcon from './icon';

interface LolGameSpellsProps {
  nbTry: number;
  hasWin: boolean;
  dailyChampion: any;
}

const LolGameSpells: React.FC<LolGameSpellsProps> = ({
  nbTry,
  hasWin,
  dailyChampion,
}) => {
  const [abilityId, setAbilityId] = useState<number>(0);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const spellsData = [
    { abilityId: -1, spellType: 'passive', showAtTry: PASSIVE_STEP },
    { abilityId: 0, spellType: 'q', showAtTry: Q_STEP },
    { abilityId: 1, spellType: 'w', showAtTry: W_STEP },
    { abilityId: 2, spellType: 'e', showAtTry: E_STEP },
    { abilityId: 3, spellType: 'r', showAtTry: R_STEP },
  ];

  const onIconPress = useCallback(
    (newAbilityId: number) => {
      if (abilityId === newAbilityId && showDescription) {
        setShowDescription(false);
        return;
      }
      setAbilityId(newAbilityId);
      setShowDescription(true);
    },
    [abilityId, showDescription]
  );

  if (nbTry < PASSIVE_STEP && !hasWin) {
    return null;
  }
  return (
    <>
      <div className="flex flex-nowrap justify-center items-center p-2 space-x-[12px] max-w-[500px] mx-auto">
        {spellsData.map((spell) => (
          <LolGameSpellsIcon
            key={spell.abilityId}
            spellType={spell.spellType}
            abilityId={spell.abilityId}
            championId={dailyChampion.id}
            onIconPress={onIconPress}
            hidden={nbTry < spell.showAtTry && !hasWin}
          />
        ))}
      </div>
      {showDescription && (
        <LolGameSpellsDescription
          separator={dailyChampion.name}
          hasWin={hasWin}
          description={
            dailyChampion.spells[abilityId]?.description ??
            dailyChampion.passive.description
          }
        />
      )}
    </>
  );
};

export default LolGameSpells;
