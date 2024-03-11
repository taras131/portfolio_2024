import React, {FC, useContext, useState} from 'react';
import styled, {css, keyframes} from "styled-components";
import {navigation} from "../utils/consts";
import {LanguageContext} from "./LanguageContext";

interface IProps {
    activeId: number
    handleNavItemClick: (id: number) => () => void
}

export const Navigation: FC<IProps> = ({activeId, handleNavItemClick}) => {
    const {language} = useContext(LanguageContext);
    const linkList = navigation.map(nav => (
        <NavItem key={nav.id} onClick={handleNavItemClick(nav.id)} isActive={activeId === nav.id}>
            {nav.title[language]}
        </NavItem>))
    return (
        <NavWrapper>
            <ul>
                {linkList}
            </ul>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
  ul {
    display: flex;
    align-items: start;
    gap: 50px;
    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }

`;

interface INavItem {
    isActive: boolean
}

export const itemAnimation = keyframes`
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
  color: ${({theme}) => theme.colors.textSecondary};
  cursor: pointer;

  ${props => props.isActive && css<INavItem>`
    transition: .4s;
    color: ${({theme}) => theme.colors.textPrimary};
    font-weight: 600;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #007bff, 0 0 20px #007bff, 0 0 25px #007bff, 0 0 30px #007bff, 0 0 35px #007bff;
    &::after {
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


