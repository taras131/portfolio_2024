import React from 'react';
import styled from "styled-components";
import {Button} from "../components/Button";
import {Navigation} from "../components/Navigation";

export const Header = () => {

    return (
        <AppHeader>
            <Button variant={"text"}>
                Tell Me
            </Button>
            <Navigation/>
        </AppHeader>
    );
};

const AppHeader = styled.header`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
`;