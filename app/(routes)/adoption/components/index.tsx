import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

import Adopt from "../../../../public/adopt-main.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import { JSON_LD_ARTICLE, JSON_LD_HOW_TO, TITLE, DESCRIPTION } from "./consts";
import ArticlePreview from "@/components/article-preview";

export default function Adoption() {
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
      <ArticlePreview
        img={Adopt.src}
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
