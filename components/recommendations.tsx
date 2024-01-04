"use client";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Article, News } from "@/lib/type";
import { useCurrentProps } from "@/hooks/use-current-props";
import ListItemButton from "@mui/material/ListItemButton";
import { useEffect, useState } from "react";
import getArticles from "@/actions/get-articles";
import getNews from "@/actions/get-news";
import Fallback from "../public/fallback.jpg";

export default function Rocommendations() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const currentProps = useCurrentProps();

  useEffect(() => {
    const fetch = async () => {
      const articles = await getArticles({ random: 3 });
      const news = await getNews({ random: 3 });
      setArticles(articles);
      setNews(news);
    };
    fetch();
  }, []);

  const handleClickArticle = (item: Article) => {
    window.location.assign(`/${item.id}`);
  };
  const handleClickNews = (item: News) => {
    window.location.assign(`/news/${item.id}`);
  };
  if (!articles) {
    return <div>not found</div>;
  }
  return (
    <>
      <List
        subheader={
          <ListSubheader
            component="h2"
            id="nested-list-subheader"
            sx={{ fontSize: "1.5rem" }}
          >
            Читайте также:
          </ListSubheader>
        }
        sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }}
      >
        {articles.map((item, i) => {
          const image =
            item.images?.[0] && item.images?.[0].url
              ? item.images?.[0].url
              : Fallback.src;

          return (
            <ListItemButton
              component="li"
              onClick={() => handleClickArticle(item)}
              alignItems="flex-start"
              key={item.id}
              divider={i !== articles.length - 1}
            >
              <ListItemAvatar>
                <Image
                  src={image}
                  quality={70}
                  width={50}
                  height={40}
                  alt={`${item.title} `}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.description.slice(0, 50)}...
                  </>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
      <List
        subheader={
          <ListSubheader
            component="h2"
            id="nested-list-subheader"
            sx={{ fontSize: "1.5rem" }}
          >
            Что нового:
          </ListSubheader>
        }
        sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }}
      >
        {news.map((item, i) => {
          return (
            <ListItemButton
              component="li"
              onClick={() => handleClickNews(item)}
              alignItems="flex-start"
              key={item.id}
              divider={i !== articles.length - 1}
            >
              <ListItemAvatar>
                <Image
                  src={item?.images?.[0].url || Fallback.src}
                  quality={70}
                  width={50}
                  height={40}
                  alt={`${item.title} `}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.description.slice(0, 50)}...
                  </>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
}
