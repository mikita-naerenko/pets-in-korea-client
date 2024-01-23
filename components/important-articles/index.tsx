import { Container } from "@mui/material";
import { MousePointerSquareDashed } from "lucide-react";
import SectionTitle from "../ui/Section-title";
import getArticles from "@/actions/get-articles";
import ListItems from "./list-items";
import { Article, News } from "@/lib/type";
import getNews from "@/actions/get-news";

export default async function ImportantArticles({
  title,
  type,
}: {
  title: string;
  type: string;
}) {
  let items: Article[] | News[];
  if (type === "article") {
    items = await getArticles({
      tagLabel: "actual",
    });
  } else if (type === "main-page-news") {
    items = await getNews({ quantity: 6 });
  } else {
    items = await getNews({});
  }

  return (
    <Container disableGutters>
      <SectionTitle title={title} svg={<MousePointerSquareDashed />} />
      <ListItems items={items} type={type} />
    </Container>
  );
}
