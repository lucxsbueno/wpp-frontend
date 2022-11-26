import React from "react";

import "./style.css";
import routes from "./routes";
import { NavLink } from "react-router-dom";

const TopNav = props => {

  return (
    <div className="app__nav">
      <ul className="app__menu">
        {routes.map(route => {
          return (
            <li key={route.id} className="app__item">
              <NavLink to={route.to} className={({ isActive }) => 
                `app__link ${isActive ? "app__link--active" : ""} ${route.class}`.trim()}>
                  {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopNav;