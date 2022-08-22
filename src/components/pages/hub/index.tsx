import Button from 'lol/components/shared/button';
import { useRouter } from 'next/router';

const Hub = () => {
  const router = useRouter();

  const onLoL = () => {
    router.push('/lol');
  };

  const onPkmn = () => {
    router.push('/pkmn');
  };

  return (
    <div className="w-full min-h-screen overflow-auto">
      <div className="max-w-[720px] mx-auto">
        <Button onClick={onLoL} label="League Of Legends" />
        <Button onClick={onPkmn} label="Pokemon" />
      </div>
    </div>
  );
};

export default Hub;
