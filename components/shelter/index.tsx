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
import { JSON_LD_HOWTO, JSON_LD_LIST, JSON_LD_TABLE } from "./constants";

export default function Shelter() {
  return (
    <Container disableGutters itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOWTO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_LIST) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_TABLE) }}
      />
      <Box sx={{ display: { md: "flex" } }} itemProp="mainEntity">
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <ArticleTitle itemProp="headline">
            {"Приюты для животных в Южной Корее"}
          </ArticleTitle>
          <ArticleDescription>
            {
              "Решили взять животное из приюта? Ниже найдете список приютов и полезную информацию."
            }
          </ArticleDescription>
        </Box>
        <Box
          sx={{ width: { md: "40%" } }}
          itemType="https://schema.org/ImageObject"
        >
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
            itemProp="image"
          />
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "100%" } }} itemProp="articleBody">
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
