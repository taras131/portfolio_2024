import React, {FC, useContext} from 'react';
import styled, {css} from "styled-components";
import {navigation} from "../utils/consts";
import {LanguageContext} from "./LanguageContext";

interface IProps {
    title: string
}

export const PortfolioWorkHeader: FC<IProps> = ({title}) => {
    const {language} = useContext(LanguageContext);
    return (
        <Wrapper>
            <div>
                <h2>{navigation[1].title[language]}: <span>{title}</span></h2>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1230px) {
    padding: 15px;
  }
  
  h2 > span {
    font-weight: 500;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-left: 30px;
  }
`

interface IContainerProps {
    isShow: boolean
}

const Container = styled.div<IContainerProps>`
  margin-top: 30px;
  opacity: 0;
  transition: .5s;
  filter: blur(10px);
  z-index: 200;

  ${props => props.isShow && css`
    opacity: 1;
    filter: blur(0);
  `}
  & > div {
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    z-index: 100;
    background-color: rgba(26, 28, 40, .6);
    backdrop-filter: blur(1px);
    min-height: 60px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  div:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 0;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    @media screen and (max-width: 768px) {
      left: 0;
      right: 0;
    }
  }

  span {
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 1230px) {
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 1230px) {
    grid-template-columns: 1fr;
  }
`

const Skills = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`