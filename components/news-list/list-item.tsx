import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { News } from "@/lib/type";
import Fallback from "@/public/fallback.jpg";
import {
  styleListItemAvatarMD,
  styleListItemAvatarSX,
  styleListItemText,
} from "./style";

export default function ListItem({ showedNews }: { showedNews: News[] }) {
  const router = useRouter();
  const handleClick = (item: News) => {
    router.prefetch(item.id);
    router.push(`news/${item.id}`);
  };
  return (
    <>
      {showedNews.map((item, i) => {
        const image =
          item.images?.[0] && item.images?.[0].url
            ? item.images?.[0].url
            : Fallback.src;
        return (
          <ListItemButton
            component="li"
            onClick={() => handleClick(item)}
            alignItems="flex-start"
            key={item.id}
            divider
          >
            <ListItemAvatar sx={styleListItemAvatarMD}>
              <Image
                src={image}
                quality={70}
                width={70}
                height={60}
                alt={`${item.title} `}
              />
            </ListItemAvatar>
            <ListItemAvatar sx={styleListItemAvatarSX}>
              <Image
                src={image}
                quality={70}
                width={40}
                height={30}
                alt={`${item.title} `}
              />
            </ListItemAvatar>
            <ListItemText
              sx={styleListItemText}
              primary={item.title}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline", color: "text.primary" }}
                    component="span"
                    variant="body2"
                  ></Typography>
                  {item.description.slice(0, 150)}...
                </>
              }
            />
            <ListItemText
              sx={{ alignSelf: "center", textAlign: "right" }}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline", color: "text.secondary" }}
                    component="span"
                    variant="caption"
                  >
                    {new Date(item.createdAt).toLocaleString("ru-RU", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </Typography>
                </>
              }
            />
          </ListItemButton>
        );
      })}
    </>
  );
}
