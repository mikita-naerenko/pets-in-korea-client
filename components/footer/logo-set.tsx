import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";
import LogoDesktop from "../../public//logo-desktop.png";
import LogoMobile from "../../public/logo.png";

export const LogoMD = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
          justifyContent: "center",
          maxHeight: "80px",
          width: "200px",
        },
      }}
    >
      <Link href="/">
        {" "}
        <Image width={180} height={66} alt="Logo" src={LogoDesktop} />
      </Link>
    </Box>
  );
};

export const LogoSX = () => {
  return (
    <Box
      sx={{
        display: {
          md: "none",
        },
        justifyContent: "center",
      }}
    >
      <Link href="/">
        <Image width={180} height={40} alt="Logo" src={LogoMobile} />
      </Link>
    </Box>
  );
};
