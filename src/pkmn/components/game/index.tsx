import PkmnGameRow from './row';
import PkmnGameRowTitle from './row/title';

const PkmnGame = () => {
  const rows = [1, 2, 3];
  return (
    <>
      <div className="p-[16px] relative flex flex-col text-center min-h-screen">
        <h1 className="text-[32px] dynapuff uppercase">Devine le pokémon</h1>
        <p>
          Le Pokémon d&apos;hier était...{' '}
          <span className="text-gold dynapuff uppercase text-center">
            Obalie
          </span>
        </p>

        <div className="grid grid-cols-7 gap-[3px] mt-[32px]">
          <PkmnGameRowTitle title="Pokémon" />
          <PkmnGameRowTitle title="Région" />
          <PkmnGameRowTitle title="Taille" />
          <PkmnGameRowTitle title="Poids" />
          <PkmnGameRowTitle title="Type(s)" />
          <PkmnGameRowTitle title="Évolution(s)" />
          <PkmnGameRowTitle title="Génération" />
        </div>
        {rows.map((row) => (
          <div key={row} className="mb-[6px]">
            <PkmnGameRow />
          </div>
        ))}
      </div>
    </>
  );
};

export default PkmnGame;
