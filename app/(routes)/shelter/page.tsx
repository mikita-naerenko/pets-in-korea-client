import React from "react";
import getArticles from "@/actions/get-articles";
import getTags from "@/actions/get-tags";
import Arrive from "@/components/arrive";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";
import { Metadata } from "next";
import ShelterTable from "@/components/shelter-table";
import SectionTitle from "@/components/ui/Section-title";
import Shelter from "@/components/shelter";
import Recommendations from "@/components/recommendations";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Приюты для животных в Южной Корее",
  description: "Приюты для животных в Южной Корее, адреса и номера телефонов",
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
  const arriveTag = tags.filter((tag) => tag.label === "arrive")[0];

  const articles = await getArticles({ tagId: arriveTag.id });

  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <Shelter />
      <SectionTitle title="Список приютов для животных в Южной Корее" />
      <ShelterTable />
      <Container sx={{ mt: 1, display: { md: "none" } }}>
        <Recommendations />
      </Container>
    </>
  );
}
