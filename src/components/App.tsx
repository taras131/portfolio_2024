import React from 'react';
import {GlobalStyle} from "../styles/global";
import {theme} from "../styles/theme";
import styled, {ThemeProvider} from "styled-components";
import {Header} from "../layout/Header";
import {Container} from "./Container";
import {MainSection} from "../sections/MainSection";
import {PortfolioSection} from "../sections/PortfolioSection";
import {StarsSky} from "./StarsSky";
import {EducationSection} from "../sections/EducationSection";
import {WorkSection} from "../sections/WorkSection";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Header/>
                <MainSection/>
                <PortfolioSection/>
                <EducationSection/>
                <WorkSection/>
                <GlobalStyle/>
                <StarsSky/>
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    color: ${({theme}) => theme.colors.textPrimary};
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    padding-bottom: 800px;
`;


