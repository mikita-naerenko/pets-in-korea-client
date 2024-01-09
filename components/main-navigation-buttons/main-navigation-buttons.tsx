"use client";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { THEMATIC_ARTICLES } from "@/lib/constants";

import {
  ImageButton,
  ImageContainer,
  Content,
  // Image,
  ImageBackdrop,
  ImageMarked,
} from "./styled-components";
import Container from "@mui/material/Container";

export default function MainNavigationButtons() {
  const router = useRouter();

  return (
    <Container disableGutters component={"section"}>
      <Box
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {THEMATIC_ARTICLES.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            onClick={() =>
              router.push(
                `${image.href}` + `${image.tagId ? `/${image.tagId}` : ""}`
              )
            }
          >
            <ImageContainer>
              <Image
                alt={image.title}
                src={image.img}
                placeholder="blur"
                blurDataURL={image.blur}
                quality={80}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </ImageContainer>
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Content>
              <Typography
                component="span"
                variant="h5"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Content>
          </ImageButton>
        ))}
      </Box>
    </Container>
  );
}
