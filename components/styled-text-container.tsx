"use client";
import { styled } from "@mui/material/styles";
import { theme } from "./theme";

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
  "& blockquote": {
    fontStyle: "italic",
    padding: "5px",
    paddingLeft: "30px",
    background: "#f2f2f0",
    borderRadius: "5px",
    position: "relative",
    "& ::before": {
      position: "absolute",
      top: 0,
      left: -25,
      content: "''",
      width: "5px",
      height: "100%",
      borderRadius: "5px",
      backgroundColor: `${theme.palette.primary.main}`,
    },
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "0",
  },
}));
