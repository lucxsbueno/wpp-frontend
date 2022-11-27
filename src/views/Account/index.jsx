import React from "react";

import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/whatsapp");
  }, []);

  return null;
}

export default Account;