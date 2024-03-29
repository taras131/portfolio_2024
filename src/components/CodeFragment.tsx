import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import {LaptopImitation} from "./LaptopImitation";
import {CodeFragmentHeader} from "./CodeFragmentHeader";
import {CodeFragmentLinesNumbers} from "./CodeFragmentLinesNumbers";
import {fileNames} from "../utils/consts";
import CodeFragmentFileMainSection from "./CodeFragmentFileMainSection";
import {CodeFragmentFileCodeFragment} from "./CodeFragmentFileCodeFragment";
import {CodeFragmentFileSolarSystem} from "./CodeFragmentFileSolarSystem";
import {CodeFragmentFileCodeLine} from "./CodeFragmentFileCodeLine";

interface IProps {
    myName: string;
}

export const CodeFragment: FC<IProps> = memo(({myName}) => {
    const [activeFile, setActiveFile] = useState(fileNames[0]);
    const [visibleCode, setVisibleCode] = useState(<CodeFragmentFileMainSection myName={myName}/>);
    const changeActiveFile = useCallback((fileName: string) => () => {
        if (activeFile !== fileName) {
            setActiveFile(fileName)
        }
    },[activeFile])
    useEffect(() => {
        switch (activeFile) {
            case fileNames[1]:
                setVisibleCode(<CodeFragmentFileCodeFragment/>);
                break;
            case fileNames[2]:
                setVisibleCode(<CodeFragmentFileSolarSystem/>);
                break;
            case fileNames[3]:
                setVisibleCode(<CodeFragmentFileCodeLine/>);
                break;
            default:
                setVisibleCode(<CodeFragmentFileMainSection myName={myName}/>);
        }
    }, [activeFile, myName]);
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
});

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    color: #BABABA;
`;

const Code = styled.div`
    display: flex;
    align-items: stretch;
    width: 440px;
    height: 225px;

    pre {
        padding: 15px 35px;
        @media screen and (max-width: 550px) {
            padding: 5px;
        }
        @media screen and (max-width: 486px) {
            font-size: 10px;
        }
    }

    @media screen and (max-width: 550px) {
        width: 380px;
        height: 200px;
        overflow: hidden;
    }
    @media screen and (max-width: 486px) {
        width: 315px;
        height: 160px;
    }
`;







