import React from "react";
import getArticles from "@/actions/get-articles";
import getTags from "@/actions/get-tags";
import Arrive from "@/components/arrive";

export default async function Page() {
  const tags = await getTags();
  const arriveTag = tags.filter((tag) => tag.label === "arrive")[0];

  const articles = await getArticles({ tagId: arriveTag.id });

  return <Arrive articles={articles} />;
}
