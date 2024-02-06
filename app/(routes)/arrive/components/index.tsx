"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "@/components/ui/article-description";
import ArticleTitle from "@/components/ui/article-title";
import Image from "next/image";
import departure from "@/public/departure.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import { JSON_LD_ARTICLE, JSON_LD_HOW_TO, JSON_LD_FAQ } from "./consts";

export default function Arrive() {
  return (
    <Container disableGutters itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ARTICLE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOW_TO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_FAQ) }}
      />
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <ArticleTitle>
            {"Ввоз животных в Южную Корею: документы и требования"}
          </ArticleTitle>
          <ArticleDescription>
            {
              "Как и другие страны Южная Корея выдвигает ряд требований для тех кто желает взять с собой домашних питомцев, в этой статье постараемся максимально подробно разобраться и описать шаг за шагом дейсвия необходимые для ввоза животных в Южную Корею"
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
            src={departure.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
            itemScope
            itemProp="image"
          />
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
