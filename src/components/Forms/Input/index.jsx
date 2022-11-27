import React from "react";

import "./style.css";

const Input = props => {
  const { loading, type, placeholder, name, register, error, disabled, notErrorMessage } = props;

  const isError = error ? "input--error" : "";

  const isLoading = loading ? "input--loading" : "";

  return (
    <div className="w-100">
      <input type={type} className={`input ${isError} ${isLoading}`.trim()}
        placeholder={placeholder} disabled={disabled} {...register(name)} />
          {error && !notErrorMessage && <div className="mt-5 text-error-light">{error.message}</div>}
    </div>
  )
}

TodoInput.defaultProps = {
  notErrorMessage: false,
  disabled: false
}

export default Input;