import React from "react";

import { Route, Routes } from "react-router-dom";

import Account from "./views/Account";
import WhatsApp from "./views/WhatsApp";
import Telegram from "./views/Telegram";
import Instagram from "./views/Instagram";
import Messenger from "./views/Messenger";
import QrCode from "./views/WhatsApp/QrCode";
import Chat from "./views/WhatsApp/QrCode/Chat";
import Intro from "./views/WhatsApp/QrCode/Intro";
import FirstPage from "./views/WhatsApp/FirstPage";
import NewSession from "./views/WhatsApp/NewSession";
import AppTemplate from "./components/templates/AppTemplate";

const App = () => {
  return (
    <AppTemplate>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="whatsapp" element={<WhatsApp />}>
          <Route index element={<FirstPage />} />
          <Route path=":id" element={<QrCode />}>
            <Route index element={<Intro />} />
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="new-session" element={<NewSession />} />
        </Route>
        <Route path="instagram" element={<Instagram />} />
        <Route path="messenger" element={<Messenger />} />
        <Route path="telegram" element={<Telegram />} />
      </Routes>
    </AppTemplate>
  );
};

export default App;
