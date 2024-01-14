"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "../ui/article-description";
import ArticleTitle from "../ui/article-title";
import Image from "next/image";
import departure from "../../public/departure.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "../recommendations";
import { StyledTextContainer } from "../styled-text-container";
import { Article } from "@/lib/type";
import OtherArticles from "../other-articles";
import { JSON_LD } from "./consts";

export default function Arrive({ articles }: { articles: Article[] }) {
  return (
    <Container disableGutters itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
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
        <Box sx={{ width: { md: "70%" } }}>
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box sx={{ width: { md: "30%" } }}>
          <OtherArticles articles={articles} />
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
