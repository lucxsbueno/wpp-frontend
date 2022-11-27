import React from "react";

import { Route, Routes } from "react-router-dom";

import AppTemplate from "./components/templates/AppTemplate";

import WhatsApp from "./views/WhatsApp";
import Instagram from "./views/Instagram";
import Messenger from "./views/Messenger";
import Telegram from "./views/Telegram";
import NewSession from "./views/WhatsApp/NewSession";
import FirstPage from "./views/WhatsApp/FirstPage";
import Account from "./views/Account";

const App = () => {
  return (
    <AppTemplate>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="whatsapp" element={<WhatsApp />}>
          <Route index element={<FirstPage />} />
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
