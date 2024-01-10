"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "../ui/article-description";
import ArticleTitle from "../ui/article-title";
import Image from "next/image";
import shelter from "../../public/shelter.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "../recommendations";
import { StyledTextContainer } from "../styled-text-container";

export default function Shelter() {
  return (
    <Container disableGutters>
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <ArticleTitle>{"Приюты для животных в Южной Корее"}</ArticleTitle>
          <ArticleDescription>
            {
              "Решили взять животное из приюта? Ниже найдете список приютов и полезную информацию."
            }
          </ArticleDescription>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              maxHeight: "450px",
            }}
            src={shelter.src}
            quality={90}
            width={250}
            height={300}
            alt={`Изображения собак в стиле оригами`}
          />
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "100%" } }}>
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box
          sx={{ width: { md: "30%" }, display: { xs: "none", md: "block" } }}
        >
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
