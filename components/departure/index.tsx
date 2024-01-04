"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "../ui/article-description";
import ArticleTitle from "../ui/article-title";
import Image from "next/image";
import Document10days from "../../public/10-days.jpeg";
import Document3days from "../../public/Document3days.jpeg";
import Relax from "../../public/relax.png";
import ArriveMain from "../../public/arrive-main.png";
import antibodyTest from "../../public/antibody-test.png";
import Recommendations from "../recommendations";
import { StyledTextContainer } from "../styled-text-container";
import { Article } from "@/lib/type";
import OtherArticles from "../articles-set-personal/other-articles";
import InnerStaticContent from "./innerStaticContent";

export default function Departure({ articles }: { articles: Article[] }) {
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
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
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
