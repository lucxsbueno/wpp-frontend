import React from "react";

import "./style.css";

import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Button from "../../../components/Forms/Button";
import RoundedButton from "../../../components/Forms/RoundedButton";

const NewSession = props => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/whatsapp");
  }

  return (
    <div className="session">
      <Header className="bg-grey-01 box-shadow">
        <RoundedButton icon={<ArrowLeft size={22} />} className="mr-20" onClick={goBack} />
        <span className="text-color">Criar uma nova sessão</span>
      </Header>
      <div className="container d-flex flex-row justify-content-center">
        <Card className="mt-100">
          <Button title="Criar nova sessão! 🎉" color="terciary" onClick={() => {}} />
        </Card>
      </div>
    </div>
  );
}

export default NewSession;