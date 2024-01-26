import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {LaptopImitation} from "./LaptopImitation";
import {Tag} from "./Tag";
import {CodeLine} from "./CodeLine";
import {CodeFragmentHeader} from "./CodeFragmentHeader";
import {CodeFragmentLinesNumbers} from "./CodeFragmentLinesNumbers";

interface IProps {
    myName: string;
}

const lorem = " Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper  sed suspendisse nunc lectus.";

export const CodeFragment: FC<IProps> = ({myName}) => {
    const [cursorVisible, setCursorVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 600);

        return () => clearInterval(interval);
    }, []);
    return (
        <LaptopImitation>
            <Wrapper>
                <CodeFragmentHeader/>
                <Code>
                    <CodeFragmentLinesNumbers/>
                    <pre>
                            <OrangeSpan tab={0}>export const </OrangeSpan>
                            <YellowSpan tab={0}>MainSection</YellowSpan>
                            <span>:FC = () =&gt; &#123;</span>
                            <br/>
                            <OrangeSpan tab={1}>return </OrangeSpan>
                            <span>(</span>
                            <Tag name={"Wrapper"} tabCount={2} isNewLine/>
                                <Tag name={"Info"} tabCount={3} isNewLine/>
                                    <CodeLine tag={"span"} tab={4}>{myName}{cursorVisible && (
                                        <span>|</span>)}</CodeLine>
                                    <CodeLine tag={"h1"} tab={4}>Frontend developer</CodeLine>
                                    <CodeLine tag={"p"} tab={4}>&#123;mainSectionDescriptionText&#125;</CodeLine>
                                <Tag name={"Info"} type={"close"} tabCount={3} isNewLine/>
                                <Tag name={"CodeFragment"} type={"single"} tabCount={3} isNewLine/>
                            <Tag name={"Wrapper"} type={"close"} tabCount={2} isNewLine/>
                            <span style={{marginLeft: "20px"}}>);</span>
                            <br/>
                            <span>&#125;;</span>
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

  pre {
    padding: 15px 35px;
    @media screen and (max-width: 536px) {
      padding: 5px;
    }
  }
`;

interface ISpan {
    tab: number
}

const OrangeSpan = styled.span<ISpan>`
  margin-left: ${props => props.tab * 20 + "px"};
  color: #cc7832;
`;

const YellowSpan = styled.span<ISpan>`
  margin-left: ${props => props.tab * 20 + "px"};
  color: #FFC66A
`;



