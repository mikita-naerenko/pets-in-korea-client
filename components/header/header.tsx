"use client";
import { useState } from "react";

import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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

import Logo from "../../public/logo.svg";

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
        <AppBar
          sx={{
            backgroundImage: `linear-gradient(to right, #2b1654 0%, #2575fc 100%)`,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <NavbarXs />
              <Box
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                  display: {
                    xs: "flex",
                    md: "none",
                    justifyContent: "center",
                  },
                }}
              >
                <Image width={180} height={50} alt="Logo" src={Logo} />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    justifyContent: "center",
                  },
                }}
              >
                <Image width={200} height={60} alt="Logo" src={Logo} />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  ml: 10,
                }}
              >
                <Typography>Информационный портал для</Typography>
                <Typography>владельцев животных в Южной Корее</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {showSearchInput && <SearchInputSm />}
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleShowSearchInput}
                >
                  {showSearchInput ? <CloseIcon /> : <SearchIcon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
          {showSearchInput && <SearchInputXs />}
          <NavbarMd />
        </AppBar>
      </HideOnScroll>
      <Box component="main" sx={{ my: { xs: 10, md: 17 } }}>
        {children}
      </Box>
    </>
  );
}
