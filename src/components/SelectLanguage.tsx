import React, {useContext} from 'react';
import {LanguageContext, languages} from "../contexts/LanguageContext";
import styled, {css, keyframes} from "styled-components";
import {TLanguage} from "../models/iLanguage";
import img from "../assets/img/mars.png"

export const SelectLanguage = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
    const handleLanguageToggle = () => {
        changeLanguage(language === languages[0] ? languages[1] : languages[0]);
    };
    return (
        <ToggleContainer onClick={handleLanguageToggle}>
            <ToggleButton selected={language === languages[1]}>
                Ru
            </ToggleButton>
            <IndicatorContainer selectedLanguage={language}>
                <Indicator selectedLanguage={language}>
                    <img src={img} alt="select language"/>
                </Indicator>
            </IndicatorContainer>
            <ToggleButton selected={language === languages[0]}>
                En
            </ToggleButton>
        </ToggleContainer>
    );
};

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(26, 28, 40, .6);
  position: fixed;
  right: 20px;
  top: calc(100vh - 60px);
  z-index: 100;
`;

interface IToggleButtonProps {
    selected: boolean
}

const ToggleButton = styled.button<IToggleButtonProps>`
  transition: .4s;
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  background-color: inherit;
  position: relative;
  color: ${({theme}) => theme.colors.textSecondary};
  ${props => props.selected && css`
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #007bff, 0 0 20px #007bff, 0 0 25px #007bff, 0 0 30px #007bff, 0 0 35px #007bff;
    color: white;
  `}
`;

interface IIndicatorContainer {
    selectedLanguage: TLanguage
}

const IndicatorContainer = styled.div<IIndicatorContainer>`
  width: 80px;
  height: 40px;
  border-radius: 40px;
  transition: 0.5s ease;
  position: relative;
`;

interface IIndicator {
    selectedLanguage: TLanguage
}

const imgAnimation = keyframes`
  from {
    transform: rotate(0deg);
    box-shadow: 0 0 5px #966f60, 0 0 10px #af7560, 0 0 13px #7c4734;
  }
  to {
    transform: rotate(360deg);
    box-shadow: 0 0 10px #966f60, 0 0 20px #af7560, 0 0 25px #7c4734;
  }
`

const Indicator = styled.div<IIndicator>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #007bff;
  transition: 0.5s ease;
  position: absolute;
  top: 0;
  left: ${(props) =>
          props.selectedLanguage === languages[1]
                  ? '0'
                  : '40px'};

  & > img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    object-fit: cover;
    animation: ${imgAnimation} 30s linear infinite;
  }
`;

