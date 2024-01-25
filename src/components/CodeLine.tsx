import React, {FC} from 'react';
import {Tag} from "./Tag";
import styled from "styled-components";

interface ICodeLine {
    tag: "div" | "span" | "h1" | "p" | "Wrapper" | "Info" | "CodeFragment"
    children: React.ReactNode
    tab: number
}

export const CodeLine: FC<ICodeLine>  = ({tag, children, tab}) => {
    return (
        <Line tab={tab}>
            <Tag name={tag}/>
            <LineBody> {children} </LineBody>
            <Tag name={tag} type={"close"}/>
        </Line>
    );
};

interface ILine {
    tab: number
}

const Line = styled.div<ILine>`
  margin-left: ${props => props.tab * 20 + "px"};
`;

const LineBody = styled.span`
  position: relative;

  span {
    position: absolute;
    color: ${({theme}) => theme.colors.textPrimary};
  }
`;