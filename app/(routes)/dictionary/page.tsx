import getThemes from "@/actions/get-themes";
import DictionaryList from "@/components/dictionary-list/index";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { DictionarySkeleton } from "@/components/ui/skeletons";
import HiddenSEOTitle from "@/components/ui/hidden-SEO-title";
import { Metadata } from "next/types";
import { Suspense } from "react";

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
  alternates: {
    canonical: `https://pets-in-korea.com/dictionary`,
  },
};

export default async function Page() {
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <HiddenSEOTitle title="Корейский разговорник для жизни в Корее" />
      <Suspense fallback={<DictionarySkeleton />}>
        <DictionaryList />
      </Suspense>
    </>
  );
}
