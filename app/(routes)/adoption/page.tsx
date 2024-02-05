import Adoption from "./components";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как завести кошку или собаку в Корее",
  description:
    "Разбираемся как завести кошку или собаку в Корее, взять животное из приюта или купить",
  keywords: ["приют", "купить собаку", "купить кошку", "взять из приюта"],
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
      <Adoption />
    </>
  );
}
