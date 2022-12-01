import React from "react";

import "./style.css";

const Input = props => {
  const { className, loading, type, placeholder, name, register, error, disabled, variant, notErrorMessage } = props;

  const isError = error ? "input--error" : "";
  const isLoading = loading ? "input--loading" : "";
  const isSearch = variant === "search" ? "input--search" : "";

  return (
    <div className="w-100 mb-15">
      <input type={type} className={`input ${isError} ${isLoading} ${className} ${isSearch}`.trim()}
        placeholder={placeholder} disabled={disabled} {...register(name)} />
          {error && !notErrorMessage && <div className="mt-5 text-error-light">{error.message}</div>}
    </div>
  )
}

Input.defaultProps = {
  notErrorMessage: false,
  disabled: false
}

export default Input;