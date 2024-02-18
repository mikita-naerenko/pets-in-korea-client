"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  Slide,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import CTAButton from "../cta-button/index";
import { LogoMD, LogoSX } from "./logo-set";
import { styleAppBar } from "./styles";

const SearchInputXs = dynamic(() => import("./search-input-xs"), {
  ssr: false,
});
const SearchInputSm = dynamic(() => import("./search-input-sm"), {
  ssr: false,
});

const NavbarXs = dynamic(() => import("./navbar-xs"));
const NavbarMd = dynamic(() => import("./navbar-md"));

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
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              {screenWidth < 900 && <NavbarXs />}

              <LogoSX />
              <LogoMD />

              <Box sx={{ display: "flex" }}>
                {showSearchInput && (
                  <SearchInputSm handleClose={setShowSearchInput} />
                )}
                <Tooltip title="Поиск по сайту">
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
                </Tooltip>
                <CTAButton />
              </Box>
            </Toolbar>
          </Container>
          {showSearchInput && (
            <SearchInputXs handleClose={setShowSearchInput} />
          )}
          {screenWidth >= 900 && <NavbarMd />}
        </AppBar>
      </HideOnScroll>
      <Box component="main" sx={{ my: { xs: 10, md: 17 } }}>
        {children}
      </Box>
    </>
  );
}
