"use client";

import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const BoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

export const Trapezoid = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: 250,
  marginLeft: 19,
  marginRight: 19,
  padding: 10,
  borderRadius: "24px",
  transformStyle: "preserve-3d",
  transform:
    "perspective(1300px) rotateX(35deg) translateZ(15px) translateY(20px) translateX(0px)",
  "-webkit-backface-visibility": "hidden",
  transition: "all .3s ease-out",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.8em, rgba(90, 125, 188, 0.05) 0px 0.5em 1em",

  "&:focus": {
    outline: `4px solid #5294ff`,
  },

  "@media (pointer: fine) ": {
    "&:hover": {
      transform:
        "perspective(1300px) rotateX(35deg) translateZ(15px) translateY(20px) translateX(0px) scale(1.005)",
      boxShadow:
        "rgba(67, 71, 85, 0.4) 0px 0px 1em, rgba(90, 125, 188, 0.1) 0px 0.8em 2em",
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "41%",
    height: 260,
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    height: 300,
    marginLeft: 25,
    marginRight: 25,
  },
}));

export const StraightContainer = styled(Box)(({ theme }) => ({
  transform:
    "perspective(none) rotateX(-35deg) translateZ(4px) translateY(4px) translateX(0px)",
}));

export const StyledImage = styled(Image)(({ theme }) => ({
  width: "70%",
  height: "auto",
  minHeight: "50px",
  minWidth: "170px",
  maxHeight: "110px",
  [theme.breakpoints.up("md")]: {
    maxHeight: "none",
  },
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 600,
  [theme.breakpoints.up("md")]: {
    marginTop: 10,
  },
}));
