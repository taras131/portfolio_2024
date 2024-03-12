import React, {FC} from 'react';
import {skills} from "../utils/consts";
import {SkillItem} from "./SkillItem";
import styled from "styled-components";



export const SkillsList: FC = () => {
    const skillSList = skills.map((skill, index) => (<SkillItem key={skill}
                                                                title={skill}
                                                                index={index+1}/>))
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
  flex-wrap: wrap;
  gap: 15px;
 overflow-y: hidden;
`
