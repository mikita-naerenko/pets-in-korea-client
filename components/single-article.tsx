"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import he from "he";
import Recommendations from "./recommendations";

import { Article, News, Tag } from "@/lib/type";
import { useEffect, useState } from "react";
import ArticleTitle from "@/components/ui/article-title";
import ArticleDescription from "@/components/ui/article-description";
import { StyledTextContainer } from "./styled-text-container";
import AuthorInfo from "@/components/ui/author-info";
import Fallback from "../public/fallback.jpg";

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
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <ArticleTitle itemProp="headline">{article.title}</ArticleTitle>
          <ArticleDescription>{article.description}</ArticleDescription>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              mr: 2,
              alignSelf: "end",
              marginTop: "auto",
            }}
          >
            <AuthorInfo article={article} />
          </Box>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block", width: "100%" }}
            src={imageURL}
            // placeholder="blur"
            // blurDataURL={blurImage ? blurImage : Fallback.src}
            quality={90}
            width={250}
            height={300}
            alt={`${article.title} `}
          />
        </Box>
      </Box>
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
