import React, {FC, memo} from 'react';
import styled, {css, keyframes} from "styled-components";

interface IProps {
    title: string,
    index: number
}

export const SkillItem: FC<IProps> = memo(({title, index}) => {
    return (
        <Wrapper index={index}>
            <span>{title}</span>
        </Wrapper>
    );
});

const animation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  75% {
    transform: translateY(-25%);
    opacity: .75;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

interface IWrapperProps {
    index: number
}

const Wrapper = styled.li<IWrapperProps>`
  z-index: 100;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  animation: ${animation} .6s ease;
  animation-delay: ${props => props.index * .2 + "s"};
  animation-fill-mode: forwards;
  opacity: 0;
  border-radius: 8px;
  background-color: rgba(26, 28, 40, .6);
  padding: 0 10px;

  span {
    font-size: 16px;
    color: white;
    transition: .4s;

  }
`;

