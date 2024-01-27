import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {LaptopImitation} from "./LaptopImitation";
import {Tag} from "./Tag";
import {CodeLine} from "./CodeLine";
import {CodeFragmentHeader} from "./CodeFragmentHeader";
import {CodeFragmentLinesNumbers} from "./CodeFragmentLinesNumbers";
import {fileNames} from "../utils/consts";
import {CodeFragmentFunction} from "./CodeFragmentFunction";
import CodeFragmentFileMainSection from "./CodeFragmentFileMainSection";
import {CodeFragmentFileCodeFragment} from "./CodeFragmentFileCodeFragment";
import {CodeFragmentFileSolarSystem} from "./CodeFragmentFileSolarSystem";
import {CodeFragmentFileCodeLine} from "./CodeFragmentFileCodeLine";

interface IProps {
    myName: string;
}

export const CodeFragment: FC<IProps> = ({myName}) => {
    const [activeFile, setActiveFile] = useState(fileNames[0]);
    const [visibleCode, setVisibleCode] = useState(<CodeFragmentFileMainSection myName={myName}/>);
    const changeActiveFile = (fileName: string) => () => {
        if (activeFile !== fileName) {
            setActiveFile(fileName)
        }
    }
    useEffect(() => {
        switch (activeFile) {
            case fileNames[1]:
                setVisibleCode(<CodeFragmentFileCodeFragment/>);
                break;
            case fileNames[2]:
                setVisibleCode(<CodeFragmentFileSolarSystem/>);
                break;
            case fileNames[3]:
                setVisibleCode(<CodeFragmentFileCodeLine />);
                break;
            default:
                setVisibleCode(<CodeFragmentFileMainSection myName={myName}/>);
        }
    }, [activeFile]);
    return (
        <LaptopImitation>
            <Wrapper>
                <CodeFragmentHeader activeFile={activeFile} changeActiveFile={changeActiveFile}/>
                <Code>
                    <CodeFragmentLinesNumbers/>
                    <pre>
                      {visibleCode}
                    </pre>
                </Code>
            </Wrapper>
        </LaptopImitation>

    );
};

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    color: #BABABA;
`;

const Code = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
    min-width: 440px;
    width: 100%;
    min-height: 225px;
 

    pre {
        padding: 15px 35px;
        @media screen and (max-width: 536px) {
            padding: 5px;
        }
    }
`;







