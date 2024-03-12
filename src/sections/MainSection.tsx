import React, {FC, memo, RefObject, useContext, useEffect, useState} from 'react';
import {CodeFragment} from "../components/CodeFragment";
import styled, {keyframes} from "styled-components";
import {SolarSystem} from "../components/SolarSystem";
import {mainSectionDescriptionText} from "../utils/consts";
import {Button} from "../components/Button";
import {LanguageContext, languages} from "../components/LanguageContext";
import {IDoubleLanguageText} from "../models/iHistory";
import {SkillsList} from "../components/SkillsList";

const texts = {
    en: ["Шёь Е", "I’m Taras Zverev"],
    ru: ["Z Nfh", "Я Тарас Зверев"]
};
const buttonContactText: IDoubleLanguageText = {
    en: "Contact",
    ru: "Связаться"
}

interface IProps {
    navRef: RefObject<HTMLHeadingElement>
    openContactsModal: () => void
}

export const MainSection: FC<IProps> = memo(({navRef, openContactsModal}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const {language} = useContext(LanguageContext);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < texts[language][currentTextIndex].length) {
                setDisplayedText(prevText => prevText + texts[language][currentTextIndex][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearTimeout(timeout);
            }
        }, 200);
        return () => clearTimeout(timeout);
    }, [texts, currentTextIndex, currentIndex, displayedText]);

    useEffect(() => {
        if (currentIndex === texts[language][currentTextIndex].length) {
            const timeout = setTimeout(() => {
                if (displayedText && currentTextIndex !== texts[language].length - 1) {
                    setDisplayedText(prevText => prevText.slice(0, -1));
                } else if (currentTextIndex !== texts[language].length - 1) {
                    setCurrentIndex(0);
                    setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts[language].length);
                }
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [displayedText, texts, currentTextIndex, currentIndex]);
    useEffect(() => {
        setCurrentIndex(0);
        setCurrentTextIndex(0);
        setDisplayedText('');
    }, [language]);
    return (
        <div>
            <Wrapper ref={navRef}>
                <Container>
                    <Info>
                        <span>{displayedText}</span>
                        <h1><span>Frontend</span> developer</h1>
                        <p>
                            {mainSectionDescriptionText[language]}
                        </p>
                        <Button variant={"text"} onClick={openContactsModal}>
                            {buttonContactText[language]}
                        </Button>
                    </Info>
                    <SolarSystem/>
                    <CodeFragment myName={displayedText}/>
                </Container>
                <SkillsList/>
            </Wrapper>
        </div>
    );
});

const Wrapper = styled.section`
  padding: 0 30px 0 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 90px 20px;
    gap: 40px;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media screen and (max-width: 1030px) {
    gap: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    gap: 40px;
    
  }
`

const contactAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #e3dfd8, 0 0 10px #e7ca95, 0 0 13px orange;
  }
  50% {
    box-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 25px orange;
  }
  100% {
    box-shadow: 0 0 5px #e3dfd8, 0 0 10px #e7ca95, 0 0 13px orange;
  }
`

const Info = styled.div`
  z-index: 2;
  position: relative;

  h1, span {
    font-weight: 700;
    font-size: calc((100vw - 410px) / (1280 - 410) * (52 - 34) + 34px);
  }

  & > span {
    position: absolute;
  }

  h1 {
    margin-top: 50px;
    line-height: 2;

    & > span {
      color: ${({theme}) => theme.colors.textSuccess};
    }
    @media screen and (max-width: 1030px) {
      line-height: 1.6;
    }
    @media screen and (max-width: 500px) {
      line-height: 1.2;
    }
  }

  p {
    margin-top: 20px;
    max-width: 500px;
    color: ${({theme}) => theme.colors.textSecondaryColor};
    font-size: 18px;
    line-height: 150%;
  }

  & > button {
    margin-top: 50px;
    background-color: orange;
    padding: 10px 20px;
    border-radius: 8px;
    transition: .4s;
    animation: ${contactAnimation} 10s infinite;

    &:hover {
      box-shadow: 0 0 5px #fff, 0 0 10px #c2a267, 0 0 15px #d5911c, 0 0 20px #f59f00, 0 0 25px orange, 0 0 30px orange, 0 0 35px orange;
      transform: rotate(10deg);
    }

    @media screen and (max-width: 500px) {
      margin-top: 40px;
    }
  }
`;








