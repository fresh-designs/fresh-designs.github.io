import React, { useState, useEffect } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    pHead: "#ffffff",
    pSubHead: "#ffffffaa",
    pBG: "red",
    pAccent: "#3282b8"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    pHead: "#ffffff",
    pSubHead: "#ffffffaa",
    pBG: "#1b262c",
    pAccent: "#3282b8"
  }
};

export const ThemeContext = React.createContext(themes.light);

export const ThemeProvider = ({ children, theme }) => {
  const [themeV, setTheme] = useState(theme || themes.light);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={themeV}>{children}</ThemeContext.Provider>
  );
};

export default {
  ThemeContext,
  ThemeProvider
};
