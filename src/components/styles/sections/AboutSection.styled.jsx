import styled, { keyframes } from "styled-components";

const wave = keyframes`
0%{
    transform: rotate(0deg)
}
10%{
    transform: rotate(14deg)
}
20%{
    transform: rotate(-8deg)
}
30%{
    transform: rotate(14deg)
}
40%{
    transform: rotate(-4deg)
}
50%{
    transform: rotate(10deg)
}
60%{
    transform: rotate(0deg)
}
100%{
    transform: rotate(0deg)
}

`;

export const StyledAboutSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  }
`;

export const StyledImage = styled.img`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;

export const AboutContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const StyledEmogi = styled.span`
  display: inline-block;
  animation: ${wave} 3s infinite;
  transform-origin: 70% 70%;
`;
