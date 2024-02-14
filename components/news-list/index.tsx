"use client";
import * as React from "react";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { BookType } from "lucide-react";

import { News } from "@/lib/type";

import SectionTitle from "@/components/ui/Section-title";
import MainPagination from "@/components/ui/main-pagination";
import getNews from "@/actions/get-news";
import ItemList from "./list";

import { stylePaginationWrapper } from "./style";

export default function NewsList({
  countOfNews,
  news,
}: {
  news: News[];
  countOfNews: number;
}) {
  const [showedNews, setShowedNews] = useState<News[] | []>(news);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const fetchNews = async () => {
    try {
      setLoading(true);
      const result = await getNews({ offset: offset, limit: limit });
      setShowedNews(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (Number(value) - 1) * limit;
    setOffset(newOffset);
  };

  useEffect(() => {
    fetchNews();
  }, [offset]);

  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title="Все новости" svg={<BookType />} />
      <ItemList showedNews={showedNews} loading={loading} limit={limit} />

      <div style={stylePaginationWrapper}>
        <MainPagination
          countOfNews={countOfNews}
          handleChange={handleChange}
          limit={limit}
        />
      </div>
    </Container>
  );
}
