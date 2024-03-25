"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#7000ff",
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#7000ff",
    },
  },
};

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
