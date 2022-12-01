import React from "react";

import "./style.css";

const Intro = props => {

  return (
    <div className="intro">
      <h1 className="intro__h1">Bem vindo! 👋🏻</h1>

      <p className="intro__section">
        Para continuar, selecione uma sessão ou então crie uma clicando no
        botão <strong className="text-underline text-primary">nova sessão</strong> no
        menu ao lado.
      </p>

      <p className="intro__section">
        A sessão serve para menter seu <strong>WhatsApp</strong> conectado.
      </p>

      <p className="intro__section">
        Você pode conectar diversas contas de <strong>WhatsApp</strong>, gerenciá-las
        e mandar mensagens de um único lugar! 🎉🥳👏🏻
      </p>
    </div>
  );
}

export default Intro;