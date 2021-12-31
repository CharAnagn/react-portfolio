import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";
import { SectionHeading } from "../styles/sections/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/SevicesSection.styled";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Services</h1>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Development</h1>
            <p>Develop web apps using HTML , CSS and JavaScript</p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <h1>Design to HTML</h1>
            <p>Create Web sites using UI/UX best practises.</p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaBrain />
            </IconWrapper>
            <h1>Analytical Mindset</h1>
            <p>Find effiecent solutions and improve the existing ones.</p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
