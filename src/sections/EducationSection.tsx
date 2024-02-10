import React from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {educationHistory} from "../utils/consts";

export const EducationSection = () => {
    return (
        <Wrapper id={"education"}>
            <Container>
                <h2>Education History:</h2>
                <HistoryList history={educationHistory}/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 70px 20px 0;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;

    h2 {
        z-index: 100;
    }

    & > div {
        margin-top: 30px;
    }
`;