"use client";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Article } from "../lib/type";
import { useCurrentProps } from "../hooks/use-current-props";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import Fallback from "../public/fallback.jpg";

export default function OtherArticles({ articles }: { articles: Article[] }) {
  const currentProps = useCurrentProps();
  const handleClick = (article: Article) => {
    currentProps.setCurrentArticle(article);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for an instant scroll
    });
  };
  return (
    <List
      subheader={
        <ListSubheader
          component="h2"
          id="nested-list-subheader"
          sx={{ fontSize: "1.5rem" }}
        >
          Ещё статьи по теме:
        </ListSubheader>
      }
      sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }}
    >
      {articles.map((article, i) => {
        return (
          <ListItemButton
            component="li"
            onClick={() => handleClick(article)}
            alignItems="flex-start"
            key={article.id}
            divider={i !== articles.length - 1}
          >
            <ListItemAvatar>
              <Image
                src={article?.images?.[0].url || Fallback.src}
                quality={70}
                width={50}
                height={40}
                alt={`${article.title} `}
              />
            </ListItemAvatar>
            <ListItemText
              primary={article.title}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {article.description.slice(0, 50)}...
                </>
              }
            />
          </ListItemButton>
        );
      })}
    </List>
  );
}
