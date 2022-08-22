const PkmnGameRowItemPkmn = () => {
  return (
    <div className={`card w-full rounded-[8px] overflow-hidden cursor-pointer`}>
      <div className="pb-[100%] relative">
        <img
          className="object-cover absolute w-full h-full"
          src="https://wallpaperaccess.com/full/1794017.png"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png"
          className="absolute object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PkmnGameRowItemPkmn;
