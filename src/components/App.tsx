import React, {useCallback, useEffect, useRef, useState} from 'react';
import {GlobalStyle} from "../styles/global";
import {theme} from "../styles/theme";
import styled, {ThemeProvider} from "styled-components";
import {Header} from "../layout/Header";
import {MainSection} from "../sections/MainSection";
import {PortfolioSection} from "../sections/PortfolioSection";
import {StarsSky} from "./StarsSky";
import {EducationSection} from "../sections/EducationSection";
import {WorkSection} from "../sections/WorkSection";
import {navigation} from "../utils/consts";
import {Contacts} from "./Contacts";
import {LanguageProvider} from "./LanguageContext";
import {SelectLanguage} from "./SelectLanguage";
import {DiplomasSections} from "../sections/DiplomasSections";

export const App = () => {
    const [activeId, setActiveId] = useState(navigation[0].id)
    const [showContactsModal, setShowContactsModal] = useState(false)
    const mainRef = useRef<HTMLHeadingElement>(null);
    const educationRef = useRef<HTMLHeadingElement>(null);
    const portfolioRef = useRef<HTMLHeadingElement>(null);
    const handleActiveChange = useCallback((id: number) => () => {
        switch (id) {
            case navigation[0].id:
                if (mainRef.current) mainRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[1].id:
                if (portfolioRef.current) portfolioRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case navigation[2].id:
                if (educationRef.current) educationRef.current.scrollIntoView({behavior: "smooth"});
                break;
            default:
                break;
        }
        setActiveId(id);
    }, [navigation, mainRef, portfolioRef, educationRef, setActiveId]);
    const updateActiveId = () => {
        if (mainRef && mainRef.current
            && portfolioRef && portfolioRef.current
            && educationRef && educationRef.current) {
            const mainBorderTopY: number = Math.abs(mainRef.current.getBoundingClientRect().top)
            const portfolioBorderTopY: number = Math.abs(portfolioRef.current.getBoundingClientRect().top)
            const educationBorderTopY: number = Math.abs(educationRef.current.getBoundingClientRect().top)
            const BordersTopYArr = [mainBorderTopY, educationBorderTopY, portfolioBorderTopY]
            const minValue = Math.min.apply(null, BordersTopYArr)
            switch (minValue) {
                case mainBorderTopY:
                    setActiveId(navigation[0].id)
                    break;
                case portfolioBorderTopY:
                    setActiveId(navigation[1].id)
                    break;
                case educationBorderTopY:
                    setActiveId(navigation[2].id)
                    break;
            }
        }
    }
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const handleScroll = () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(updateActiveId, 100)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const closeContactsModal = () => {
        setShowContactsModal(false)
        document.body.style.overflow = 'visible';
    }
    const openContactsModal = useCallback(() => {
        setShowContactsModal(true)
        document.body.style.overflow = 'hidden';
    }, [setShowContactsModal])
    return (
        <LanguageProvider>
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Header activeId={activeId}
                            handleNavItemClick={handleActiveChange}/>
                    <MainSection navRef={mainRef} openContactsModal={openContactsModal}/>
                    <PortfolioSection navRef={portfolioRef} isShow={activeId === 1}/>
                    <EducationSection navRef={educationRef} isShow={activeId === 2}/>
                    <WorkSection isShow={activeId === 2}/>
                    <DiplomasSections/>
                    <GlobalStyle/>
                    <StarsSky/>
                    <SelectLanguage/>
                </AppWrapper>
                {showContactsModal && (<Contacts closeContactsModal={closeContactsModal}/>)}
            </ThemeProvider>
        </LanguageProvider>
    );
}

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  color: ${({theme}) => theme.colors.textPrimary};
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  padding-bottom: 70px;
`;


