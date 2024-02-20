import React, {FC} from 'react';
import styled from "styled-components";
import {Button} from "../components/Button";
import {Navigation} from "../components/Navigation";


interface IProps {
    activeId: number
    handleNavItemClick: (id: number) => () => void
    openContactsModal: () => void
}
export const Header:FC<IProps> = ({activeId, handleNavItemClick, openContactsModal}) => {

    return (
        <AppHeader>
            <Container>
                <Button variant={"text"} onClick={openContactsModal}>
                    Tell Me
                </Button>
                <Navigation activeId={activeId} handleNavItemClick={handleNavItemClick}/>
            </Container>
        </AppHeader>
    );
};

const AppHeader = styled.header`
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    backdrop-filter: blur(12px); /* Применение размытия к элементу и его содержимому */
    background-color: rgba(26, 28, 40, .6);
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
`