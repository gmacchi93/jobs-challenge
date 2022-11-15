import React, { RefObject, useRef, useState } from "react";

type TextInputProps = {
  value: string;
  onClick: Function;
};

const TextInput = ({ value, onClick }: TextInputProps) => {
  return (
    <div
      className="bg-neutral-300 px-3 py-1 flex flex-row flex-shrink-0 items-center gap-2 rounded-full"
      aria-checked={true}
      role="checkbox"
    >
      <span className="flex-shrink-0 flex-1 text-neutral-700">{value}</span>
      <button
        aria-label={`Remove ${value} from selection`}
        onClick={() => {
          onClick(value);
        }}
        type="button"
        className="w-5 h-5 rounded-full bg-neutral-700  flex items-center justify-center"
      >
        <span className="text-white text-xs leading-2">X</span>
      </button>
    </div>
  );
};

type Props = {
  values: string[];
  addValue: Function;
  removeValue: Function;
  name: string;
  label: string;
  required: boolean;
};

const MultipleTextInput = ({
  values,
  addValue,
  removeValue,
  required,
  name,
  label,
}: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      if (value.trim()) {
        if (!values.includes(value)) {
          addValue(value);
        }
        e.currentTarget.value = "";
      }
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleRemove = (value: string) => {
    removeValue(value);
  };

  return (
    <div>
      <p id={`multiple-text-input-${name}`} className="font-bold">{`${label}${
        required ? "*" : ""
      }:`}</p>
      <div
        className="flex items-center flex-wrap gap-1 w-full py-1 px-2 border border-neutral-300 rounded-md"
        role="group"
      >
        {values.map((value) => (
          <TextInput key="value" value={value} onClick={handleRemove} />
        ))}
        <input
          ref={inputRef}
          type="text"
          className="flex-1 py-1 px-3 mx-1"
          placeholder="Type somthing..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default MultipleTextInput;
