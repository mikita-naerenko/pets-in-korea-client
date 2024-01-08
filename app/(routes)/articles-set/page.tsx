import getTags from "@/actions/get-tags";
import ArticlesSetList from "@/components/articles-set-list";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
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
};

export default async function Page() {
  const tags = await getTags();
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <ArticlesSetList tags={tags} />
    </>
  );
}
