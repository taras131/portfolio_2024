import React, {FC} from 'react';
import styled from "styled-components";
import {HistoryListItem} from "./HistoryListItem";
import {IHistory} from "../models/iHistory";

type TProps = {
    history: IHistory []
}

export const HistoryList: FC<TProps> = ({history}) => {
    const historyList = history.map(historyItem => (<HistoryListItem key={historyItem.id}
                                                                     historyItem={historyItem}/>))
    return (
        <Wrapper>
            {historyList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 30px;

  li:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 0;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    @media screen and (max-width: 768px){
      left: 0;
      right: 0;
    }
  }
`