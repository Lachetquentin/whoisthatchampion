import { useEffect, useState, useCallback } from 'react';
import Input from 'components/shared/input';
import lolServices from 'services/lol';
import { getDailyChampion } from 'utils/dailies';
import { DailyType } from 'types/daily';
import { purgeByName } from 'utils/champions';
import Button from 'components/shared/button';

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
    const dailyInfos = getDailyChampion();
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
      <div className="text-2xl text-center p-2">
        <p>Who is that champion ?</p>
      </div>
      <div className="flex flex-nowrap">
        <p>{purgeByName(dailyChampion.lore, dailyChampion.name)}</p>

        {hasWin && (
          <img
            alt="champion"
            className="h-64 w-64"
            src={`https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/${dailyChampion.id}.png`}
          />
        )}
      </div>

      {nbTry >= 1 || hasWin ? (
        <p className="justify-end flex">{dailyChampion.title}</p>
      ) : null}

      <div className="flex flex-nowrap justify-center items-center p-2 space-x-5 ">
        {nbTry >= 2 || hasWin ? (
          <img
            src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/q`}
            alt="champion q-spell"
            className="h-16 w-16"
            onClick={() => {
              setAbilityId(0);
              setShowDescription(true);
            }}
          />
        ) : null}

        {nbTry >= 3 || hasWin ? (
          <img
            src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/w`}
            alt="champion w-spell"
            className="h-16 w-16"
            onClick={() => {
              setAbilityId(1);
              setShowDescription(true);
            }}
          />
        ) : null}

        {nbTry >= 4 || hasWin ? (
          <img
            src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/e`}
            alt="champion e-spell"
            className="h-16 w-16"
            onClick={() => {
              setAbilityId(2);
              setShowDescription(true);
            }}
          />
        ) : null}

        {nbTry >= 5 || hasWin ? (
          <img
            src={`https://cdn.communitydragon.org/latest/champion/${dailyChampion.id}/ability-icon/r`}
            alt="champion r-spell"
            className="h-16 w-16"
            onClick={() => {
              setAbilityId(3);
              setShowDescription(true);
            }}
          />
        ) : null}
      </div>

      <div className="justify-center items-center flex flex-nowrap p-4">
        <Input
          name="value"
          setForm={setGuess}
          value={guess.value}
          placeholder="Type champion name..."
        />

        <Button
          onClick={onGuess}
          className="bg-[#0CC6E3] max-w-[150px] py-[16px]"
          textClassName="uppercase text-black font-semibold"
          label="Guess"
        />
      </div>
      {hasWin && (
        <p className="text-green-400 uppercase font-bold justify-center text-center text-2xl">
          gagné !! c&apos;était bien {dailyChampion.name} !!!
        </p>
      )}

      {showDescription && (
        <div className="flex md:flex-col justify-center items-center mt-10">
          <div className="flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
            <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
              {/* Chosen Champion Ability Description */}
              {purgeByName(
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
    </>
  );
};

export default Game;
