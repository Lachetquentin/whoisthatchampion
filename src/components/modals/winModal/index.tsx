import { useState } from 'react';
import Modal from 'react-modal';
import VictoryPng from 'images/Victory.png';

interface WinModalProps {
  dailyChampion: any;
  nbTry: number;
  gameIndex: number;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '16px',
    background: '#21243a',
    color: 'white',
    maxWidth: '750px',
    maxHeight: '90%',
    height: 'auto',
    zIndex: '30',
    position: 'absolute',
    paddingTop: 24,
    overflow: 'auto',
    border: 0,
  },
  overlay: {
    background: 'rgba(29,29,29,0.43)',
    zIndex: 31,
  },
};

const WinModal: React.FC<WinModalProps> = ({
  dailyChampion,
  nbTry,
  gameIndex,
}) => {
  const [hasCopiedShare, setHasCopiedShare] = useState(false);
  const shareScore = () => {
    let share = `🔷 LOLGUESS #${gameIndex} - ${nbTry + 1} ${
      nbTry + 1 === 1 ? 'essai' : 'essais'
    }`;

    share = share + '\nhttps://whoisthatchampion.vercel.app';
    navigator.clipboard.writeText(share);
    setHasCopiedShare(true);
  };

  return (
    <Modal
      appElement={document.getElementById('app')}
      isOpen={true}
      style={modalStyles}
    >
      <img src={VictoryPng.src} className="w-[400px] mx-auto" />
      <p
        className={`uppercase beaufort text-center text-green-400
        text-[24px]`}
      >
        GGWP, invocateur
      </p>
      <p className="mt-6 appColor font-semibold">
        Tu as trouvé{' '}
        <span className="font-semibold beaufort text-[18px]">
          {dailyChampion.name}
        </span>{' '}
        en...{' '}
        <span className="font-bold text-[18px]">
          {nbTry + 1} {nbTry + 1 === 1 ? 'essai' : 'essais'} !
        </span>
      </p>
      <br />
      <br />
      <p className="appColor font-semibold">
        Résumé de ta partie -{' '}
        <span onClick={shareScore} className="underline cursor-pointer">
          {hasCopiedShare ? 'Copié !' : 'Partager'}
        </span>
      </p>
      <br />
      <p className="font-bold">
        🔷 LOLGUESS #{gameIndex} - {nbTry + 1}{' '}
        {nbTry + 1 === 1 ? 'essai' : 'essais'}
      </p>
      <p className="font-bold">https://whoisthatchampion.vercel.app</p>
      <br />
      <p className="appColor font-semibold">
        Reviens demain pour ta partie quotidienne 😉
      </p>
    </Modal>
  );
};

export default WinModal;
