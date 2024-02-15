import getTags from "@/actions/get-tags";
import ArticlesSetList from "@/components/articles-set-list";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Подборки статей на важные темы",
  description: "Список статей о жизни с животными в Южной Корее",
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
    canonical: `https://pets-in-korea.com/articles-set`,
  },
};

export default async function Page() {
  const tags = await getTags();
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <HiddenSEOTitle title="Подборки статей для хозяев домашних животных в Корее" />
      <ArticlesSetList tags={tags} />
    </>
  );
}
