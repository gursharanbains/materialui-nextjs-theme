"use client";

import React, { PropsWithChildren } from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { darkTheme, lightTheme } from "@/ui/theme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const ColorModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const lightThemeChosen = React.useMemo(() => {
    console.log(mode);
    return createTheme({
      ...lightTheme,
    });
  }, [mode]);

  const darkThemeChosen = React.useMemo(() => {
    console.log(mode);
    return createTheme({
      ...darkTheme,
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
