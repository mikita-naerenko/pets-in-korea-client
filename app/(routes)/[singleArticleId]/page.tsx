import React, { Suspense } from "react";
import getArticle from "@/actions/get-article";
import SingleArticle from "@/components/single-article/single-article";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { singleArticleId: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const articleId = params.singleArticleId;
  const article = await getArticle({ id: articleId });

  return {
    title: `${article.title} в Корее`,
    description: `${article.description} в Южной Корее`,
    alternates: {
      canonical: `https://pets-in-korea.com/${article.id}`,
    },
    openGraph: {
      title: `${article.title} в Корее`,
      description: `${article.description} в Южной Корее`,
    },
  };
}

export default async function page({
  params,
}: {
  params: { singleArticleId: string };
}) {
  const articleId = params.singleArticleId;
  const article = await getArticle({ id: articleId });
  // const imageURL = article?.images?.[0].url;
  const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${article.title}`,
    description: `${article.description} в Южной Корее`,
    image: `${article.images?.[0].url}`,
    author: {
      "@type": "Person",
      name: `${article.authorName}`,
      url: `${article.authorLink}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Pets in Korea",
      logo: {
        "@type": "ImageObject",
        url: "https://pets-in-korea.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-desktop.6efbd13e.png&w=384&q=75",
      },
    },
    datePublished: "2024-01-14",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <BasicBreadcrumbs currentPage={article.title} />
      <SingleArticle article={article} />
    </>
  );
}
