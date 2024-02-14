import React from "react";
import Image from "next/image";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import { Article, News } from "@/lib/type";
import Fallback from "@/public/fallback.jpg";
import { styleListItemButton, styleListItemTextTypography } from "./style";

export default function ListItem({
  items,
  type,
}: {
  items: Article[] | News[];
  type: "article" | "news";
}) {
  const handleClickArticle = (item: Article | News) => {
    type === "article"
      ? window.location.assign(`/${item.id}`)
      : window.location.assign(`/news/${item.id}`);
  };
  return (
    <>
      {items.map((item, i) => {
        const image =
          item.images?.[0] && item.images?.[0].url
            ? item.images?.[0].url
            : Fallback.src;

        return (
          <ListItemButton
            component="li"
            onClick={() => handleClickArticle(item)}
            sx={styleListItemButton}
            key={item.id}
            divider={i !== items.length - 1}
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
                    sx={styleListItemTextTypography}
                    component="span"
                    variant="body2"
                  ></Typography>
                  {item.description.slice(0, 50)}...
                </>
              }
            />
          </ListItemButton>
        );
      })}
    </>
  );
}
