import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoMobile from "@/public/logo.png";
import LogoDesktop from "@/public//logo-desktop.png";

export const LogoMD = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
          justifyContent: "center",

          width: "200px",
          maxHeight: "80px",
        },
      }}
    >
      <Link href="/">
        <Image
          width={180}
          height={66}
          alt="Logo"
          src={LogoDesktop}
          style={{ marginTop: "10px" }}
        />
      </Link>
    </Box>
  );
};

export const LogoSX = () => {
  return (
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
      <Link href="/">
        <Image width={180} height={40} alt="Logo" src={LogoMobile} />
      </Link>
    </Box>
  );
};
