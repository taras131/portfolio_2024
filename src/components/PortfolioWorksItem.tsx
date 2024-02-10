import React, {FC, useEffect, useRef, useState} from 'react';
import {IWork} from "../models/iWorks";
import styled, {css, keyframes} from "styled-components";
import {works} from "../utils/consts";
import sprite from "../accest/icons/sprite.svg";
import {Paginator} from "./Paginator";
import {VerticalSliderButton} from "./VerticalSliderButton";

interface IProps {
    work: IWork
    activeWorkId: number
    activeSlideItemWidth: number
    standardSlideItemWidth: number
    handlePortfolioClick: () => void
}

export const PortfolioWorksItem: FC<IProps> = ({
                                                   work,
                                                   activeWorkId,
                                                   activeSlideItemWidth,
                                                   standardSlideItemWidth,
                                                   handlePortfolioClick
                                               }) => {
    const ref = useRef(null)
    const [activeImgId, setActiveImgId] = useState(0)
    const paginationArr = work.img.map((_, index) => index)
    const isActive = activeWorkId === work.id
    const imgWidth = isActive ? (activeSlideItemWidth - 40) : (standardSlideItemWidth - 40)
    const imgHeight = imgWidth * 1080 / 1600
    const gap = 10;
    const topOffset = (imgHeight + gap) * activeImgId
    const handlePrevClick = () => {
        setActiveImgId(prev => prev !== 0 ? prev - 1 : prev)
    }
    const handleNextClick = () => {
        setActiveImgId(prev => prev !== work.img.length - 1 ? prev + 1 : prev)
    }
    const handleSetActiveImgId = (id: number) => () => {
        if (id >= 0 && id < work.img.length) setActiveImgId(id)
    }
    const handleWheel = (e: any) => {
        e.preventDefault()
        e.stopPropagation();
        if (e.deltaY > 0) {
            handleNextClick()
        } else if (e.deltaY < 0) {
            handlePrevClick()
        }
    }

    useEffect(() => {
        let element: any = null;
        if (ref && ref.current && isActive) {
            element = ref.current;
            element.addEventListener('wheel', handleWheel);
        }
        if (isActive) {
            return () => {
                element.removeEventListener('wheel', handleWheel);
            };
        }

    }, [ref, isActive])
    const imgList = work.img.map(item => (<img key={item} src={item} alt={"work_example"}/>))
    return (
        <Wrapper isActive={isActive}
                 imgWidth={imgWidth}
                 imgHeight={imgHeight}
                 gap={gap}
                 onClick={handlePortfolioClick}>
            <h3>{work.title}</h3>
            <ButtonWrapper>
                {isActive && activeImgId !== 0 && (
                    <VerticalSliderButton key={work.id} type={"prev"} handleClick={handlePrevClick}/>
                )}
            </ButtonWrapper>
            <SlideContainer imgWidth={imgWidth}
                            imgHeight={imgHeight}
                            ref={ref}>
                <SliderContent topOffset={-topOffset}>
                    {imgList}
                </SliderContent>
            </SlideContainer>
            <ButtonWrapper>
                {isActive && activeImgId !== work.img.length - 1 && (
                    <VerticalSliderButton key={work.id} type={"next"} handleClick={handleNextClick}/>
                )}
            </ButtonWrapper>
            {isActive && (
                <PaginatorWrapper>
                    <Paginator paginationArr={paginationArr}
                               isVerticalMode activeId={activeImgId}
                               handleSetActiveId={handleSetActiveImgId}/>
                </PaginatorWrapper>
            )}
        </Wrapper>
    );
};

interface IWrapperProps {
    isActive: boolean
    imgWidth: number
    imgHeight: number
    gap: number
}

const animationButton = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Wrapper = styled.div<IWrapperProps>`
    border-radius: 8px;
    background-color: rgba(2, 11, 19, 0.6);
    cursor: pointer;
    position: relative;
    padding: 0 20px;

    h3 {
        position: absolute;
        left: 10px;
        top: 10px;
    }

    img {
        height: ${props => (props.imgHeight + "px")};
        width: ${props => (props.imgWidth + "px")};
        margin-bottom: ${props => (props.gap + "px")};
        object-fit: cover;
        transition: .4s;
        object-position: center;
    }

    & button {
        background-color: inherit;
        animation: .4s ${animationButton} linear;
    }


    ${props => props.isActive && css`
        cursor: default;
    `}
`;

const ButtonWrapper = styled.div`
    height: 40px;
`;

const PaginatorWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
`;

interface ISlideContainerProps {
    imgWidth: number
    imgHeight: number
}

const SlideContainer = styled.div<ISlideContainerProps>`
    height: ${props => (props.imgHeight + "px")};
    width: ${props => (props.imgWidth + "px")};
    overflow: hidden;
    border-radius: 8px;
    position: relative;
`;


interface ISlideContentProps {
    topOffset: number
}

const SliderContent = styled.div<ISlideContentProps>`
    transition: .4s;
    transform: translateY(${props => props.topOffset + "px"});
`;