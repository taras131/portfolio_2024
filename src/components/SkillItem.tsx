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


const Wrapper = styled.li`
    padding: 10px;
    color: #4286f4;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background-color: #020b13;
    transition: .4s;

    &:hover {
        outline: 1px solid #4286f4;
        color: ${({theme}) => theme.colors.textSecondary};
        box-shadow: 0 0 20px #00b3ff, 0 0 35px #4286f4, 0 0 50px #39b3e3;
    }
`;

