import React from "react";

import { Route, Routes } from "react-router-dom";

import AppTemplate from "./components/templates/AppTemplate";

import Account from "./views/Account";
import WhatsApp from "./views/WhatsApp";
import Telegram from "./views/Telegram";
import Instagram from "./views/Instagram";
import Messenger from "./views/Messenger";
import QrCode from "./views/WhatsApp/QrCode";
import FirstPage from "./views/WhatsApp/FirstPage";
import NewSession from "./views/WhatsApp/NewSession";

const App = () => {
  return (
    <AppTemplate>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="whatsapp" element={<WhatsApp />}>
          <Route index element={<FirstPage />} />
          <Route path=":id" element={<QrCode />} />
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
