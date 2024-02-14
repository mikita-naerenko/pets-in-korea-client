"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import GradientButton from "@/components/ui/gradient-button";

import { Article, News } from "@/lib/type";
import ItemsList from "./items-list";

import { styleImageList, styleWrapperButton } from "./style";

export default function ListItems({
  items,
  type,
}: {
  items: Article[] | News[];
  type: string;
}) {
  const offset = 3;
  const [showedItems, setShowedItems] = useState<number>(6);
  const router = useRouter();

  const handleClickMoreButton = () => {
    if (type === "main-page-news") {
      router.push("/news");
    } else {
      showedItems > items.length
        ? setShowedItems(items.length)
        : setShowedItems(showedItems + offset);
    }
  };

  return (
    <>
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <ImageList sx={styleImageList} cols={0} gap={10}>
          {items && (
            <ItemsList type={type} items={items} showedItems={showedItems} />
          )}
        </ImageList>
      </Box>
      <div style={styleWrapperButton}>
        <GradientButton
          handleClick={handleClickMoreButton}
          disabled={showedItems >= items.length}
          title="Боольше интересных статей"
        />
      </div>
    </>
  );
}
