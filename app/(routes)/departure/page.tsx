import Departure from "@/components/departure";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как увезти домашнее животное из Южной Кореи",
  description:
    "Как увезти домашнее животное из Южной Кореи, список документов и инструкция",
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
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <Departure />
    </>
  );
}
