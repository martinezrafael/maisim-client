import React, { useEffect, useState } from "react";

const User = (props) => {
  const [userName, setUserName] = useState("");
  const [cnpj, setCnpj] = useState("");

  return (
    <div>
      <h1 className="font-poppins dark:text-white">José</h1>
      <span className="font-poppins dark:text-white">12.123.1234/001-12</span>
    </div>
  );
};

export default User;
