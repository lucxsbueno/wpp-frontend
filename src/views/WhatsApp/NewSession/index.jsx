import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../components/Forms/RoundedButton";
import Header from "../../../components/Header";

import "./style.css";

const NewSession = props => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  } 

  return (
    <div className="session">
      <Header className="bg-grey-01 box-shadow">
        <RoundedButton icon={<ArrowLeft size={22} />} className="mr-20" onClick={goBack} />
        <span className="text-color">Criar uma nova sessão</span>
      </Header>
    </div>
  );
}

export default NewSession;