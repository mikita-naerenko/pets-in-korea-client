"use client";
import React, { Dispatch, SetStateAction } from "react";
import { SearchResponse } from "@/lib/type";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ListStyles } from "./styles";
import CircularProgress from "@mui/material/CircularProgress";

export default function SearchResults({
  found,
  loading,
  handleClose,
}: {
  loading: boolean;
  found: SearchResponse | "";
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = (type: string, id: string) => {
    handleClose(false);
    const newPath = type !== "article" ? `/${type}/${id}` : `/${id}`;
    router.push(newPath);
  };
  console.log(loading);
  const router = useRouter();
  if (!found) {
    return null;
  }
  return (
    <>
      <List sx={ListStyles}>
        {found.articles?.length > 0 ? (
          <Typography key={"Статьи"} variant="subtitle2" textAlign={"center"}>
            Статьи
          </Typography>
        ) : null}
        {found.articles
          ? found.articles.map((item, index) => {
              return (
                <ListItemButton
                  key={item.id}
                  divider={index !== found.articles.length - 1}
                  component={"li"}
                  onClick={() => handleClick("article", item.id)}
                >
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItemButton>
              );
            })
          : null}
        {found.news?.length > 0 ? (
          <Typography key={"Новости"} variant="subtitle2" textAlign={"center"}>
            Новости
          </Typography>
        ) : null}
        {found.news
          ? found.news.map((item, index) => {
              return (
                <ListItemButton
                  key={item.id}
                  divider={index !== found.news.length - 1}
                  component={"li"}
                  onClick={() => handleClick("news", item.id)}
                >
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItemButton>
              );
            })
          : null}
        {found.themes?.length > 0 ? (
          <Typography key={"Словарь"} variant="subtitle2" textAlign={"center"}>
            Словарь
          </Typography>
        ) : null}
        {found.themes
          ? found.themes.map((item, index) => {
              return (
                <ListItemButton
                  key={item.id}
                  divider={index !== found.themes.length - 1}
                  component={"li"}
                  onClick={() => handleClick("dictionary", item.id)}
                >
                  <ListItemText
                    primary={item.rusLabel}
                    secondary={item.description}
                  />
                </ListItemButton>
              );
            })
          : null}
        {found.articles?.length === 0 &&
          !loading &&
          found.news?.length === 0 &&
          found.themes?.length === 0 && (
            <Typography key={"Ничего"} variant="subtitle2" textAlign={"center"}>
              Ничего не найдено
            </Typography>
          )}
        {loading ? (
          <Typography key={"Ничего"} variant="subtitle2" textAlign={"center"}>
            П<CircularProgress size="0.8rem" />
            ИСК
          </Typography>
        ) : null}
      </List>
    </>
  );
}
