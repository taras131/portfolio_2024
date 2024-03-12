import React, {FC, memo} from 'react';
import styled from "styled-components";

interface IProps {
    functionName: string,
    children: React.ReactNode,
}

export const CodeFragmentFunction: FC<IProps> = memo(({functionName, children}) => {
    return (
        <>
            <OrangeSpan tab={0}>export const </OrangeSpan>
            <YellowSpan tab={0}>{functionName}</YellowSpan>
            <span>:FC = () =&gt; &#123;</span>
            <br/>
            <OrangeSpan tab={1}>return </OrangeSpan>
            <span>(</span>
                {children}
            <span style={{marginLeft: "20px"}}>);</span>
            <br/>
            <span>&#125;;</span>
        </>
    );
});

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
