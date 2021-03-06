import { FaEnvelope } from "react-icons/fa";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/sections/ConstactSection.styled";
import { SectionHeading } from "../styles/sections/SectionHeading.styled";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I would love if you reached out to me. Drop me a line and I will
              get back to you ASAP!
            </p>

            <div>
              <a href="mailto:babisanagnostou94@gmail.com">
                <FaEnvelope /> <span>babisanagnostou94@gmail.com</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/email.svg" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
