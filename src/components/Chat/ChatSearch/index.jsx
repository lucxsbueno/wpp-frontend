import React from "react";

import Input from "../../Forms/Input";
import { useForm } from "react-hook-form";

import "./style.css";

const ChatSearch = props => {
  const { register, handleSubmit } = useForm();

  const search = data => console.log(data);

  return (
    <div className="chat__search">
      <form onSubmit={handleSubmit(search)}>
        <Input variant="search" placeholder="Pesquisar" name="search" register={register} />
      </form>
    </div>
  );
}

export default ChatSearch;