"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import he from "he";
import Recommendations from "../recommendations";

import { Article, News, Tag } from "@/lib/type";
import { useEffect, useState } from "react";
import { StyledTextContainer } from "../styled-text-container";
import AuthorInfo from "@/components/ui/author-info";
import ArticlePreview from "@/components/article-preview/index";

import Fallback from "@/public/fallback.jpg";

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
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <StyledTextContainer
            dangerouslySetInnerHTML={{ __html: decodedHTML }}
          />
          <AuthorInfo article={article} />
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
