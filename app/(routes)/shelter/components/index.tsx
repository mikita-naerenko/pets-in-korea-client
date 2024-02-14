"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import shelter from "@/public/shelter.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import { JSON_LD_HOWTO, JSON_LD_LIST, TITLE, DESCRIPTION } from "./constants";
import ArticlePreview from "@/components/article-preview";

export default function Shelter() {
  return (
    <Container disableGutters itemScope itemType="https://schema.org/Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_HOWTO) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_LIST) }}
      />
      <ArticlePreview
        img={shelter.src}
        currentArticle={{
          title: TITLE,
          description: DESCRIPTION,
        }}
      />
      <Box sx={{ display: { md: "flex" }, mt: { md: 3 } }}>
        <Box sx={{ width: { md: "60%" } }} itemProp="articleBody">
          <StyledTextContainer>
            <InnerStaticContent />
          </StyledTextContainer>
        </Box>
        <Box
          sx={{ width: { md: "40%" }, display: { xs: "none", md: "block" } }}
        >
          <Recommendations />
        </Box>
      </Box>
    </Container>
  );
}
