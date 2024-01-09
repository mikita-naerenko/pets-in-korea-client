"use client";
import { createTheme } from "@mui/material/styles";
import { PT_Sans_Caption } from "next/font/google";

const font = PT_Sans_Caption({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2b1654",
      light: "rgb(85, 68, 118)",
      dark: "rgb(30, 15, 58)",
    },
    secondary: {
      main: "#F50057",
    },
  },
  typography: {
    fontFamily: [
      font.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",

      "sans-serif",
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(","),
  },
});
