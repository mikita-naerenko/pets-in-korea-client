"use client";
import Image from "next/image";
import { useState } from "react";

import ImageListItem from "@mui/material/ImageListItem";

import { Article, News } from "@/lib/type";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Fallback from "../../public/fallback.jpg";

import {
  styeImage,
  styleImageListItem,
  styleItemBar,
  hoverStyle,
  styleImageLoaded,
} from "./style";
import { IMAGE_QUALITY } from "@/lib/image-quality";

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
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log("loaded");
    setLoaded(true);
  };

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
            sx={styleImageListItem}
            onClick={() => handleClickSingleItem(item)}
          >
            <Image
              src={image}
              width={400}
              height={300}
              quality={IMAGE_QUALITY.importantArticles}
              alt={item.title}
              style={{
                ...styeImage,
                ...(isHovered && hoveredItem === item.id && hoverStyle),
                ...(loaded && styleImageLoaded),
              }}
              onMouseEnter={() => {
                setIsHovered(true);
                setHoveredItem(item.id);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              onLoad={handleImageLoad}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              sx={styleItemBar}
            />
          </ImageListItem>
        );
      })}
    </>
  );
}
