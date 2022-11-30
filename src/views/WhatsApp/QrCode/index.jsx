import React, { useRef } from "react";

import "./style.css";

import { useForm } from "react-hook-form";
import { useSessions } from "../queries";
import { MoreVertical } from "react-feather";
import { useParams } from "react-router-dom";
import { useWebsocket } from "../../../utils/hooks/useWebsocket";

import LoadingBar from "react-top-loading-bar";
import Header from "../../../components/Header";
import RoundedButton from "../../../components/Forms/RoundedButton";
import Input from "../../../components/Forms/Input";

const QrCode = props => {
  const ref = useRef(null);
  let { id } = useParams();
  const { data: sessions } = useSessions();
  const { qr, log, message, isConnected } = useWebsocket(id, sessions, ref);
  const { register, handleSubmit } = useForm();

  // if (qr) {
  //   return (
  //     <div className="w-100 h-100 d-flex flex-column justify-content-center align-center">
  //       <div className="d-flex flex-column justify-content-center align-center">
  //         <h3 className="text-color text-center mb-10">WhatsApp</h3>
  //         {isConnected && <p className="text-color text-center mb-20">WebSocket conectado</p>}
  //         {qr && <img src={qr} alt="Qr-code gerado para conectar-se ao WhatsApp" className="mb-20" />}
  //         <p className="text-color text-center mb-20">{log}</p>
  //         <p className="text-color text-center">{message}</p>
  //         <LoadingBar height="3px" color="#009B72" ref={ref} />
  //       </div>
  //     </div>
  //   );
  // }

  const search = data => console.log(data);

  return (
    <div className="w-100 h-100 d-flex flex-row">
      <div className="chat">
        <Header className="bg-grey-01 box-shadow d-flex flex-row justify-content-space-between">
          <span className="text-color">Conversas</span>
          <RoundedButton icon={<MoreVertical size={22} />} />
        </Header>
        <div className="chat__header">
          <form onSubmit={handleSubmit(search)}>
            <Input placeholder="Pesquisar" name="search" register={register} />
          </form>
        </div>
        <div className="chat__body">

        </div>
      </div>

      <div className="chat__messages">
        teste
      </div>
    </div>
  );
}

export default QrCode;