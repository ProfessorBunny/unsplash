import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const test = "testing context";
  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
