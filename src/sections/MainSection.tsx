import React, {FC, RefObject, useEffect, useState} from 'react';
import {CodeFragment} from "../components/CodeFragment";
import styled from "styled-components";
import {SolarSystem} from "../components/SolarSystem";
import {mainSectionDescriptionText} from "../utils/consts";

const texts = ["Шёь Е", "I’m Taras Zverev"];

interface IProps {
    navRef: RefObject<HTMLHeadingElement>
}

export const MainSection: FC<IProps> = ({navRef}) => {
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
        <div >
            <Wrapper ref={navRef}>
                <Container>
                    <Info>
                        <span>{displayedText}</span>
                        <h1><span>Frontend</span> developer</h1>
                        <p>
                            {mainSectionDescriptionText}
                        </p>
                    </Info>
                    <SolarSystem/>
                    <CodeFragment myName={displayedText}/>
                </Container>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.section`
    padding: 0 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 500px) {
        padding: 0 10px;
    }
`;

const Container = styled.div`
    position: relative;
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    @media screen and (max-width: 1030px) {
        gap: 70px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

        & > span {
            color: ${({theme}) => theme.colors.textSuccess};
        }
    }

    p {
        margin-top: 20px;
        max-width: 500px;
        color: ${({theme}) => theme.colors.textSecondaryColor};
    }
`;








