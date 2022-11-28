import React from "react";

import "./style.css";

const variants = {
  "primary": "bttn bttn--primary",
  "terciary": "bttn bttn--terciary",
};

const Button = props => {
  const { isLoading, title, type, icon, color, onClick } = props;
  
  const bttnTitle = isLoading ? "Carregando..." : title;

  return (
    <button type={type} title={title}
      className={variants[color]} onClick={onClick}>
        {icon}
        <span className="bttn__title">{bttnTitle}</span>
    </button>
  );
}

Button.defaultProps = {
  title: "Button",
  type: "button",
  icon: ""
}

export default Button;