"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "../ui/article-description";
import ArticleTitle from "../ui/article-title";
import Image from "next/image";
import ArriveMain from "../../public/arrive-main.png";
import Recommendations from "../recommendations";
import { StyledTextContainer } from "../styled-text-container";
import InnerStaticContent from "./innerStaticContent";
import { JSON_LD_ARTICLE, JSON_LD_HOWTO, JSON_LD_LIST } from "./constants";

export default function Departure() {
  return (
    <Container disableGutters>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ARTICLE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOWTO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_LIST) }}
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
            {"Как увезти домашнее животное из Южной Кореи"}
          </ArticleTitle>
          <ArticleDescription>
            {
              "Жизнь бывает непредсказуема, и иногда возникает острая необходимость по тем или иным причинам покинуть Южную Корею. Подготовка всех необходимых документов для путешествия вместе с животным занимает время, и к решению этого вопроса мы рекомендуем приступать заблаговременно."
            }
          </ArticleDescription>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%", height: "100%" }}
            src={ArriveMain.src}
            quality={80}
            width={250}
            height={300}
            alt={`Как увезти домашнее животное из Южной Кореи`}
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
