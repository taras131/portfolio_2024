import React from 'react';
import styled from "styled-components";

export const CodeFragmentHeader = () => {
    return (
        <Wrapper>
            <FileBox isActive>
                MainSection.tsx
                <span>+</span>
            </FileBox>
            <FileBox>
                CodeFragment.tsx
                <span>+</span>
            </FileBox>
            <FileBox>
                SolarSystem.tsx
                <span>+</span>
            </FileBox>
            <FileBox>
                CodeLine.tsx
                <span>+</span>
            </FileBox>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  height: 20px;
  background-color: #3F3D3DFF;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: start;

  *:hover {
    background-color: #333232FF;
  }
`;

interface IFileBoxProps {
    isActive?: boolean
}

const FileBox = styled.div<IFileBoxProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${props => props.isActive ? "#4d4a4a" : "#3F3D3DFF"};
  border-right: 1px solid #3F3D3DFF;
  cursor: default;


  span {
    transform: rotate(-45deg);
  }
`;