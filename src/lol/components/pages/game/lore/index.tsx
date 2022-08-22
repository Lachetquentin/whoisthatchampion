import HiddenText from 'lol/components/shared/hiddenText';
import { LORE_STEP } from 'lol/constants/steps';
import React from 'react';

interface LolGameLoreProps {
  lore: string;
  separator: string;
  hasWin: boolean;
  nbTry: number;
}

const LolGameLore: React.FC<LolGameLoreProps> = ({
  lore,
  separator,
  hasWin,
  nbTry,
}) => {
  if (nbTry < LORE_STEP && !hasWin) return null;
  return (
    <div className="mt-[24px] mb-[24px]">
      {!hasWin && (
        <p>
          {lore.split(separator).map((e, index) => {
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
      {hasWin && <p>{lore}</p>}
    </div>
  );
};

export default LolGameLore;
