import React from "react";
import getArticles from "@/actions/get-articles";
import getTags from "@/actions/get-tags";
import Arrive from "@/components/arrive";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ввоз животных в Южную Корею: документы и требования",
  description:
    "Ввоз животных в Южную Корею: документы и требования, подробная инструкция",
  keywords: [],
  creator: "Mikita Naerenko",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Page() {
  const tags = await getTags();
  const arriveTag = tags.filter((tag) => tag.label === "arrive")[0];

  const articles = await getArticles({ tagId: arriveTag.id });

  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <Arrive articles={articles} />;
    </>
  );
}
