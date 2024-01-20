import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {LaptopImitation} from "./LaptopImitation";

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
            <pre>
                <OrangeSpan tab={0}>export const </OrangeSpan>
                <YellowSpan tab={0}>MainSection</YellowSpan>
                <span>:FC = () =&gt; &#123;</span>
                <br/>
                <OrangeSpan tab={1}>return </OrangeSpan>
                <span>(</span>
                <CodeLine teg={"Wrapper"} open tab={2}/>
                <CodeLine teg={"Info"} open tab={3}/>
                <CodeLine teg={"span"} tab={4}>{myName}{cursorVisible && (<span>|</span>)}</CodeLine>
                <CodeLine teg={"h1"} tab={4}>Frontend developer</CodeLine>
                <CodeLine teg={"p"} tab={4}>
                    {lorem}
                </CodeLine>
                <CodeLine teg={"Info"} close tab={3}/>
                <CodeLine teg={"CodeFragment"} tab={3}/>
                <CodeLine teg={"Wrapper"} close tab={2}/>
                <span style={{marginLeft: "20px"}}>);</span>
                <br/>
                <span>&#125;;</span>
            </pre>
            </Wrapper>
        </LaptopImitation>

    );
};

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  padding: 15px;
  z-index: 100;
  max-width: 400px;
  width: 100%;
  overflow: hidden;
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

interface ICodeLine {
    teg: string
    children?: React.ReactNode
    open?: boolean
    close?: boolean
    tab: number
}

const CodeLine: FC<ICodeLine> = ({teg, children, open, close, tab}) => {
    if (open) {
        return (<Line tab={tab}><Tag>&lt;{teg}&gt;</Tag> </Line>)
    }
    if (close) {
        return (<Line tab={tab}><Tag>&lt;/{teg}&gt;</Tag> </Line>)
    }
    return (
        <Line tab={tab}>
            {children
                ? (<><Tag>&lt;{teg}&gt;</Tag> <LineBody>{children}</LineBody> <Tag>&lt;/{teg}&gt;</Tag> <br/></>)
                : (<Tag>&lt;{teg}/&gt;</Tag>)}

        </Line>
    )
}

interface ILine {
    tab: number
}

const Line = styled.div<ILine>`
  margin-left: ${props => props.tab * 20 + "px"};
`;
const Tag = styled.span`
  color: #E8BF6A;
`;
const LineBody = styled.span`
  position: relative;
  color: #BABABA;

  span {
    
    position: absolute;
    color: ${({theme}) => theme.colors.textPrimary};
  }
`;
