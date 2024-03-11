import React, {FC, useCallback, useEffect, useRef} from 'react';
import sprite from "../assets/icons/sprite.svg";
import {PortfolioList} from "./PortfolioList";
import {works} from "../utils/consts";
import styled from "styled-components";

interface IProps {
    activeWorkId: number
    handlePrevWorkClick: () => void
    handleNextWorkClick: () => void
    startingMargin: number
    activeSlideItemWidth: number
    standardSlideItemWidth: number
    handleSetActiveWorkId: (id: number) => () => void
}

export const Slider:FC<IProps> = ({activeWorkId,
                                      handlePrevWorkClick,
                                      handleNextWorkClick,
                                      startingMargin,
                                      activeSlideItemWidth,
                                      standardSlideItemWidth,
                                      handleSetActiveWorkId}) => {
    const ref = useRef(null)
    const refX1 = useRef(null)
    const offset = Math.round((standardSlideItemWidth + 10) * activeWorkId - startingMargin);
    const handleTouchStart = useCallback((e: any) => {
        refX1.current = e.touches[0].clientX
    },[])
    const handleTouchMove = useCallback((e: any) => {
        let x2 = e.touches[0].clientX
        if (refX1.current && refX1.current > x2 + 10) {
            handleNextWorkClick();
            refX1.current= null;
        }
        if (refX1.current && x2 > refX1.current + 10) {
            handlePrevWorkClick();
            refX1.current = null;
        }
    }, [handleNextWorkClick, handlePrevWorkClick, refX1.current])
    useEffect(() => {
        let element: any = null;
        if (ref && ref.current) {
            element = ref.current;
            element.addEventListener('touchstart', handleTouchStart, {passive: true});
            element.addEventListener('touchmove', handleTouchMove, {passive: true});
        }
        return () => {
            element.removeEventListener('touchstart', handleTouchStart, {passive: true});
            element.removeEventListener('touchmove', handleTouchStart, {passive: true});
        };
    }, [ref, handleTouchStart, handleTouchMove])
    return (
        <Wrapper>
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
                    <PortfolioList activeWorkId={activeWorkId}
                                   activeSlideItemWidth={activeSlideItemWidth}
                                   standardSlideItemWidth={standardSlideItemWidth}
                                   handlePortfolioClick={handleSetActiveWorkId}/>
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
        </Wrapper>
    );
};


const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  & > button {
    height: 100%;
    width: 50px;
    cursor: pointer;
    position: absolute;
    border: none;
    z-index: 100;
    background-color: black;
    opacity: 0;
    transition: .3s;

    &:hover {
      opacity: .8;
    }

    @media screen and (max-width: 768px) {
      width: 30px;
      opacity: .5;
    }
  }

  &:hover > button {
    opacity: 1;
  }
`;


const SliderContainer = styled.div`
  overflow: hidden;
`;

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
