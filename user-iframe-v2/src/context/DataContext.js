import React from "react";
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [whereFrom, setWhereFrom] = useState("");
  const value = { whereFrom, setWhereFrom };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export default DataContextProvider;
