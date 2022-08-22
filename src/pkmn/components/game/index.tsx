import PkmnGameRow from './row';

const PkmnGame = () => {
  const rows = [1, 2, 3];
  return (
    <>
      <div className="p-[16px] relative flex flex-col text-center bg-[#F3FDFE] min-h-screen">
        <h1 className="text-[32px] text-[#6ABF95] beaufort uppercase">
          Devine le pokémon
        </h1>
        <p className="text-[#6ABF95]">
          Le Pokémon d&apos;hier était...{' '}
          <span className="text-[#549877] beaufort uppercase text-center">
            Obalix
          </span>
        </p>

        <div className="grid grid-cols-7 gap-[3px] mt-[32px]">
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Pokémon
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Région
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Taille
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Poids
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Type(s)
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Évolution
          </p>
          <p className="mb-[6px] border-b-[2px] w-[90%] mx-auto text-[#6ABF95] border-[#6ABF95]">
            Génération
          </p>
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
