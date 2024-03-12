import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {HistoryListItem} from "./HistoryListItem";
import {IHistory} from "../models/iHistory";

type TProps = {
    history: IHistory []
    isShow: boolean
}

export const HistoryList: FC<TProps> = ({history, isShow}) => {
    const historyList = history.map(historyItem => (<HistoryListItem key={historyItem.id}
                                                                     historyItem={historyItem}/>))
    return (
        <Wrapper isShow={isShow}>
            {historyList}
        </Wrapper>
    );
};


interface IWrapperProps {
    isShow: boolean
}

const Wrapper = styled.ul<IWrapperProps>`
  margin-top: 30px;
  opacity: 0;
  transition: .7s;
  transform: translateY(40px);
  filter: blur(10px);

  ${props => props.isShow && css`
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  `}
  li:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 0;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    @media screen and (max-width: 768px) {
      left: 0;
      right: 0;
    }
  }
`