import styled from "@emotion/styled";
import { keyframes } from "@mui/material";
import Container from "@mui/material/Container";

const animateGradient = keyframes`
0%{background-position:0% 84%}
    50%{background-position:100% 17%}
    100%{background-position:0% 84%}
`;

export const GradientContainer = styled(Container)`
  background: linear-gradient(90deg, #2b1654, #554476);
  background-size: 400% 400%;

  animation: ${animateGradient} 13s ease infinite;
`;
