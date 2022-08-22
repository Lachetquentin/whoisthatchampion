interface PkmnGameRowTitleProps {
  title: string;
}

const PkmnGameRowTitle: React.FC<PkmnGameRowTitleProps> = ({ title }) => {
  return (
    <p className="dynapuff mb-[6px] border-b-[2px] w-[80%] mx-auto">{title}</p>
  );
};

export default PkmnGameRowTitle;
