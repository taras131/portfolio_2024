import React, {FC, useEffect, useState} from 'react';
import {CodeFragment} from "../components/CodeFragment";
import styled from "styled-components";
import {SolarSystem} from "../components/SolarSystem";
import {mainSectionDescriptionText} from "../utils/consts";

const texts = ["Шёь Ефкфы Яму", "I’m Taras Zverev"];

export const MainSection: FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < texts[currentTextIndex].length) {
                setDisplayedText(prevText => prevText + texts[currentTextIndex][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearTimeout(timeout);
            }
        }, 200);
        return () => clearTimeout(timeout);
    }, [texts, currentTextIndex, currentIndex, displayedText]);

    useEffect(() => {
        if (currentIndex === texts[currentTextIndex].length) {
            const timeout = setTimeout(() => {
                if (displayedText && currentTextIndex !== texts.length - 1) {
                    setDisplayedText(prevText => prevText.slice(0, -1));
                } else if (currentTextIndex !== texts.length - 1) {
                    setCurrentIndex(0);
                    setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
                }
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [displayedText, texts, currentTextIndex, currentIndex]);
    return (
        <Wrapper>
            <Info>
                <span>{displayedText}</span>
                <h1><span>Frontend</span> developer</h1>
                <p>
                    {mainSectionDescriptionText}
                </p>
             <SolarSystem/>
            </Info>
            <CodeFragment myName={displayedText}/>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  min-height: 500px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
<<<<<<< HEAD
  gap: 5px;
  
  @media screen and (max-width: 1070px) {
=======
  gap: 20px;

  @media screen and (max-width: 1180px) {
    padding-top: 70px;
>>>>>>> ca06c0d1fb32e13be5bd1fb248570152de56d184
    flex-direction: column;
    justify-content: center;
    gap: 70px;
  }

  img {
    width: 525px;
    height: 457px;
    object-fit: cover;
    border-radius: 8px;
    opacity: .7;
  }
`;

const Info = styled.div`
  z-index: 2;
  position: relative;

  span {
    display: inline-block;
    height: 48px;
    font-size: 48px;
    font-weight: 700;

  }

  h1 {
    font-size: 48px;
    font-weight: 700;

    span {
      color: ${({theme}) => theme.colors.textSuccess};
    }
  }

  p {
    margin-top: 20px;
    max-width: 500px;
    color: ${({theme}) => theme.colors.textSecondaryColor};
  }
`;








