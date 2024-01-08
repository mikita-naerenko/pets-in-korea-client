import getArticles from "@/actions/get-articles";
import React from "react";
import ImportantArticles from "@/components/important-articles/important-articles";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

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
