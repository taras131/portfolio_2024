import React from 'react';
import {GlobalStyle} from "../styles/global";
import {theme} from "../styles/theme";
import styled, {ThemeProvider} from "styled-components";
import {Header} from "../layout/Header";
import {Container} from "./Container";
import {MainSection} from "../sections/MainSection";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Container>
                    <Header/>
                    <MainSection/>
                </Container>
                <GlobalStyle/>
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div`
  color: ${({theme}) => theme.colors.textPrimary};
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;


