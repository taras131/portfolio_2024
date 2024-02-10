import React, {FC} from 'react';
import styled, {keyframes} from "styled-components";
import {Paginator} from "./Paginator";
import {IWork} from "../models/iWorks";

interface IProps {
    activeWork: IWork
    width: number
    startingMargin: number
    paginationArr: number []
    activeWorkId: number
    handleSetActiveWorkId: (id: number) => () => void
}

export const PortfolioWorkDescription: FC<IProps> = ({
                                                         activeWork,
                                                         width,
                                                         startingMargin,
                                                         paginationArr,
                                                         activeWorkId,
                                                         handleSetActiveWorkId
                                                     }) => {
    return (
        <Wrapper width={width + "px"} startingMargin={startingMargin + "px"} key={activeWork.description}>
            <DescriptionHeader>
                <span>Git</span>
                <Paginator paginationArr={paginationArr}
                           activeId={activeWorkId}
                           handleSetActiveId={handleSetActiveWorkId}/>
                <span>WebSite</span>
            </DescriptionHeader>
            <p>{activeWork.description}</p>
        </Wrapper>
    );
};

const animationDescription = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;
const animationGit = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;
const animationSite = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

interface IWrapperProps {
    width: string
    startingMargin: string
}

const Wrapper = styled.div<IWrapperProps>`
    margin-top: 30px;
    margin-left: ${props => props.startingMargin};
    width: ${props => props.width};
    height: 150px;
    overflow: hidden;
    z-index: 100;

    & > p {
        z-index: 100;
        text-align: center;
        margin-top: 30px;
        animation: ${animationDescription} .4s forwards;
    }
`
const DescriptionHeader = styled.div`
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    span:first-child {
        z-index: 100;
        animation: ${animationGit} .4s linear;
    }
    span:last-child {
        z-index: 100;
        animation: ${animationSite} .4s linear;
    }
`;