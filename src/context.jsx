import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  searchValue: "football",
  setSearchValue: () => {},
});

const getBrowserSetMode = () => {
  const defaultBrowserMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  const storedThemeIsDark = localStorage.getItem("storedTheme");
  if (storedThemeIsDark === null) {
    return defaultBrowserMode;
  }
  if (storedThemeIsDark !== null) {
    return storedThemeIsDark === "true";
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getBrowserSetMode());
  const [searchValue, setSearchValue] = useState("football");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("storedTheme", newDarkTheme);
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
