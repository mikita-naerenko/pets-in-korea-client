import React from "react";

import Image from "next/image";
import Box from "@mui/material/Box";

import ArticleDescription from "@/components/ui/article-description";
import ArticleTitle from "@/components/ui/article-title";
import AuthorInfo from "@/components/ui/author-info";

import { Article, News, titlePreview } from "@/lib/type";

import {
  authorInfoWrapper,
  titleWrapper,
  imageWrapper,
  image,
  wrapper,
} from "./styles";

export default function ArticlePreview({
  currentArticle,
  img,
}: {
  currentArticle: Article | News | titlePreview;
  img: string;
}) {
  return (
    <Box sx={wrapper}>
      <Box sx={titleWrapper}>
        <ArticleTitle>{currentArticle.title}</ArticleTitle>
        <ArticleDescription>{currentArticle.description}</ArticleDescription>
        <Box sx={authorInfoWrapper}>
          <AuthorInfo article={currentArticle} />
        </Box>
      </Box>
      <Box sx={imageWrapper}>
        <Image
          style={image}
          src={img}
          layout="responsive"
          quality={90}
          width={250}
          height={300}
          alt={`${currentArticle.title} `}
        />
      </Box>
    </Box>
  );
}
