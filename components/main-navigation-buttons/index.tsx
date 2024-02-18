"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  ImageButton,
  ImageContainer,
  Content,
  ImageBackdrop,
  ImageMarked,
} from "./styled-components";
import { THEMATIC_ARTICLES } from "@/lib/constants";
import { IMAGE_QUALITY } from "@/lib/image-quality";

import { styleImage, styleTitle, styleWrapper } from "./style";

export default function MainNavigationButtons() {
  const router = useRouter();

  return (
    <Container disableGutters component={"section"}>
      <Box sx={styleWrapper}>
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
                src={image.mobileImg}
                quality={IMAGE_QUALITY.mainNavigationButtons}
                fill
                style={styleImage}
                priority
              />
            </ImageContainer>
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Content>
              <Typography
                className="TitleButton-root"
                component="span"
                variant="h5"
                sx={styleTitle}
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
