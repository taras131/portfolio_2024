import React, {FC} from 'react';
import styled from "styled-components";

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

const Wrapper = styled.li`
  width: 150px;
  height: 100px;
  color: ${({theme}) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  text-align: center;
`;

