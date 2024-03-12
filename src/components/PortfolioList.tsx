import React, {FC, memo} from 'react';
import {works} from "../utils/consts";
import {PortfolioListItem} from "./PortfolioListItem";

interface IProps {
    activeWorkId: number
    activeSlideItemWidth: number
    standardSlideItemWidth: number
    handlePortfolioClick: (id: number) => () => void
}

export const PortfolioList: FC<IProps> = memo(({
                                                   activeWorkId,
                                                   activeSlideItemWidth,
                                                   standardSlideItemWidth,
                                                   handlePortfolioClick
                                               }) => {
    const portfolioList = works.map(work => {
        const handleClick = handlePortfolioClick(work.id)
        const isActive = activeWorkId === work.id
        const slideWidth = isActive ? activeSlideItemWidth : standardSlideItemWidth
        return (<PortfolioListItem key={work.id}
                                   work={work}
                                   isActive={isActive}
                                   slideWidth={slideWidth}
                                   handlePortfolioClick={handleClick}/>)
    })

    return (
        <>
            {portfolioList}
        </>
    );
});

