import React, { useRef } from "react";

import "./style.css";

import { useForm } from "react-hook-form";
import { useSessions } from "../queries";
import { MoreVertical } from "react-feather";
import { Outlet, useParams } from "react-router-dom";
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
            <Input variant="search" placeholder="Pesquisar" name="search" register={register} />
          </form>
        </div>

        <div className="chat__body">

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="chat__item">
            <div className="chat__avatar">
              <input className="chat__checkbox" type="checkbox" name="" id="" />
              <div className="chat__avatar-img-wrapper">
                <img className="chat__avatar-img" src="https://cdn.dribbble.com/users/6208205/screenshots/14407367/media/c17a9cf4566b898d63a04f3e449059e5.png?compress=1&resize=400x300&vertical=top" alt="" />
              </div>
            </div>
            <div className="chat__info">
              <div className="chat__info-name-wrapper">
                <span className="chat__info-name">Lucas Bueno</span>
                <div className="chat__info-actions">
                  <span className="chat__info-hr">12:34</span>
                  <div className="chat__info-bttn"></div>
                  <div className="chat__info-bttn"></div>
                </div>
              </div>
              <p className="chat__info-last-message">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>


        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default QrCode;