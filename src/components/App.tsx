import React from 'react';
import {GlobalStyle} from "../styles/global";
import {theme} from "../styles/theme";
import styled, {ThemeProvider} from "styled-components";
import {Header} from "../layout/Header";
import {Container} from "./Container";
import {MainSection} from "../sections/MainSection";
import {SkillsSection} from "../sections/SkillsSection";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Container>
                    <Header/>
                    <MainSection/>
                    <SkillsSection/>
                </Container>
                <GlobalStyle/>
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div`
  overflow: hidden;
  color: ${({theme}) => theme.colors.textPrimary};
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;


