import React from "react";

import "./style.css";

const variants = {
  "primary": "bttn bttn--primary"
};

const Button = props => {
  const { title, type, icon, color, onClick } = props;
 
  return (
    <button type={type} title={title}
      className={variants[color]} onClick={onClick}>
        {icon}
        <span className="bttn__title">{title}</span>
    </button>
  );
}

Button.defaultProps = {
  title: "Button",
  type: "button",
  icon: ""
}

export default Button;