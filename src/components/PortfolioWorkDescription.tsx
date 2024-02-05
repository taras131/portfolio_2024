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
        <Wrapper width={width + "px"} startingMargin={startingMargin + "px"}>
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
    0% {
        opacity: 0;
        transform: translateY(80%);
    }
    20% {
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: translateY(0%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`

interface IWrapperProps {
    width: string
    startingMargin: string
}

const Wrapper = styled.div<IWrapperProps>`
    margin-left: ${props => props.startingMargin};
    width: ${props => props.width};
   
    height: 150px;
    overflow: hidden;
    transition: all .4s;

    p {
        text-align: center;
        margin-top: 30px;
        animation: 2s ${animationDescription} ease-out ;
    }
`
const DescriptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
`;