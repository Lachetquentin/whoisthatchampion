import { useEffect, useState, useCallback } from 'react';
import Input from 'components/shared/input';
import lolServices from 'services/lol';
import { getDailyChampion } from 'utils/dailies';
import { DailyType } from 'types/daily';
import { purgeByName } from 'utils/champions';
import Button from 'components/shared/button';
import GameHeader from './header';
import UnknownPng from 'images/unknown.png';
import GameInput from './input';

const Game = () => {
  const [guess, setGuess] = useState<{ value: string }>({ value: '' });
  const [dailyChampion, setDailyChampion] = useState<any>(null);
  const [nbTry, setNbTry] = useState<number>(0);
  const [abilityId, setAbilityId] = useState<number>(0);
  const [hasWin, setHasWin] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  useEffect(() => {
    const getChampionInfos = async (dailyInfos: DailyType) => {
      const res = await lolServices.getChampionInfos(dailyInfos?.championName);
      setDailyChampion(res.data.data[dailyInfos.championName]);
    };
    const dailyInfos = getDailyChampion(new Date());
    getChampionInfos(dailyInfos as DailyType);
  }, []);

  const onGuess = useCallback(() => {
    if (guess.value.toLowerCase() === dailyChampion.name.toLowerCase()) {
      setHasWin(true);
    } else {
      setNbTry((e: number) => e + 1);
    }
    setGuess({ value: '' });
  }, [dailyChampion, guess]);

  const handleKeyPress = useCallback(
    (event: any) => {
      const key = event.key;

      if (key === 'Enter') {
        return onGuess();
      }
    },
    [onGuess]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [handleKeyPress]);

  if (!dailyChampion) return null;
  return (
    <>
      <div className="p-[16px] relative">
        <GameHeader />

        <img
          alt="champion"
          className="h-[120px] w-[120px] text-center mx-auto mb-[32px] bg-gray-800 rounded-full"
          src={
            hasWin || nbTry >= 6
              ? `https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${dailyChampion.id}.png`
              : UnknownPng.src
          }
        />

        {(nbTry >= 1 || hasWin) && (
          <p className="text-center beaufort uppercase italic text-[24px] leading-[16px] mt-[16px] custom-pulse">
            {dailyChampion.title}
          </p>
        )}

        {hasWin && (
          <p className="text-green-400 uppercase font-bold justify-center text-center text-[32px] beaufort italic">
            {dailyChampion.name}
          </p>
        )}

        <p className="my-[16px] px-[8px]">
          {hasWin
            ? dailyChampion.lore
            : purgeByName(dailyChampion.lore, dailyChampion.name)}
        </p>

        <div className="flex flex-nowrap justify-center items-center p-2 space-x-5 ">
          {(nbTry >= 2 || hasWin) && (
            <img
              src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/q`}
              alt="champion q-spell"
              className="h-16 w-16 custom-pulse"
              onClick={() => {
                setAbilityId(0);
                setShowDescription(true);
              }}
            />
          )}

          {(nbTry >= 3 || hasWin) && (
            <img
              src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/w`}
              alt="champion w-spell"
              className="h-16 w-16 custom-pulse"
              onClick={() => {
                setAbilityId(1);
                setShowDescription(true);
              }}
            />
          )}

          {nbTry >= 4 || hasWin ? (
            <img
              src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/e`}
              alt="champion e-spell"
              className="h-16 w-16 custom-pulse"
              onClick={() => {
                setAbilityId(2);
                setShowDescription(true);
              }}
            />
          ) : null}

          {(nbTry >= 5 || hasWin) && (
            <img
              src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/r`}
              alt="champion r-spell"
              className="h-16 w-16 custom-pulse"
              onClick={() => {
                setAbilityId(3);
                setShowDescription(true);
              }}
            />
          )}
        </div>

        {showDescription && (
          <div className="flex md:flex-col justify-center items-center mt-10">
            <div className="flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
              <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
                {/* Chosen Champion Ability Description */}
                {hasWin
                  ? dailyChampion.spells[abilityId].description
                  : purgeByName(
                      dailyChampion.spells[abilityId].description,
                      dailyChampion.name
                    )}
              </h2>
              <Button
                className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={() => setShowDescription(false)}
                label="Close"
              />
            </div>
          </div>
        )}
      </div>
      <GameInput setGuess={setGuess} guess={guess} onGuess={onGuess} />
    </>
  );
};

export default Game;
