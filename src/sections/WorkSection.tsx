import React, {FC} from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {workHistory} from "../utils/consts";

interface IProps {
    isShow: boolean
}

export const WorkSection: FC<IProps> = ({isShow}) => {
    return (
        <Wrapper>
            <Container>
                <h2>Work History:</h2>
                <HistoryList history={workHistory} isShow={isShow}/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 70px 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  z-index: 200;

  & > h2 {
    z-index: 200;
  }

  & > div {
    margin-top: 30px;
  }
`;