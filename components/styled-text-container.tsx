"use client";
import { styled } from "@mui/material/styles";

export const StyledTextContainer = styled("div")(({ theme }) => ({
  fontSize: "0.9rem",
  marginBottom: "3rem",
  marginTop: "2rem",
  "& ul": {
    listStyleType: "circle",
    paddingTop: "0.5rem",
  },
  "& li": {
    paddingLeft: "0.5rem",
    paddingBottom: "0.5rem",
    listStylePosition: "inside",
  },
  "& p": {
    marginTop: "0.3rem",
    marginBottom: "0.3rem",
    position: "relative",
    "&::first-letter ": {
      marginLeft: "1rem",
    },
  },
  "& a": {
    color: `${theme.palette.primary.light}!important`,
  },
  "& h3": {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  "& h2": {
    marginTop: "1rem",
  },
  "& dt": {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1.3rem",
  },
  "& dd": {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
  },
}));
