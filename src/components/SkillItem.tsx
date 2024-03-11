import React, {FC, memo} from 'react';
import styled, {css, keyframes} from "styled-components";

interface IProps {
    title: string,
    isActive?: boolean
}

export const SkillItem: FC<IProps> = memo(({title, isActive = false}) => {
    return (
        <Wrapper isActive={isActive}>
            <h3>{title}</h3>
        </Wrapper>
    );
});

const flicker = keyframes`
  0% {
    text-shadow: 0 0 5px #00BFFF, 0 0 10px #3d5881, 0 0 10px #384c69; /* Начальное состояние свечения */
  }
  50% {
    text-shadow: 0 0 2px #00BFFF, 0 0 5px #3d5881, 0 0 7px #384c69;
  }
  100% {
    text-shadow: 0 0 5px #00BFFF, 0 0 10px #3d5881, 0 0 10px #384c69; /* Конечное состояние свечения */
  }
`

interface IWrapperProps {
    isActive: boolean
}

const Wrapper = styled.li<IWrapperProps>`
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h3 {
    font-size: calc((100vw - 410px) / (1280 - 410) * (20 - 16) + 16px);
    color: #384c69;
    text-shadow: 0 0 3px #384c69;
    transition: .4s;
    ${props => props.isActive && css`
      color: white;
      text-shadow: 0 0 5px #FFFFFF, 0 0 10px #00BFFF, 0 0 15px #384c69;
      animation: ${flicker} 3s infinite;
    `}
  }
`;

