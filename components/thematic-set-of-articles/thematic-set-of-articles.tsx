"use client";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { THEMATIC_ARTICLES } from "@/lib/constants";

import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
} from "./styled-components";
import Container from "@mui/material/Container";
import { theme } from "../theme";
import { Bone } from "lucide-react";
import SectionTitle from "../ui/Section-title";

export default function ThematicSetOfArticles() {
  const router = useRouter();

  return (
    <Container disableGutters component={"section"}>
      {/* <SectionTitle title="Подборки важных статей:" svg={<Bone />} /> */}
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
            onClick={() => router.push(`${image.href}/${image.tagId}`)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.img})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
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
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Container>
  );
}
