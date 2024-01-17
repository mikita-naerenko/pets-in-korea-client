"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import { Article, News } from "@/lib/type";
import { Dog, MousePointerSquareDashed } from "lucide-react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import SectionTitle from "../ui/Section-title";
import { useState } from "react";
import Fallback from "../../public/fallback.jpg";
import GradientButton from "../ui/gradient-button";

const hoverStyle = {
  filter: "brightness(1)",
};

export default function ImportantArticles({
  items,
  title,
  type,
}: {
  items: Article[] | News[];
  title: string;
  type: string;
}) {
  const offset = 3;
  const [showedItems, setShowedItems] = useState<number>(6);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);

  const handleClickMoreButton = () => {
    showedItems > items.length
      ? setShowedItems(items.length)
      : setShowedItems(showedItems + offset);
  };

  const handleClickSingleItem = (item: Article | News) => {
    if (type === "article") {
      window.location.assign(`/${item.id}`);
    } else {
      window.location.assign(`/news/${item.id}`);
    }
  };

  return (
    <Container disableGutters>
      <SectionTitle title={title} svg={<MousePointerSquareDashed />} />
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <ImageList
          sx={{
            width: "100%",
            mb: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
          cols={0}
        >
          {items.slice(0, showedItems).map((item) => {
            const image =
              item.images?.[0] && item.images?.[0].url
                ? item.images?.[0].url
                : Fallback.src;
            return (
              <ImageListItem
                key={item.id}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                    // "& .MuiImageListItemBar-title": {
                    //   // transition: "1s easy-in-out",
                    //   // whiteSpace: "normal",
                    // },
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
                      "height 0.5s ease-in-out, background 0.5s ease-in-out",
                    "& .MuiImageListItemBar-title": {
                      paddingBottom: "0.7rem",
                      display: "flex",
                      alignItems: "center",
                      whiteSpace: "normal",
                      overflow: "scroll",
                    },
                    "& .MuiImageListItemBar-subtitle": {
                      // overflow: "visible",
                      // whiteSpace: "normal",
                      // transition: "1s easy-in-out",
                      paddingBottom: "0.3rem",
                      display: { xs: "none", md: "block" },
                    },
                    // "& .MuiImageListItemBar-titleWrap": {
                    //   maxHeight: { xs: "5rem", lg: "5rem" },
                    //   transition: "max-height 0.5s ease-in-out",
                    // },
                  }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: `${showedItems >= items.length ? "none" : "flex"}`,
        }}
      >
        <GradientButton
          // sx={{display: `${showedItems >= items.length ? 'none' : null}`}}
          handleClick={handleClickMoreButton}
          disabled={showedItems >= items.length}
          title="Боольше интересных статей"
        />
      </div>
    </Container>
  );
}
