"use client";
import { useEffect, useState } from "react";

import { Article, News } from "@/lib/type";
import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import ItemsList from "./items-list";

export default function Recommendations() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState<News[]>([]);
  const limit = 3;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles({ random: limit });
        setArticles(articlesData);
        setLoadingArticles(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews({ random: limit });
        setNews(news);
        setLoadingNews(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <ItemsList
        loading={loadingArticles}
        items={articles}
        title="Читайте также:"
        type="article"
        limit={limit}
      />
      <ItemsList
        loading={loadingNews}
        items={news}
        title="Что нового:"
        type="news"
        limit={limit}
      />
    </>
  );
}
