import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  searchValue: "football  ",
  setSearchValue: () => {},
});

const getBrowserSetMode = () => {
  const defaultBrowserMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  console.log(defaultBrowserMode);
  return defaultBrowserMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getBrowserSetMode());
  const [searchValue, setSearchValue] = useState("football");
  const toggleDarkTheme = () => {
    setIsDarkTheme((prevstate) => {
      return !prevstate;
    });
  };
  useEffect(() => {
    // const body = document.querySelector("body");
    // body.classList.toggle("dark-theme", isDarkTheme);
    //Same thing as above
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
