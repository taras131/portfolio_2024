import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {skills, works} from "../utils/consts";
import sprite from "../accest/icons/sprite.svg";
import {PortfolioWorksItem} from "../components/PortfolioWorksItem";
import {PortfolioWorkDescription} from "../components/PortfolioWorkDescription";
import {SkillItem} from "../components/SkillItem";

export const PortfolioSection = () => {
    const ref = useRef(null)
    const [activeWorkId, setActiveWorkId] = useState(0)
    const [windowWidth, setWindowWidth] = useState(Math.round(window.innerWidth));
    console.log(windowWidth)
    let activeSlideItemWidth = Math.round(windowWidth * 0.7)
    if (windowWidth > 1240) activeSlideItemWidth = Math.round(windowWidth * 0.5)
    if (windowWidth < 768) activeSlideItemWidth = Math.round(windowWidth * 0.8)
    const standardSlideItemWidth = Math.round(activeSlideItemWidth * 0.6)
    const startingMargin = Math.round((windowWidth - activeSlideItemWidth) / 2);
    const offset = Math.round((standardSlideItemWidth + 10) * activeWorkId - startingMargin);
    const paginationArr = works.map(work => work.id)
    const activeWork = works.filter(work => work.id === activeWorkId)[0]
    console.log(startingMargin)
    const handlePrevWorkClick = () => {
        setActiveWorkId(prev => prev > 0 ? prev - 1 : prev)
    }
    const handleNextWorkClick = () => {
        setActiveWorkId(prev => prev < works.length - 1 ? prev + 1 : prev)
    }
    const handleSetActiveWorkId = (id: number) => () => {
        if (id >= 0 && id < works.length) setActiveWorkId(id)
    }
    let x1: number | null = null;
    const handleTouchStart = (e: any) => {
        x1 = e.touches[0].clientX
    }
    const handleTouchMove = (e: any) => {
        let x2 = e.touches[0].clientX
        if (x1 && x1 > x2 + 10) {
            handleNextWorkClick();
            x1 = null;
        }
        if (x1 && x2 > x1 + 10) {
            handlePrevWorkClick();
            x1 = null;
        }
    }
    useEffect(() => {
        let element: any = null;
        if (ref && ref.current) {
            element = ref.current;
            element.addEventListener('touchstart', handleTouchStart, {passive: true});
            element.addEventListener('touchmove', handleTouchMove, {passive: true});
        }
        return () => {
            element.removeEventListener('touchstart', handleTouchStart, {passive: true});
            element.removeEventListener('touchmove', handleTouchMove, {passive: true});
        };
    }, [ref])
    const handleResize = () => {
        setWindowWidth(Math.round(window.innerWidth));
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const portfolioList = works.map(work => (
        <PortfolioWorksItem key={work.id}
                            work={work}
                            activeWorkId={activeWorkId}
                            activeSlideItemWidth={activeSlideItemWidth}
                            standardSlideItemWidth={standardSlideItemWidth}
                            handlePortfolioClick={handleSetActiveWorkId(work.id)}/>))
    const skillSList = skills.map(skill => (<SkillItem title={skill}
                                                       isActive={activeWork.skills.includes(skill)}/>))
    return (
        <Wrapper>
            <SectionHeader>
                <h2>Samples:</h2>
                <ul>
                    {skillSList}
                </ul>
            </SectionHeader>
            <Slider>
                {activeWorkId !== 0 && (
                    <PrevButton onClick={handlePrevWorkClick}>
                        <svg width={"24px"} height={"24px"} viewBox={"0 0 24 24"}
                             xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${sprite}#${"arrow-left"}`}/>
                        </svg>
                    </PrevButton>
                )}
                <SliderContainer ref={ref}>
                    <SliderContent offset={-offset}
                                   startingMargin={startingMargin + "px"}
                                   activeSlideItemWidth={activeSlideItemWidth}
                                   activeWorkId={activeWorkId}>
                        {portfolioList}
                    </SliderContent>
                </SliderContainer>
                {activeWorkId !== works.length - 1 && (
                    <NextButton onClick={handleNextWorkClick}>
                        <svg width={"24px"} height={"24px"} viewBox={"0 0 24 24"}
                             xmlns="http://www.w3.org/2000/svg">
                            <use xlinkHref={`${sprite}#${"arrow-left"}`}/>
                        </svg>
                    </NextButton>
                )}
            </Slider>
            <PortfolioWorkDescription width={activeSlideItemWidth}
                                      startingMargin={startingMargin}
                                      paginationArr={paginationArr}
                                      activeWorkId={activeWorkId}
                                      activeWork={activeWork}
                                      handleSetActiveWorkId={handleSetActiveWorkId}/>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    z-index: 100;
    padding-top: 60px;
 
`;

const Slider = styled.div`
    margin-top: 30px;
    position: relative;
    z-index: 100;

    & > button {
        height: 100%;
        width: 50px;
        cursor: pointer;
        opacity: .5;
        position: absolute;
        border: none;
        z-index: 100;
        background-color: black;

        &:hover {
            opacity: .8;
        }

        @media screen and (max-width: 768px) {
            width: 30px;
        }
    }
`;

const SectionHeader = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 10px;

    h2 {
        font-size: calc((100vw - 410px) / (1280 - 410) * (38 - 26) + 26px);
    }

    & > ul {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        @media screen and (max-width: 768px) {
            margin-top: 40px;
        }
    }
`

const PrevButton = styled.button`
    left: 0;
    top: 0;
`;

const NextButton = styled.button`
    right: 0;
    top: 0;

    svg {
        transform: rotate(180deg);
    }
`;

const SliderContainer = styled.div`
    overflow: hidden;
`;

interface ISliderContentProps {
    startingMargin: string
    offset: number
    activeSlideItemWidth: number
    activeWorkId: number
}

const SliderContent = styled.div<ISliderContentProps>`
    z-index: 100;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;
    transition: .4s;
    transform: translateX(${props => props.offset + "px"});
    height: ${props => (props.activeSlideItemWidth * 1080 / 1600 + 50 + "px")};
}
`;