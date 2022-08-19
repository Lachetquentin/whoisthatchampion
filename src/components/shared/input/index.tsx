import React from 'react';

interface InputProps {
  label?: string;
  setForm: (form: any) => void;
  name: string;
  value: string;
  className?: string;
  mandatory?: boolean;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  mandatory,
  className,
  label,
  setForm,
  name,
  value,
  placeholder,
}) => {
  return (
    <div className={className}>
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
        className="w-full px-4 py-2 border-[1px] outline-none bg-white border-greylight placeholder-lightgrey text-black"
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
