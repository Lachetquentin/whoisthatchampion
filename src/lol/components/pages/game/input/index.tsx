import Button from 'lol/components/shared/button';
import Input from 'lol/components/shared/input';

interface LolGameInputProps {
  guess: { value: string };
  setGuess: (guess: { value: string }) => void;
  onGuess: () => void;
  hasWin?: boolean;
}

const LolGameInput: React.FC<LolGameInputProps> = ({
  setGuess,
  guess,
  onGuess,
  hasWin,
}) => {
  return (
    <>
      {hasWin ? (
        <div className="text-center mt-[64px]">
          <p className="text-[18px] text-green-400">
            GGWP Invocateur ! Tu as trouvé le champion du jour ! 🎉
          </p>
          <p className="text-[16px] text-white">
            Reviens demain pour un nouveau champion à trouver
          </p>
        </div>
      ) : (
        <div className="w-full left-0 justify-center items-center flex flex-wrap h-[45px] mt-[64px] rounded-[6px] overflow-hidden">
          <Input
            name="value"
            setForm={setGuess}
            value={guess.value}
            placeholder="Écris le nom du champion ici..."
            style={{ flexGrow: 1, flexBasis: 0 }}
            inputClassName="h-full w-full bg-white px-[8px]"
            className="h-full"
          />

          <Button
            onClick={onGuess}
            className="bg-[#0CC6E3] max-w-[150px] h-full"
            textClassName="uppercase text-black font-semibold beaufort"
            label="Deviner"
            containerStyle={{ flexShrink: 1 }}
          />
        </div>
      )}
    </>
  );
};

export default LolGameInput;
