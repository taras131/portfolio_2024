import React, {useCallback, useEffect, useState} from 'react';
import {SkillItem} from "../components/SkillItem";
import styled from "styled-components";
import {WorkItem} from "../components/WorkItem";
import {works} from "../utils/consts";

const skills = ["React", "Typescript", "Javascript", "HTML", "SCSS", "Styled Component", "Material UI", "Node JS"]


export const PortfolioSection = () => {
    const [activeWorkId, setActiveWorkId] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [offset, setOffset] = useState(screenWidth / 2 - 410)
    const [slideWidth, setSlideWidth] = useState(600)
    const skillsList = skills.map(skill => (<SkillItem key={skill} title={skill}/>))
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log('Ширина экрана:', screenWidth);
    useEffect(() => {
        setOffset(screenWidth / 2 - 320 - 600 * activeWorkId)
    }, [activeWorkId, screenWidth, slideWidth]);
    useEffect(() => {
        if(screenWidth < 800) {
            setSlideWidth(500)
        }
    }, [screenWidth]);
    const changeActiveWork = useCallback((id: number) => () => {
        setActiveWorkId(id);
    }, [setActiveWorkId]);
    const portfolioList = works.map(work => (<WorkItem key={work.id}
                                                       work={work}
                                                       isActive={activeWorkId === work.id}
                                                       activeWorkId={activeWorkId}
                                                       handleWorkClick={changeActiveWork(work.id)}
                                                       slideWidth={slideWidth}/>))
    return (
        <Wrapper>
            <h2>Portfolio:</h2>
            <SkillList>
                {skillsList}
            </SkillList>
            <PortfolioSlider>
                <SlidesBox offsetLeft={offset}>
                    {portfolioList}
                </SlidesBox>
            </PortfolioSlider>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: 30px;
    padding: 0 5px 60px 5px;

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

const PortfolioSlider = styled.div`
    margin-top: 40px;
    overflow: hidden;

`;

interface ISlidesBoxProps {
    offsetLeft: number
}

const SlidesBox = styled.div<ISlidesBoxProps>`
    display: flex;
    height: 600px;
    width: 100%;
    align-items: center;
    transition: .5s;
    transform: translateX(${props => props.offsetLeft + "px"});
`;



