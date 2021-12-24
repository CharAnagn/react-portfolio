import {
  AboutContent,
  ImageContainer,
  StyledAboutSection,
  StyledEmogi,
  StyledHeading,
  StyledImage,
} from "../styles/sections/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/char.jpg" alt="Babis Anagnostou" />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmogi>👋</StyledEmogi>
          </StyledHeading>
          <p>
            I am Babis, a web developer based in the Netherlands. I mostly love
            working on the front-end using CSS and React. I develop web
            applications using the MERN Stack.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
