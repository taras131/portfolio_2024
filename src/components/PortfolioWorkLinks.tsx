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

export const PortfolioWorkLinks: FC<IProps> = ({
                                                   activeWork,
                                                   width,
                                                   startingMargin,
                                                   paginationArr,
                                                   activeWorkId,
                                                   handleSetActiveWorkId
                                               }) => {
    return (
        <Wrapper width={width + "px"} startingMargin={startingMargin + "px"} key={activeWork.description.en}>
            <a href={activeWork.git} target={"_blank"}>Git</a>
            <Paginator paginationArr={paginationArr}
                       activeId={activeWorkId}
                       handleSetActiveId={handleSetActiveWorkId}/>
            {activeWork.webSite
                ? (<a href={activeWork.webSite} target={"_blank"}>Site</a>)
                : (<span></span>)}
        </Wrapper>
    );
};

const animation = keyframes`
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
  margin-top: 10px;
  margin-left: ${props => props.startingMargin};
  width: ${props => props.width};
  z-index: 100;
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  align-items: center;

  a {
    text-decoration: none;
    transition: .4s;
    font-size: 18px;
    border: 1px solid #71d3d3;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    transform: translateY(-100%);
    opacity: 0;
    animation: ${animation} .4s linear;
    animation-delay: .4s;
    animation-fill-mode: forwards;
    z-index: 99;
  }

  a:hover {
    color: #71d3d3;
    box-shadow: 0 0 4px #71d3d3;
  }

`
