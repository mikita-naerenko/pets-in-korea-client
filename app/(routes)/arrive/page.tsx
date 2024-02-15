import Arrive from "./components";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ввоз животных в Корею: документы, требования, инструкция",
  description: "Как привезти кошку или собаку в Корею",
  keywords: ["Корея", "Южная Корея", "кошка", "собака", "кролик", "инструкция"],
  creator: "",
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
    canonical: `https://pets-in-korea.com/arrive`,
  },
};

export default async function Page() {
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <Arrive />
    </>
  );
}
