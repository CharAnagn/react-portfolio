import {
  CodedWith,
  FooterNav,
  StyledFooter,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#Contact">Contact</a>
        </FooterNav>
        <CodedWith>Coded with React and Styled Components 💻</CodedWith>
        <div>
          &copy; December 2021 -{months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </StyledFooter>
    </>
  );
};
