import getThemes from "@/actions/get-themes";
// import DictionaryList from "@/components/dictionarys-list/dictionary-list";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Русско-корейский разговорник",
  description:
    "Распространенные фразы и выражения на корейском для самых разных ситуаций",
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
  const themes = await getThemes();
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      {/* <DictionaryList themes={themes} /> */}
    </>
  );
}
