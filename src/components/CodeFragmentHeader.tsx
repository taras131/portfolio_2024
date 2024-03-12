import React, {FC, memo} from 'react';
import styled, {css} from "styled-components";
import {fileNames} from "../utils/consts";

interface IProps {
    activeFile: string,
    changeActiveFile: (fileName: string) => () => void
}

export const CodeFragmentHeader: FC<IProps> = memo(({activeFile, changeActiveFile}) => {
    const fileList = fileNames.map(fileName => {
        return (
            <FileBox isactive={fileName === activeFile}
                     key={fileName}
                     onClick={changeActiveFile(fileName)}>
                {fileName}
                <span>+</span>
            </FileBox>
        )
    })
    return (
        <Wrapper>
            {fileList}
        </Wrapper>
    );
});


const Wrapper = styled.div`
    height: 20px;
    background-color: #3F3D3DFF;
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: start;
`;

interface IFileBoxProps {
    isactive?: boolean
}

const FileBox = styled.div<IFileBoxProps>`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: ${props => props.isactive ? "#4d4a4a" : "#3F3D3DFF"};
    border-right: 1px solid #3F3D3DFF;
    cursor: default;
 
    ${props => !props.isactive && css `
        &:hover {
            background-color: #313030;
        }
    `}
    
    span {
        transform: rotate(-45deg);
    }
`;