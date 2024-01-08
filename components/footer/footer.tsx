"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { keyframes } from "@mui/material";

import { usePathname } from "next/navigation";
import { theme } from "../theme";

import LogoDesktop from "../../public//logo-desktop.png";
import Logo from "../../public/logo.png";

const animateGradient = keyframes`
0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
`;

const GradientContainer = styled(Container)`
  background: linear-gradient(90deg, #2b1654, #554476);
  background-size: 400% 400%;

  animation: ${animateGradient} 13s ease infinite;
`;

export default function Footer() {
  const pathname = usePathname();

  return (
    <GradientContainer
      sx={{
        maxWidth: "100% !important",
        display: "flex",
        alignItems: "center",
        height: { md: 100 },
        // backgroundColor: `#b78784`,

        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      <Container disableGutters maxWidth="xl">
        <Box display={"flex"} justifyContent="center">
          <Box
            sx={{
              display: {
                md: "none",
              },
              justifyContent: "center",
            }}
          >
            <Link href="/">
              <Image width={180} height={40} alt="Logo" src={Logo} />
            </Link>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
                justifyContent: "center",
                maxHeight: "70px",
                width: "200px",
              },
            }}
          >
            <Link href="/">
              {" "}
              <Image
                width={200}
                height={60}
                alt="Logo"
                src={LogoDesktop}
                style={{ width: "100%", height: "70px", maxHeight: "70px" }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              mx: "auto",
            }}
          >
            {NAV_ITEMS.map((item) => {
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  style={{ width: "30%" }}
                >
                  <Typography
                    sx={{
                      color: `${
                        pathname === item.href
                          ? theme.palette.secondary.main
                          : "#ffffff"
                      }`,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </GradientContainer>
  );
}
