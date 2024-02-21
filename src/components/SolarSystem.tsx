import React from 'react';
import styled, {keyframes} from "styled-components";
import {SolarSystemPlanet} from "./SolarSystemPlanet";
import earth from "../assets/img/earth.png"
import mars from "../assets/img/mars.png"
import venus from "../assets/img/venus.png"
import mercury from "../assets/img/mercury.png"
import jupiter from "../assets/img/jupiter.png"
import uran from "../assets/img/uran.png"
import moon from "../assets/img/moon.png"

export const SolarSystem = () => {
    return (
        <Wrapper>
            <SolarSystemPlanet size={24} orbitRadius={70} orbitTime={18} img={mercury} rotateTime={20}/>
            <SolarSystemPlanet size={60} orbitRadius={250} orbitTime={44} img={venus} rotateTime={35}/>
            <SolarSystemPlanet size={64} orbitRadius={450} orbitTime={72} img={earth} rotateTime={40}>
                <Satellite/>
            </SolarSystemPlanet>
            <SolarSystemPlanet size={34} orbitRadius={700} orbitTime={136} img={mars} rotateTime={50}/>
            <SolarSystemPlanet size={300} orbitRadius={1100} orbitTime={180} img={jupiter} rotateTime={80}/>
            <SolarSystemPlanet size={200} orbitRadius={1800} orbitTime={220} img={uran} rotateTime={50}/>
            <SolarSystemPlanet size={120} orbitRadius={2400} orbitTime={280}/>
            <SolarSystemPlanet size={40} orbitRadius={3100} orbitTime={320}/>
            <Comet/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    transition: top 0.3s ease;
    top: 50%;
    left: 50%;
    z-index: 1;
filter: blur(1px);

    & > div:nth-child(1) {
        background-color: #A67B5B;
        box-shadow: 0 0 20px #c08d67, 0 0 35px #A67B5B, 0 0 50px #9b7960;
    }

    & > div:nth-child(2) {
        background: #f9c688;
        box-shadow: 0 0 20px #e8e7b1, 0 0 35px #eebb93, 0 0 50px #f5cd8a;
    }

    & > div:nth-child(3) {
        background: #3b5998;
        box-shadow: 0 0 20px #416c7e, 0 0 35px #274577, 0 0 50px #125772;
    }

    & > div:nth-child(4) {
        background-color: #d08a5c;
        box-shadow: 0 0 20px #966f60, 0 0 35px #af7560, 0 0 50px #7c4734;
    }

    & > div:nth-child(5) {
        background-color: #f0d7aa;
        box-shadow: 0 0 20px 10px #efe1a5, 0 0 40px 20px #ffeb99, 0 0 60px 30px #e3d28b;
    }

    & > div:nth-child(6) {
        background-color: #d8d0c9;
        position: relative;
        box-shadow: 0 0 20px 10px #d8d0c9, 0 0 40px 20px #eada98, 0 0 60px 30px #e3d28b;

    }

    & > div:nth-child(7) {
        background-color: #7FC8A9;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 20px 10px #7FC8A9, 0 0 40px 20px #76cba7, 0 0 60px 30px #5ac597;

    }

    & > div:nth-child(8) {
        background-color: #68b3ff;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 20px 10px #68b3ff, 0 0 40px 20px #57a3f1, 0 0 60px 30px #4297ee;

    }

    & > div:nth-child(8)::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150px;
        height: 150px;
        border: 2px solid #68b3ff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 20px 10px rgba(104, 179, 255, 0.8), 0 0 40px 20px rgba(104, 179, 255, 0.6); /* Тени для создания сияния кольца */
        z-index: 1;
    }
`;


const moveComet = keyframes`
    0% {
        top: -500px;
        left: 2500px;
    }
    25% {
        top: -250px;
        left: 1250px;
    }
    50% {
        top: 0;
        right: 0;
    }
    75% {
        top: 250px;
        left: 1250px;
    }
    100% {
        top: 500px;
        left: 2500px;
    }
`

const Comet = styled.div`
    width: 7px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 204, 0, 0.5), rgba(255, 255, 255, 0)); /* Градиент цветов, эмулирующий хвост кометы */
    position: absolute;
    top: -500px;
    left: 500px;
    animation: ${moveComet} 30s infinite linear; /* Анимация движения кометы по орбите */

`;

const satelliteOrbit = keyframes`
    from {
        transform: rotate(0deg) translateX(80px) rotate(0deg); /* Начальное положение спутника относительно планеты */
    }
    to {
        transform: rotate(360deg) translateX(80px) rotate(-360deg); /* Конечное положение спутника относительно планеты */
    }
`
const rotate = keyframes  `
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Satellite = styled.div`
    position: absolute;
    width: 15px; /* Размер спутника */
    height: 15px;
    background-image: url(${moon});
    background-size: cover;
    background-position: center;
    border-radius: 50%; /* Делает спутник круглой формы */
    animation: ${satelliteOrbit} 15s linear infinite; /* Анимиця вращения спутника */
    transform-origin: 50% -100px;
    filter: brightness(70%);
`;
