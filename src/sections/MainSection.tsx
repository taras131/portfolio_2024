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
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 5px;

    @media screen and (max-width: 1070px) {
        gap: 50px;
        padding-top: 30px;
        flex-direction: column;
        justify-content: center;
        margin-left: 25px;
        margin-right: 25px;
    }
    @media screen and (max-width: 576px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Info = styled.div`
    z-index: 2;
    position: relative;

    h1, span {
        font-weight: 700;
        font-size: calc( (100vw - 410px)/(1280 - 410) * (52 - 34) + 34px);
    }
    
    &>span {
        position: absolute;
    }
    
    h1 {
        margin-top: 50px;
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








