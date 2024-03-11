import React, {FC, RefObject} from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {educationHistory} from "../utils/consts";

interface IProps {
    navRef: RefObject<HTMLHeadingElement>
    isShow: boolean
}

export const EducationSection: FC<IProps> = ({navRef, isShow}) => {
    return (
        <Wrapper ref={navRef}>
            <Container>
                <h2>Education History:</h2>
                <HistoryList history={educationHistory} isShow={isShow}/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 170px 20px 0;
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