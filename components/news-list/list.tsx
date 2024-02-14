import React from "react";

import List from "@mui/material/List";

import { News } from "@/lib/type";
import { NewsItemSkeleton } from "@/components/ui/skeletons";
import ListItem from "./list-item";

import { styleList } from "./style";

export default function ItemList({
  showedNews,
  loading,
  limit,
}: {
  showedNews: News[];
  loading: boolean;
  limit: number;
}) {
  const skeletonArray = Array.from({ length: limit }, (_, index) => (
    <NewsItemSkeleton key={index} />
  ));
  return (
    <List sx={styleList}>
      {loading ? (
        skeletonArray.map((item) => item)
      ) : (
        <ListItem showedNews={showedNews} />
      )}
    </List>
  );
}
