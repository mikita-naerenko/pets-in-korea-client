import React, { Suspense } from "react";
import getArticle from "@/actions/get-article";
import SingleArticle from "@/components/single-article";
import { getBlurData } from "@/lib/getBlurData";

export default async function page({
  params,
}: {
  params: { singleArticleId: string };
}) {
  const articleId = params.singleArticleId;
  const article = await getArticle({ id: articleId });
  const imageURL = article?.images?.[0].url;
  console.log(article);

  const blurData = imageURL && (await getBlurData(imageURL));

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <SingleArticle
          article={article}
          blurImage={blurData ? blurData : null}
        />
      </Suspense>
    </>
  );
}
