import React, {FC, RefObject, useContext} from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {workHistory} from "../utils/consts";
import {LanguageContext, languages} from "../contexts/LanguageContext";

interface IProps {
    isShow: boolean
    navRef: RefObject<HTMLHeadingElement>
}

export const WorkSection: FC<IProps> = ({isShow,navRef}) => {
    const {language} = useContext(LanguageContext);
    return (
        <Wrapper ref={navRef}>
            <Container>
                <h2>{language === languages[0] ? "Work History" : "Работа"}:</h2>
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