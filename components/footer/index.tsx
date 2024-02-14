"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { GradientContainer } from "./styled";
import NavItems from "./nav-items";
import { LogoMD, LogoSX } from "./logo-set";

import { styleGradientContainer } from "./style";

export default function Footer() {
  return (
    <GradientContainer sx={styleGradientContainer}>
      <Container disableGutters>
        <Box display={"flex"} justifyContent="center">
          <LogoSX />
          <LogoMD />
          <NavItems />
        </Box>
      </Container>
    </GradientContainer>
  );
}
