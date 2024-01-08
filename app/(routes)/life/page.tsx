import getArticles from "@/actions/get-articles";
import React from "react";
import ImportantArticles from "@/components/important-articles/important-articles";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Жизнь с домашним животным в Южной Корее",
  description: "Правила и лайфхаки для комфортной жизни в Южной Корее",
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
  const lifestyleArticles = await getArticles({
    tagLabel: "lifestyle",
  });
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <ImportantArticles
        items={lifestyleArticles}
        title={"Правила и лайфхаки для комфортной жизни в Южной Корее"}
      />
    </>
  );
}
