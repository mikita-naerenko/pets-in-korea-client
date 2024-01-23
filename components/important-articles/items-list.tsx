"use client";
import { Article, News } from "@/lib/type";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import Fallback from "../../public/fallback.jpg";
import Image from "next/image";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const hoverStyle = {
  filter: "brightness(1)",
};

export default function ItemsList({
  items,
  type,
  showedItems,
}: {
  items: Article[] | News[];
  type: string;
  showedItems: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);

  const handleClickSingleItem = (item: Article | News) => {
    if (type === "article") {
      window.location.assign(`/${item.id}`);
    } else {
      window.location.assign(`/news/${item.id}`);
    }
  };

  return (
    <>
      {items.slice(0, showedItems).map((item, i) => {
        const image =
          item.images?.[0] && item.images?.[0].url
            ? item.images?.[0].url
            : Fallback.src;
        return (
          <ImageListItem
            key={item.id}
            sx={{
              animationDelay: `${i * 0.5}s`,
              animation: "fadeIn 0.5s ease-in-out",

              "@keyframes fadeIn": {
                from: {
                  opacity: 0,
                },
                to: {
                  opacity: 1,
                },
              },
              cursor: "pointer",
              transition: "transform 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.01)",
                "& .MuiImageListItemBar-root": {
                  height: "8rem",
                  background: "rgba(0, 0, 0, 0.7)",
                },
                "& .MuiImageListItemBar-subtitle": {
                  whiteSpace: "normal",
                },
              },
            }}
            onClick={() => handleClickSingleItem(item)}
          >
            <Image
              src={image}
              width={400}
              height={300}
              quality={80}
              alt={item.title}
              style={{
                filter: "brightness(0.8)",
                objectFit: "cover",
                width: "100%",
                height: "auto",
                display: "block",
                flexGrow: 1,
                transition: "filter 0.2s ease-in-out",
                ...(isHovered && hoveredItem === item.id && hoverStyle),
              }}
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredItem(item.id);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              sx={{
                height: { xs: "6rem" },
                transition:
                  "height 0.3s ease-in-out, background 0.5s ease-in-out",
                "& .MuiImageListItemBar-title": {
                  paddingBottom: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "normal",
                  // overflow: "scroll",
                },
                "& .MuiImageListItemBar-subtitle": {
                  paddingBottom: "0.3rem",
                  display: { xs: "none", md: "block" },
                },
              }}
            />
          </ImageListItem>
        );
      })}
    </>
  );
}
