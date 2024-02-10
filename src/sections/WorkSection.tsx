import React from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {workHistory} from "../utils/consts";

export const WorkSection = () => {
    return (
        <Wrapper >
            <Container>
                <h2>Work History:</h2>
                <HistoryList history={workHistory}/>
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

    & > div {
        margin-top: 30px;
    }
`;