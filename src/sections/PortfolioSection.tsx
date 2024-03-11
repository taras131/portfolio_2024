import React, {FC, RefObject, useCallback, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {works} from "../utils/consts";
import {PortfolioWorkLinks} from "../components/PortfolioWorkLinks";
import {PortfolioWorkSkillsList} from "../components/PortfolioWorkSkillsList";
import {PortfolioWorkHeader} from "../components/PortfolioWorkHeader";
import {Slider} from "../components/Slider";

interface IProps {
    navRef: RefObject<HTMLHeadingElement>
    isShow: boolean
}

export const PortfolioSection: FC<IProps> = ({navRef, isShow}) => {
    const [activeWorkId, setActiveWorkId] = useState(0)
    const [windowWidth, setWindowWidth] = useState(Math.round(window.innerWidth));
    const [activeSlideItemWidth, setActiveSlideItemWidth] = useState(0);
    const [standardSlideItemWidth, setStandardSlideItemWidth] = useState(0);
    useEffect(() => {
        const calculateWidths = () => {
            let newActiveSlideItemWidth = Math.round(windowWidth * 0.7);
            if (windowWidth > 1340) newActiveSlideItemWidth = Math.round(windowWidth * 0.45);
            if (windowWidth < 768) newActiveSlideItemWidth = Math.round(windowWidth * 0.8);
            setActiveSlideItemWidth(newActiveSlideItemWidth);
            setStandardSlideItemWidth(Math.round(newActiveSlideItemWidth * 0.6));
        };
        calculateWidths();
        const handleResize = () => {
            setWindowWidth(Math.round(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);
    const startingMargin = Math.round((windowWidth - activeSlideItemWidth) / 2);
    const paginationArr = works.map(work => work.id)
    const activeWork = works.filter(work => work.id === activeWorkId)[0]
    const handlePrevWorkClick = useCallback(() => {
        setActiveWorkId(prev => prev > 0 ? prev - 1 : prev)
    }, [setActiveWorkId])
    const handleNextWorkClick = useCallback(() => {
        setActiveWorkId(prev => prev < works.length - 1 ? prev + 1 : prev)
    }, [setActiveWorkId])
    const handleSetActiveWorkId = useCallback((id: number) => () => {
        if (id >= 0 && id < works.length) setActiveWorkId(id)
    }, [setActiveWorkId])
    return (
        <Wrapper ref={navRef}>
            <PortfolioWorkHeader title={activeWork.title}
                                 description={activeWork.description}
                                 achievements={activeWork.achievements}
                                 skills={activeWork.skills}
                                 isShow={isShow}/>
            <Slider activeWorkId={activeWorkId}
                    handlePrevWorkClick={handlePrevWorkClick}
                    handleNextWorkClick={handleNextWorkClick}
                    startingMargin={startingMargin}
                    activeSlideItemWidth={activeSlideItemWidth}
                    standardSlideItemWidth={standardSlideItemWidth}
                    handleSetActiveWorkId={handleSetActiveWorkId}
            />
            <PortfolioWorkLinks width={activeSlideItemWidth}
                                startingMargin={startingMargin}
                                paginationArr={paginationArr}
                                activeWorkId={activeWorkId}
                                activeWork={activeWork}
                                handleSetActiveWorkId={handleSetActiveWorkId}/>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  z-index: 200;
  padding-top: 60px;
`;




