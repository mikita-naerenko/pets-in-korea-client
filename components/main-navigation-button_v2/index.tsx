"use client";
import { useRouter } from "next/navigation";

import Container from "@mui/material/Container";

import {
  BoxWrapper,
  StraightContainer,
  StyledImage,
  TextContent,
  Trapezoid,
} from "./styled-components";

import { THEMATIC_ARTICLES_V2 } from "@/lib/constants";
import { ImageButton } from "@/lib/type";
import { IMAGE_QUALITY } from "@/lib/image-quality";

export default function MainNavigationButtonV2() {
  const router = useRouter();

  const handleClick = (image: ImageButton) => {
    router.push(`${image.href}` + `${image.tagId ? `/${image.tagId}` : ""}`);
  };

  return (
    <Container disableGutters component={"section"}>
      <BoxWrapper>
        {THEMATIC_ARTICLES_V2.map((item) => {
          return (
            <Trapezoid
              onClick={() => handleClick(item)}
              tabIndex={0}
              key={item.title}
            >
              <StraightContainer>
                <StyledImage
                  src={item.img}
                  width={300}
                  height={180}
                  alt={`Кнопка откроет страницу ${item.title}`}
                  quality={IMAGE_QUALITY.mainNavigationButtons}
                />
                <TextContent>{item.title}</TextContent>
              </StraightContainer>
            </Trapezoid>
          );
        })}
      </BoxWrapper>
    </Container>
  );
}
