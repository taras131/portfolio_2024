import React, {FC, memo} from 'react';
import styled from "styled-components";
import {Navigation} from "../components/Navigation";
import contacts from "../assets/icons/contacts.png"

interface IProps {
    activeId: number
    handleNavItemClick: (id: number) => () => void
    openContactsModal: () => void
}

export const Header: FC<IProps> = memo(({activeId, handleNavItemClick, openContactsModal}) => {
    return (
        <AppHeader>
            <Container>
                <Navigation activeId={activeId} handleNavItemClick={handleNavItemClick}/>
                <ContactsButton onClick={openContactsModal}>
                    <img src={contacts} alt="open Contacts Modal"/>
                </ContactsButton>
            </Container>
        </AppHeader>
    );
});

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

const ContactsButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;

  & > img {
    width: 28px;
    height: 28px;
    transition: .4s;
    transform: rotate(136deg);
  }
  
  &:hover{
    img {
      transform: rotate(0);
    }
  }
`;