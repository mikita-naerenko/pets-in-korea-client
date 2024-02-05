import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import ArticleDescription from "@/components/ui/article-description";
import ArticleTitle from "@/components/ui/article-title";
import Image from "next/image";
import Adopt from "../../../../public/adopt-main.jpg";
import InnerStaticContent from "./innerStaticContent";
import Recommendations from "@/components/recommendations";
import { StyledTextContainer } from "@/components/styled-text-container";
import { JSON_LD_ARTICLE, JSON_LD_HOW_TO } from "./consts";

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
      <Box sx={{ display: { md: "flex" } }}>
        <Box
          sx={{
            width: { md: "60%" },
            display: { md: "flex" },
            flexDirection: "column",
          }}
        >
          <ArticleTitle>{"Как завести животное в Корее"}</ArticleTitle>
          <ArticleDescription>
            {
              "В этой подборке статей мы рассмотрим все нюансы и подводные камни усыновления (да, именно усыновления!) домашнего животного, разберемся, как это сделать правильно, и как избежать необдуманных решений."
            }
          </ArticleDescription>
        </Box>
        <Box sx={{ width: { md: "40%" } }}>
          <Image
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              maxHeight: "450px",
            }}
            src={Adopt.src}
            quality={90}
            width={250}
            height={300}
            alt={`dd `}
            itemScope
            itemProp="image"
          />
        </Box>
      </Box>
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
