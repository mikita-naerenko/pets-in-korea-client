"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import departure from "@/public/departure.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import {
  JSON_LD_ARTICLE,
  JSON_LD_HOW_TO,
  JSON_LD_FAQ,
  TITLE,
  DESCRIPTION,
} from "./consts";
import ArticlePreview from "@/components/article-preview";

export default function Arrive() {
  return (
    <Container disableGutters itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ARTICLE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOW_TO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_FAQ) }}
      />
      <ArticlePreview
        img={departure.src}
        currentArticle={{
          title: TITLE,
          description: DESCRIPTION,
        }}
      />

      <Box
        sx={{
          display: { md: "flex", justifyContent: "space-between" },
          mt: { md: 3 },
        }}
      >
        <Box sx={{ width: { md: "69%" } }}>
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box sx={{ width: { md: "30%" } }}>
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
