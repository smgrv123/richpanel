import React from "react";
import "../../styles/authStyles.css";

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  heading?: string;
  type?: string;
  value?: string;
}

function TextInput({ placeholder, onChange, heading, type, value }: Props) {
  return (
    <div className="auth-input-parent">
      <p className="auth-input-heading" >{heading}</p>
      <input
        className="auth-input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextInput;
