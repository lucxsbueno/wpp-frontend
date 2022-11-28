import React from "react";

import "./style.css";

import Header from "../../components/Header";
import Button from "../../components/Forms/Button";

import { Plus } from "react-feather";
import { useSessions } from "./queries";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const WhatsApp = props => {
  const navigate = useNavigate();

  const goToNewSession = () => {
    navigate("new-session");
  }

  const { data: sessions } = useSessions();

  return (
    <div className="wpp">
      <div className="wpp__menu">
        <Header className="box-shadow">
          <span className="text-color w-100">Sessões abertas</span>
          <span className="text-color">{sessions?.data.length}</span>
        </Header>

        <div className="wpp__menu-body">
          <ul className="wpp__nav">
            {sessions?.data && sessions?.data.map(session => {
              return (
                <li key={session.id} className="wpp__item">
                  <NavLink to={`/whatsapp/${session.id}`} 
                    className={({ isActive }) => `wpp__link ${isActive ? "wpp__link--active" : ""}`.trim()}>
                      <div className="w-100">
                        <p className="wpp__session-name">{session.name}</p>
                        <p className="wpp__session-description">{session.description}</p>
                      </div>
                      <div className="wpp__session-status"></div>
                  </NavLink>
                </li>
              );
            })}
          </ul>

        </div>
        <div className="wpp__menu-footer">
          <Button title="Nova sessão" icon={<Plus size={20} />} color="primary" onClick={goToNewSession} />
        </div>
      </div>

      <div className="wpp__content">
        <Outlet />
      </div>
    </div>
  );
}

export default WhatsApp;