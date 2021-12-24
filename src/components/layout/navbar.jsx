import { useState } from "react";
import { NavItems } from "../../data/Navitems";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAbutton.style";
import useScrollDirection from "../../hooks/useScrollDirection";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png" />
          </a>
        </div>

        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://www.linkedin.com/in/charalampos-anagnostou-236a061a3"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink
                      href="https://github.com/CharAnagn"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
