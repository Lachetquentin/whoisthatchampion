interface PkmnGameRowItemProps {
  label: string;
  state: string;
}

const PkmnGameRowItem: React.FC<PkmnGameRowItemProps> = ({ label, state }) => {
  const getColorByState = () => {
    switch (state) {
      case 'correct':
        return 'bg-[#67C096]';
      case 'incorrect':
        return 'bg-[#DF543F]';
      default:
        return 'bg-[#F29D62]';
    }
  };

  return (
    <div
      className={`card w-full rounded-[8px] overflow-hidden cursor-pointer ${getColorByState()}`}
    >
      <div className="pb-[100%] relative">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {label}
        </p>
      </div>
    </div>
  );
};

export default PkmnGameRowItem;
