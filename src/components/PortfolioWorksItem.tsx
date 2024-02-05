import React, {FC} from 'react';
import {IWork} from "../models/iWorks";
import styled, {css} from "styled-components";

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
    return (
        <Wrapper isActive={activeWorkId === work.id}
                 standardImgWidth={standardSlideItemWidth - 40}
                 activeImgWidth={activeSlideItemWidth - 40}
                 onClick={handlePortfolioClick}>
            <h3>{work.title}</h3>
            <img src={work.img[0]} alt="work_screen"/>
        </Wrapper>
    );
};

interface IWrapperProps {
    isActive: boolean
    standardImgWidth: number
    activeImgWidth: number

}

const Wrapper = styled.div<IWrapperProps>`
    padding: 20px;
    border-radius: 8px;
    background-color: #020b13;
    cursor: pointer;

    img {
        margin-top: 20px;
        height: ${props => (props.standardImgWidth * 1080 / 1600 + "px")};
        width: ${props => (props.standardImgWidth + "px")};
        object-fit: cover;
        border-radius: 8px;
        transition: .6s;
    }

    ${props => props.isActive && css`
        cursor: default;
        img {
            height: ${(props.activeImgWidth * 1080 / 1600 + "px")};
            width: ${(props.activeImgWidth + "px")};
        }
    `}
`;