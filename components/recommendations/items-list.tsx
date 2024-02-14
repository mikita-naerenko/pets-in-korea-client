import React from "react";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

import { Article, News } from "@/lib/type";
import { RecommendationsSkeleton } from "@/components/ui/skeletons";
import ListItem from "./list-item";
import { styleList, styleListSubheader } from "./style";

export default function ItemsList({
  loading,
  items,
  title,
  type,
  limit,
}: {
  loading: boolean;
  items: Article[] | News[];
  title: string;
  type: "article" | "news";
  limit: number;
}) {
  const skeletonArray = Array.from({ length: limit }, (_, index) => (
    <RecommendationsSkeleton key={index} />
  ));
  return (
    <List
      subheader={<ListSubheader sx={styleListSubheader}>{title}</ListSubheader>}
      sx={styleList}
    >
      {loading ? (
        skeletonArray.map((item) => item)
      ) : (
        <ListItem items={items} type={type} />
      )}
    </List>
  );
}
