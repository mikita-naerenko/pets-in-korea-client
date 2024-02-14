"use client";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import SearchInputXs from "./search-input-xs";
import SearchInputSm from "./search-input-sm";
import NavbarMd from "./navbar-md";
import NavbarXs from "./navbar-xs";

import CTAButton from "../cta-button/index";
import { LogoMD, LogoSX } from "./logo-set";
import { styleAppBar } from "./styles";

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(
  { children }: { children: React.ReactNode },
  props: Props
) {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const handleShowSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={styleAppBar}>
          <Container sx={{ px: { sm: "24px", xl: 0 } }}>
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <NavbarXs />
              <LogoSX />
              <LogoMD />

              <Box sx={{ display: "flex" }}>
                {showSearchInput && (
                  <SearchInputSm handleClose={setShowSearchInput} />
                )}
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  data-testid="search-button"
                  onClick={handleShowSearchInput}
                >
                  {showSearchInput ? (
                    <CloseIcon data-testid="close-search-button-icon" />
                  ) : (
                    <SearchIcon data-testid="search-button-icon" />
                  )}
                </IconButton>
                <CTAButton />
              </Box>
            </Toolbar>
          </Container>
          {showSearchInput && (
            <SearchInputXs handleClose={setShowSearchInput} />
          )}
          <NavbarMd />
        </AppBar>
      </HideOnScroll>
      <Box component="main" sx={{ my: { xs: 10, md: 17 } }}>
        {children}
      </Box>
    </>
  );
}
