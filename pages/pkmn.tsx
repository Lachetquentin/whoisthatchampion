import PkmnGame from 'pkmn/components/game';

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <div className="max-w-[840px] mx-auto">
        <PkmnGame />
      </div>
    </div>
  );
}
