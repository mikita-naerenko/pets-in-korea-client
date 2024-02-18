"use client";
import * as React from "react";

import { BookType } from "lucide-react";

import SectionTitle from "@/components/ui/Section-title";
import { Theme } from "@/lib/type";
import ListItems from "./list-items";
import Container from "@mui/material/Container";

export default function SingleTheme({ theme }: { theme: Theme }) {
  return (
    <Container disableGutters component={"section"}>
      <SectionTitle title={theme.rusLabel} svg={<BookType />} />
      <ListItems theme={theme} />
    </Container>
  );
}
