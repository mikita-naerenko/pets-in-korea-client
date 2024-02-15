"use client";
import { useEffect, useState } from "react";
import he from "he";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { StyledTextContainer } from "@/components/styled-text-container";
import AuthorInfo from "@/components/ui/author-info";
import ArticlePreview from "@/components/article-preview/index";
import Recommendations from "@/components/recommendations";
import { Article, News } from "@/lib/type";

import Fallback from "@/public/fallback.jpg";
import {
  styleBodyWrapper,
  styleRecommendationsWrapper,
  styleTextAndAuthorInfoWrapper,
} from "./style";

export default function SingleArticle({
  article,
}: // blurImage,
{
  article: Article | News;
  // blurImage: string | null;
}) {
  const [decodedHTML, setDecodedHTML] = useState("");
  const imageURL = article?.images?.[0]
    ? article?.images?.[0].url
    : Fallback.src;

  useEffect(() => {
    const decodeHTML = (input: string) => {
      return he.decode(input);
    };
    if (article) {
      setDecodedHTML(decodeHTML(article.content));
    }
  }, [article]);
  return (
    <Container disableGutters>
      <ArticlePreview currentArticle={article} img={imageURL} />
      <Box sx={styleBodyWrapper}>
        <Box sx={styleTextAndAuthorInfoWrapper}>
          <StyledTextContainer
            dangerouslySetInnerHTML={{ __html: decodedHTML }}
          />
          <AuthorInfo article={article} />
        </Box>
        <Box sx={styleRecommendationsWrapper}>
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
