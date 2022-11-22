import React from "react";
import { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <Context.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
