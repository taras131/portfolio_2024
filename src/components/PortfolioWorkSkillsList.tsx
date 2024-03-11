import React, {FC} from 'react';
import {skills} from "../utils/consts";
import {SkillItem} from "./SkillItem";
import styled from "styled-components";

interface IProps {
    activeWorkSkills: string []
}

export const PortfolioWorkSkillsList:FC<IProps> = ({activeWorkSkills}) => {
    const skillSList = skills.map(skill => (<SkillItem key={skill} title={skill}
                                                       isActive={activeWorkSkills.includes(skill)}/>))
    return (
        <Wrapper>
            {skillSList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`
