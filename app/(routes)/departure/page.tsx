import React from "react";
import Departure from "@/components/departure";
import getArticles from "@/actions/get-articles";
import getTags from "@/actions/get-tags";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page() {
  const tags = await getTags();
  const arriveTag = tags.filter((tag) => tag.label === "departure")[0];

  const articles = await getArticles({ tagId: arriveTag.id });

  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <Departure articles={articles} />
    </>
  );
}
