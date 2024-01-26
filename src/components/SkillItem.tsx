import React, {FC} from 'react';
import styled, {keyframes} from "styled-components";

interface IProps {
    title: string,
    isActive?: boolean
}

export const SkillItem: FC<IProps> = ({title, isActive = false}) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
        </Wrapper>
    );
};

const growCornersAnimation = keyframes`
  from {
    width: 30px;
    height: 30px;
  }
  to {
    width: 50px;
    height: 50px;
  }
`;

const Wrapper = styled.li`
  width: 150px;
  height: 100px;
  color: ${({theme}) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  text-align: center;
  position: relative;
  z-index: 10;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
    transition: width 0.3s, height 0.3s;
    z-index: -1; /* Установка z-index для псевдоэлементов */
  }

  &::before {
    top: -2px;
    left: -2px;
  }

  &::after {
    bottom: -2px;
    right: -2px;
  }

  &:hover::before,
  &:hover::after {
    animation: ${growCornersAnimation} 0.3s forwards;
  }
`;

