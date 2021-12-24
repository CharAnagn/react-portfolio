import styled, { keyframes } from "styled-components";

const bounce = keyframes`
0%, 20%, 50%, 80%, 100%{
    transform:translateY(0)

}
40%{
    transform:translateY(-30px)
}
60%{
    transform:translateY(-15px)
}
`;

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(350deg)
}
`;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.2) 0%,
      rgba(2, 12, 27, 0.2) 100%
    ),
    url("./images/moonlight.svg") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`;

export const HeroContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;

  div {
    letter-spacing: 0.6rem;
    font-weight: 900;
    font-size: 2.5rem;
    white-space: nowrap;
    margin: auto;
  }

  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    div {
      letter-spacing: 0.2rem;
      font-size: 1.5rem;
      width: 42ch;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite 10s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 50px;
  }
`;
export const SocialIcon = styled.a`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(249, 105, 14, 0.1);
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 20px;

  svg {
    color: rgba(249, 105, 14, 1);
    transition: ${({ theme }) => theme.transition};
  }
  &:hover {
    svg {
      animation: ${rotate} 1.5s linear infinite;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 2.2rem;
    width: 2.2rem;
  }
`;
