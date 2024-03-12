import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <Wrapper>
            <span>© TZ-Studio, 2024</span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: rgba(26, 28, 40, .6);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;