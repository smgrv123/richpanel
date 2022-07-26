import React from "react";

interface Props {
  placeholder?: string;
  LoginFunction?: () => void;
}

function Button({ placeholder, LoginFunction }: Props) {
  return (
    <a>
      <div className="auth-button" onClick={LoginFunction}>
        {placeholder}
      </div>
    </a>
  );
}

export default Button;
