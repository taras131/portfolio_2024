import React, {FC, RefObject} from 'react';
import styled from "styled-components";
import {HistoryList} from "../components/HistoreList";
import {educationHistory} from "../utils/consts";

interface IProps {
    navRef: RefObject<HTMLHeadingElement>
}

export const EducationSection: FC<IProps> = ({navRef}) => {
    return (
        <Wrapper ref={navRef}>
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