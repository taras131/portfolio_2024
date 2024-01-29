import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {IWork} from "../models/iWorks";

interface IProps {
    work: IWork,
    isActive: boolean,
    activeWorkId: number,
    slideWidth: number
    handleWorkClick: () => void
}

export const WorkItem: FC<IProps> = ({
                                         work, isActive, handleWorkClick,
                                         activeWorkId, slideWidth
                                     }) => {
    const height = 500 - Math.abs((activeWorkId - work.id) * 50);
    let offset = (activeWorkId - work.id) * 500
    return (
        <Wrapper onClick={handleWorkClick}
                 isActive={isActive}
                 activeWorkId={activeWorkId}
                 workId={work.id}
                 height={height}
                 offset={offset}
                 slideWidth={slideWidth}
        >
            <h3>{work.title}</h3>
        </Wrapper>
    );
};

interface IWrapperProps {
    isActive: boolean,
    activeWorkId: number
    workId: number
    height: number
    offset: number
    slideWidth: number
}

const Wrapper = styled.article<IWrapperProps>`
    min-width: ${props => props.slideWidth + "px"};
    width: 100%;
    height: ${props => props.height + "px"};
    background-color: #020b13;
    border-radius: 8px;
    transition: .5s;
    outline: 1px solid #4286f4;
    transform: translateX(${props => props.offset + "px"});
    z-index: ${props => 100 - Math.abs(props.activeWorkId - props.workId)};
    @media screen and (max-width: 800px) {
        min-width: 500px;
    }
    ${props => props.isActive && css`
        box-shadow: 0 0 10px #00b3ff, 0 0 15px #4286f4, 0 0 25px #39b3e3;
    `}
    ${props => props.activeWorkId > props.workId && css`
        text-align: left;
    `}
    ${props => props.activeWorkId < props.workId && css`
        text-align: right;
    `}
`;