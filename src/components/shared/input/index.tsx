import React from 'react';

interface InputProps {
  label?: string;
  setForm: (form: any) => void;
  name: string;
  value: string;
  className?: string;
  inputClassName?: string;
  mandatory?: boolean;
  type?: string;
  style?: React.CSSProperties;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  mandatory,
  className,
  label,
  setForm,
  inputClassName,
  name,
  value,
  style = {},
  placeholder,
}) => {
  return (
    <div className={className} style={style}>
      {label && (
        <p className="text-grey mb-[6px]">
          {label}
          <span className={`${mandatory ? 'visible' : 'hidden'} text-red-600`}>
            *
          </span>
        </p>
      )}
      <input
        type={type || 'text'}
        className={`outline-none placeholder-lightgrey text-black ${inputClassName}`}
        onChange={(evt) =>
          setForm((e: any) => {
            const copy = { ...e };
            copy[name] = evt.target.value;
            return copy;
          })
        }
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
