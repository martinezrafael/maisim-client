import React, { useEffect, useState } from "react";
import userData from "../../../user.json";

const User = (props) => {
  const [userName, setUserName] = useState("");
  const [cnpj, setCnpj] = useState("");

  return (
    <div>
      <h1 className="font-poppins dark:text-white">{userData.username}</h1>
      <span className="font-poppins dark:text-white">12.123.1234/001-12</span>
    </div>
  );
};

export default User;
