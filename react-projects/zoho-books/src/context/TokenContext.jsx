import React, { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [lastAccessToken, setLastAccessToken] = useState(localStorage.getItem("lastAccessToken"));
  const [accounts, setAccounts] = useState([]);
  const [files, setFiles] = useState([]);

  return (
    <TokenContext.Provider value={{ lastAccessToken, setLastAccessToken, accounts, setAccounts, files, setFiles }}>
      {children}
    </TokenContext.Provider>
  );
};
