"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArriveMain from "@/public/arrive-main.png";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import InnerStaticContent from "./innerStaticContent";
import {
  JSON_LD_ARTICLE,
  JSON_LD_HOWTO,
  JSON_LD_LIST,
  TITLE,
  DESCRIPTION,
} from "./constants";
import ArticlePreview from "@/components/article-preview";

export default function Departure() {
  return (
    <Container disableGutters>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ARTICLE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOWTO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_LIST) }}
      />
      <ArticlePreview
        img={ArriveMain.src}
        currentArticle={{
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "60%" } }}>
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
