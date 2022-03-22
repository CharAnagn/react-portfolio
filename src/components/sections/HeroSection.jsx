import { CTAButton } from "../styles/common/CTAbutton.style";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import TypeWriter from "typewriter-effect";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <TypeWriter
          onInit={(typewriter) =>
            typewriter
              .typeString("Charalampos")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Babis Anagnostou")
              .start()
          }
        />

        <h3>{"{Front-End Web Developer}"}</h3>
        <p>HTML . CSS . JavaScript . React . Typescript</p>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          href="https://www.linkedin.com/in/charalampos-anagnostou"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </SocialIcon>
        <SocialIcon href="https://github.com/CharAnagn" target="_blank">
          <FaGithub></FaGithub>
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
