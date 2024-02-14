"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import he from "he";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import OtherArticles from "./other-articles";
import { useCurrentProps } from "@/hooks/use-current-props";

import { Article, Tag } from "@/lib/type";
import getArticles from "@/actions/get-articles";

import { StyledTextContainer } from "@/components/styled-text-container";
import AuthorInfo from "@/components/ui/author-info";
import { ArticlePageSkeleton } from "@/components/ui/skeletons";
import ArticlePreview from "@/components/article-preview";

import Fallback from "@/public/fallback.jpg";
import {
  styleBoxContentWrapper,
  styleBoxTextWrapper,
  styleOtherArticlesWrapper,
} from "./style";

export default function ArticleSet({ tags }: { tags: Tag[] }) {
  const currentProps = useCurrentProps();
  const [articles, setArticles] = useState<Article[]>([]);
  const [otherArticles, setOtherArticles] = useState<Article[]>([]);
  const [decodedHTML, setDecodedHTML] = useState("");
  const [articleLoading, setArticleLoading] = useState(true);
  const pathname = usePathname();
  const currentTag = pathname.split("/").pop();

  const [tagId] = tags.filter((tag) => tag.label === currentTag);
  const current = currentProps.currentArticle
    ? currentProps.currentArticle
    : null;

  const imageURL = current?.images?.[0]
    ? current?.images?.[0].url
    : Fallback.src;

  useEffect(() => {
    const get = async () => {
      const fetchedArticles = await getArticles({ tagId: tagId.id });
      fetchedArticles ? setArticleLoading(!articleLoading) : null;
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
    return <ArticlePageSkeleton />;
  }

  return (
    <>
      {articleLoading ? (
        <ArticlePageSkeleton />
      ) : (
        <Container disableGutters>
          <ArticlePreview currentArticle={current} img={imageURL} />

          <Box sx={styleBoxContentWrapper}>
            <Box sx={styleBoxTextWrapper}>
              <StyledTextContainer
                dangerouslySetInnerHTML={{ __html: decodedHTML }}
              />
              <AuthorInfo article={current} />
            </Box>
            <Box sx={styleOtherArticlesWrapper}>
              <OtherArticles articles={otherArticles} />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
