import React from "react";
import Departure from "@/components/arrive";
import getArticles from "@/actions/get-articles";
import getTags from "@/actions/get-tags";

export default async function Page() {
  const tags = await getTags();
  const arriveTag = tags.filter((tag) => tag.label === "departure")[0];

  const articles = await getArticles({ tagId: arriveTag.id });

  return <Departure articles={articles} />;
}
