import React from "react";

import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/whatsapp");
  }, [navigate]);

  return null;
}

export default Account;