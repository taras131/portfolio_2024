import React, {FC, useContext} from 'react';
import diploma_1 from "../assets/img/diplom_1.jpg";
import diploma_2 from "../assets/img/diplom_2.jpeg";
import styled, {css} from "styled-components";
import {LanguageContext, languages} from "../components/LanguageContext";

interface IProps {
    isShow: boolean
}

export const DiplomasSections: FC<IProps> = ({isShow}) => {
    const {language} = useContext(LanguageContext);
    return (
        <Wrapper isShow = {isShow}>
            <h2>{language === languages[0] ? "Diplomas" : "Дипломы"}:</h2>
            <div>
                <img src={diploma_1} alt="diploma 1"/>
                <img src={diploma_2} alt="diploma 2"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div<IProps>`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding-top: 70px;

  & > div {
    display: flex;
    align-items: start;
    gap: 20px;
    margin-top: 50px;
    opacity: 0;
    transition: .7s;
    transform: translateY(40px);
    filter: blur(10px);

    ${props => props.isShow && css`
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    `}
    img {
      opacity: 0;
      transition: .7s;
      transform: translateY(40px);
      filter: blur(10px);
      ${props => props.isShow && css`
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      `}
    }

    img:first-child {
      width: 60%;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }

    img:last-child {
      width: 40%;
      transition-delay: .2s;
      @media screen and (max-width: 1000px) {
        width: 60%;
      }
    }

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (max-width: 1440px) {
    padding: 0 15px;
  }
`

