import React from "react";

import "./style.css";

import { useForm } from "react-hook-form";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/schemas/new-session.schema";

import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Input from "../../../components/Forms/Input";
import Button from "../../../components/Forms/Button";
import RoundedButton from "../../../components/Forms/RoundedButton";

const NewSession = props => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const goBack = () => {
    navigate("/whatsapp");
  }

  const createSession = data => console.log(data);

  return (
    <div className="session">
      <Header className="bg-grey-01 box-shadow">
        <RoundedButton icon={<ArrowLeft size={22} />} className="mr-20" onClick={goBack} />
        <span className="text-color">Criar uma nova sessão</span>
      </Header>
      <div className="container d-flex flex-row justify-content-center">
        <Card className="mt-100 x-p-20 y-p-20">
          <form onSubmit={handleSubmit(createSession)}>
            <Input placeholder="Exemplo: Marketing" name="name" error={errors.name} register={register} />

            <Input placeholder="Exemplo: Lorem ipsum dolor" name="description" error={errors.description} register={register} />

            <Button title="Criar nova sessão! 🎉" type="submit" color="terciary" />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewSession;