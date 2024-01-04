"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { keyframes } from "@mui/material";

import { usePathname } from "next/navigation";
import { theme } from "../theme";

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
      // maxWidth={}
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
      <Container maxWidth="xl">
        <Box display={"flex"}>
          <Box
            sx={{
              display: {
                md: "block",
                justifyContent: "center",
              },
            }}
          >
            <Image width={200} height={60} alt="Logo" src={Logo} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              ml: 3,
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
