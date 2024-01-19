import React, {useState} from 'react';
import styled, {css, keyframes} from "styled-components";

export const Navigation = () => {
    const [activeNavItem, setActiveNavItem] = useState("About Me")
    const handleNavItemClick = (activeItem: string) => () => {
        setActiveNavItem(activeItem)
    }

    return (
        <NavWrapper>
            <ul>
                <NavItem onClick={handleNavItemClick("About Me")} isActive={activeNavItem === "About Me"}>
                    <a href="#"> About Me</a>
                </NavItem>
                <NavItem onClick={handleNavItemClick("Works")} isActive={activeNavItem === "Works"}>
                    <a href="#">Works</a>
                </NavItem>
                <NavItem onClick={handleNavItemClick("Education")} isActive={activeNavItem === "Education"}>
                    <a href="#">Education</a>
                </NavItem>
            </ul>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
  ul {
    display: flex;
    align-items: start;
    gap: 50px;
  }
`;

interface INavItem {
    isActive: boolean
}

const itemAnimation = keyframes`
  0% {
    width: 4px;
    opacity: 0;
    background-color: #B6E3FF;
  }
  75% {
    width: 120%;
    opacity: 1;
  }
  100% {
    width: 100%;
  }
`;

const NavItem = styled.li<INavItem>`
  font-size: 20px;
  transition: .4s;
  position: relative;

  a {
    color: ${({theme}) => theme.colors.textSecondary};
  }

  ${props => props.isActive && css<INavItem>`
    transition: .4s;

    a {
      color: ${({theme}) => theme.colors.textPrimary};
      font-weight: 600;
    }

    *::after {
      content: "";
      display: block;
      background-color: ${({theme}) => theme.colors.textPrimary};
      width: 100%;
      height: 4px;
      margin-top: 5px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      animation: ${itemAnimation} .4s linear;
    }
  `}
`;


