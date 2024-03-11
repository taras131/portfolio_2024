import React, {FC, memo, useCallback} from 'react';
import {skills, works} from "../utils/consts";
import {PortfolioWorksItem} from "./PortfolioWorksItem";

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
        return (<PortfolioWorksItem key={work.id}
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

