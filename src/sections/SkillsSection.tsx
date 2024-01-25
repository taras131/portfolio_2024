import React from 'react';
import {SkillItem} from "../components/SkillItem";
import styled from "styled-components";

const skills = ["React", "Typescript", "Javascript", "HTML", "SCSS", "Styled Component", "Material UI", "Node JS"]

export const SkillsSection = () => {
    const skillsList = skills.map(skill => (<SkillItem key={skill} title={skill}/>))
    return (
        <Wrapper>
            <h2>My Skills:</h2>
            <SkillList>
                {skillsList}
            </SkillList>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin-top: 30px;
  padding: 40px;
  h2 {
    font-size: 36px;
  }
`;

const SkillList = styled.ul`
 margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

