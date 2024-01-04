"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import he from "he";
import OtherArticles from "./other-articles";
import { useCurrentProps } from "@/hooks/use-current-props";

import Test from "../../../../public/no-image-news.png";
import { usePathname } from "next/navigation";
import { Article, Tag } from "@/lib/type";
import { useEffect, useState } from "react";
import getArticles from "@/actions/get-articles";
import ArticleTitle from "../ui/article-title";
import ArticleDescription from "../ui/article-description";
import { StyledTextContainer } from "../styled-text-container";
import AuthorInfo from "../ui/author-info";

export default function ArticelSet({ tags }: { tags: Tag[] }) {
  const currentProps = useCurrentProps();
  const [articles, setArticles] = useState<Article[]>([]);
  const [otherArticles, setOtherArticles] = useState<Article[]>([]);
  const [decodedHTML, setDecodedHTML] = useState("");
  const pathname = usePathname();
  const currentTag = pathname.split("/").pop();
  console.log(currentTag);
  const [tagId] = tags.filter((tag) => tag.label === currentTag);
  const current = currentProps.currentArticle
    ? currentProps.currentArticle
    : null;

  useEffect(() => {
    const get = async () => {
      const fetchedArticles = await getArticles({ tagId: tagId.id });
      setArticles(fetchedArticles);
    };

    if (articles.length === 0) {
      get();
    }
  }, []);

  useEffect(() => {
    if (articles.length !== 0) {
      currentProps.setCurrentArticle(articles[0]);
    }
  }, [articles]);

  useEffect(() => {
    const decodeHTML = (input: string) => {
      return he.decode(input);
    };
    if (current) {
      setDecodedHTML(decodeHTML(current.content));
    }
    setOtherArticles(
      articles.filter(
        (article) => article.id !== currentProps?.currentArticle?.id
      )
    );
  }, [currentProps.currentArticle]);

  if (!current) {
    return <div>Articles not found</div>;
  }

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
          <ArticleTitle>{current.title}</ArticleTitle>
          <ArticleDescription>{current.description}</ArticleDescription>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              mr: 2,
              alignSelf: "end",
              marginTop: "auto",
            }}
          >
            <AuthorInfo article={current} />
          </Box>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{ display: "block" }}
            src={current?.images?.[0].url || Test.src}
            layout="responsive"
            quality={90}
            width={250}
            height={300}
            alt={`${current.title} `}
          />
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "70%" } }}>
          <StyledTextContainer
            dangerouslySetInnerHTML={{ __html: decodedHTML }}
          />
          <AuthorInfo article={current} />
        </Box>
        <Box sx={{ width: { md: "30%" } }}>
          <OtherArticles articles={otherArticles} />
        </Box>
      </Box>
    </Container>
  );
}
