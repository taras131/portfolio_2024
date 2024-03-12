import React, {FC, useContext} from 'react';
import styled, {css, keyframes} from "styled-components";
import {IDoubleLanguageText} from "../models/iHistory";
import {LanguageContext, languages} from "./LanguageContext";

interface IProps {
    description: IDoubleLanguageText,
    achievements: IDoubleLanguageText,
    skills: string []
    isShow: boolean
    gitLink: string
    webLink?: string
}

export const PortfolioDescription: FC<IProps> = ({
                                                     description, achievements,
                                                     skills, isShow, gitLink, webLink
                                                 }) => {
    const {language} = useContext(LanguageContext);
    const skillsList = skills.map(skill => <li key={skill}>{skill},</li>)
    return (
        <Wrapper>
            <Links isShow={isShow} key={description.ru}>

                <a href={gitLink} target={"_blank"}>Git</a>


                {webLink ? (<a href={webLink} target={"_blank"}>Site</a>) : (<span></span>)}

            </Links>
            <Container isShow={isShow} key={description.en}>
                <div>
                    <span>{language === languages[0] ? "Description" : "Описание"}: </span>
                    <p>{description[language]}</p>
                </div>
                <div>
                    <span>{language === languages[0] ? "Achievement" : "Достижения"}: </span>
                    <p>{achievements[language]}</p>
                </div>
                <div>
                    <span>{language === languages[0] ? "Technologies" : "Технологии"}: </span>
                    <Skills>{skillsList}</Skills>
                </div>
            </Container>
        </Wrapper>
    );
};

interface IContainerProps {
    isShow: boolean
}

const animationLink = keyframes`
  from {
    transform: translateY(-40px);
    opacity: 0;
    filter: blur(10px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
    filter: blur(0);
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
 
`

const Links = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: -40px;
  z-index: 100;

  & a {
    text-decoration: none;
    filter: blur(10px);
    transition: .4s;
    font-size: 18px;
    border: 1px solid #71d3d3;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    transform: translateY(-40px);
    opacity: 0;
    animation: ${animationLink} .4s;
    animation-fill-mode: forwards;
    z-index: 200;
    width: 70px;
  }

  & a:hover {
    color: #71d3d3;
    box-shadow: 0 0 4px #71d3d3;
  }
  @media screen and (max-width: 1440px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
`


const animationDescription = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
    filter: blur(10px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
    filter: blur(0);
  }
`;

const Container = styled.div<IContainerProps>`
  margin-top: 20px;
  opacity: 0;
  filter: blur(10px);
  z-index: 200;
  transform: translateY(40px);
  animation-delay: .4s;
  
  ${props => props.isShow && css`
    animation: ${animationDescription} .4s;
    animation-fill-mode: forwards;
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

  p{
    line-height: 1.4;
    z-index: 200;
  }
  
  @media screen and (max-width: 1230px) {
    grid-template-columns: 1fr;
    padding-left: 15px;
    padding-right: 15px;
  }
`

const Skills = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`