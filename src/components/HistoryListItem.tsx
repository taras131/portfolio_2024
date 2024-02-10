import React, {FC} from 'react';
import styled from "styled-components";
import {TextInBox} from "./TextInBox";
import {IHistory} from "../models/iHistory";

type TProps = {
    historyItem: IHistory
}

export const HistoryListItem: FC<TProps> = ({historyItem}) => {
    return (
        <Wrapper>
            <HistoryHeader>
                <h3>{historyItem.name}</h3>
                <RoleAndDate>
                    <span>{historyItem.role}</span>
                    <TextInBox isWhite={true}>
                        {`${historyItem.dateStart} - ${historyItem.dateFinish}`}
                    </TextInBox>
                </RoleAndDate>
            </HistoryHeader>
            <Description>
                <h4>{historyItem.discipline}</h4>
                <p>{historyItem.description}</p>
            </Description>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    min-height: 208px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    z-index: 100;
   
    background-color: rgba(26, 28, 40, .6);
    backdrop-filter: blur(1px);
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const HistoryHeader = styled.div`
  flex-grow: 1;

`;

const RoleAndDate = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 27px;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        gap: 12px;
    }
`;

const Description = styled.div`
  max-width: 536px;
  width: 100%;
  flex-grow: 1;

  p {
    margin-top: 28px;
  }

  @media screen and (max-width: 768px)  {
    padding-top: 30px;
    p {
      margin-top: 10px;
    }
  }
`