"use client";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import { useState } from "react";
import { Article, News } from "@/lib/type";
import ItemsList from "./items-list";
import GradientButton from "../ui/gradient-button";

export default function ListItems({
  items,
  type,
}: {
  items: Article[] | News[];
  type: string;
}) {
  const offset = 3;
  const [showedItems, setShowedItems] = useState<number>(6);

  const handleClickMoreButton = () => {
    showedItems > items.length
      ? setShowedItems(items.length)
      : setShowedItems(showedItems + offset);
  };

  return (
    <>
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <ImageList
          sx={{
            overflow: "hidden",
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
          {items && (
            <ItemsList type={type} items={items} showedItems={showedItems} />
          )}
        </ImageList>
      </Box>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <GradientButton
          // sx={{display: `${showedItems >= items.length ? 'none' : null}`}}
          handleClick={handleClickMoreButton}
          disabled={showedItems >= items.length}
          title="Боольше интересных статей"
        />
      </div>
    </>
  );
}
