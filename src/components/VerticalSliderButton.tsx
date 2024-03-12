import React, {FC} from 'react';
import styled, {css} from "styled-components";

interface IProps {
    handleClick: () => void
    type: "prev" | "next"
}

export const VerticalSliderButton: FC<IProps> = ({type, handleClick}) => {
    return (
        <Wrapper onClick={handleClick} type={type}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12 6l8 8H4z"/>
            </svg>
        </Wrapper>
    );
};

interface IWrapperProps {
    type: "prev" | "next"
}

const Wrapper = styled.button<IWrapperProps>`
    height: 40px;
    z-index: 200;
    cursor: pointer;
    transition: .4s;
    border: none;
    width: 100%;
    

    & > svg {
        transform:  translateY(10px);
        transition: .4s;
    }
    &:hover > svg {
        transform:  translateY(6px);
    }

    ${props => props.type === "next" && css`
        & > svg {
            transform: rotate(180deg) translateY(2px);
        }

        &:hover > svg {
            transform: rotate(180deg) translateY(-2px);
        }
    `}
`;