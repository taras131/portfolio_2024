import React, {FC} from 'react';
import styled from "styled-components";

interface IProps {
    name: "div" | "span" | "h1" | "p" | "Wrapper" | "Info" | "CodeFragment"
    type?: "open" | "close" | "single"
    tabCount?: number
    isNewLine?: boolean
}

export const Tag: FC<IProps> = ({
                                    name,
                                    type = "open",
                                    tabCount = 0,
                                    isNewLine = false
                                }) => {
    return (
        <Wrapper tabCount={tabCount} isNewLine={isNewLine}>
            &lt;
            {type === "close" && "/"}
            {name}
            {type === "single" && "/"}
            &gt;
        </Wrapper>
    );
};

interface IWrapperProps {
    tabCount: number
    isNewLine: boolean
}

const Wrapper = styled.span<IWrapperProps>`
  display: ${props => props.isNewLine ? "block" : "inline"};
  color: #E8BF6A;
  margin-left: ${props => props.tabCount * 20 + "px"};
`;