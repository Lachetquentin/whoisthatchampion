import { CSSProperties } from 'react';

interface ButtonProps {
  onClick?: any;
  label?: string;
  className?: string;
  textClassName?: string;
  iconComponent?: any;
  containerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  label,
  isLoading = false,
  className = '',
  textClassName = '',
  containerStyle,
  textStyle,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`
        w-full
        flex justify-center items-center cursor-pointer
        ${className}
      `}
      onClick={onClick}
      style={containerStyle}
    >
      {label && !isLoading && (
        <p className={`truncate px-[8px] ${textClassName}`} style={textStyle}>
          {label}
        </p>
      )}
    </button>
  );
};

export default Button;
