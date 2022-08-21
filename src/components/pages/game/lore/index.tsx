import HiddenText from 'components/shared/hiddenText';
import React from 'react';

interface GameLoreProps {
  lore: string;
  separator: string;
  hasWin: boolean;
}

const GameLore: React.FC<GameLoreProps> = ({ lore, separator, hasWin }) => {
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

export default GameLore;
