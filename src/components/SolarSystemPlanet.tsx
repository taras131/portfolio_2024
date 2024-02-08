import React, {FC} from 'react';
import styled, {css, keyframes} from "styled-components";

interface IProps {
    size: number;
    orbitRadius: number
    orbitTime: number
    children?: React.ReactNode
}

export const SolarSystemPlanet: FC<IProps> = ({
                                                  size,
                                                  orbitRadius,
                                                  orbitTime,
                                                  children
                                              }) => {
    return (
        <Wrapper size={size}
                 orbitRadius={orbitRadius}
                 orbitTime={orbitTime}>
            {children && children}
        </Wrapper>
    );
};

const orbit = (orbitRadius: number) => keyframes`
    from {
        transform: rotate(0deg) translateX(${orbitRadius}px) rotate(0deg); /* Начальное положение планеты */
    }
    to {
        transform: rotate(360deg) translateX(${orbitRadius}px) rotate(-360deg); /* Конечное положение планеты */
    }
`

interface IWrapperProps {
    size: number;
    orbitRadius: number
    orbitTime: number
}

const Wrapper = styled.div<IWrapperProps>`
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  
    
    ${props => props.orbitRadius && css`
        animation: ${orbit(props.orbitRadius)} ${props.orbitTime + "s"} infinite linear;
    `};
`;

