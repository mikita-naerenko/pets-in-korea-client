import getArticles from "@/actions/get-articles";
import React, { Suspense } from "react";
import ImportantArticles from "@/components/important-articles";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { Metadata } from "next/types";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";
import { ImportantArticlesSkeleton } from "@/components/important-articles/skeleton";

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
  alternates: {
    canonical: `https://pets-in-korea.com/life`,
  },
};

export default async function Page() {
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <HiddenSEOTitle title="Как пользоваться транспортом, выгуливать собаку и мноое другое в Южной Корее." />
      <Suspense
        fallback={
          <ImportantArticlesSkeleton
            title={"Правила и лайфхаки для комфортной жизни в Южной Корее"}
          />
        }
      >
        <ImportantArticles
          title={"Правила и лайфхаки для комфортной жизни в Южной Корее"}
          type="lifestyle"
        />
      </Suspense>
    </>
  );
}
