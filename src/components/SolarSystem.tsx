import React from 'react';
import styled, {keyframes} from "styled-components";
import {SolarSystemPlanet} from "./SolarSystemPlanet";

export const SolarSystem = () => {
    return (
        <Wrapper>
            <SolarSystemPlanet size={24} orbitRadius={70} orbitTime={18}/>
            <SolarSystemPlanet size={60} orbitRadius={200} orbitTime={44}/>
            <SolarSystemPlanet size={64} orbitRadius={400} orbitTime={72}>
                <Satellite/>
            </SolarSystemPlanet>
            <SolarSystemPlanet size={34} orbitRadius={640} orbitTime={136}/>
            <SolarSystemPlanet size={300} orbitRadius={1100} orbitTime={180}/>
            <SolarSystemPlanet size={200} orbitRadius={1800} orbitTime={220}/>
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
        box-shadow: 0 0 20px #fffb7d, 0 0 35px #ffbd88, 0 0 50px #ffdb9e;
    }

    & > div:nth-child(3) {
        background: #3b5998;
        box-shadow: 0 0 20px #00b3ff, 0 0 35px #4286f4, 0 0 50px #39b3e3;
    }

    & > div:nth-child(4) {
        background-color: #d08a5c;
        box-shadow: 0 0 20px #945b45, 0 0 35px #ff5a1d, 0 0 50px #7c4734;
    }

    & > div:nth-child(5) {
        background-color: #f0d7aa;
        box-shadow: 0 0 20px 10px #efe1a5, 0 0 40px 20px #ffeb99, 0 0 60px 30px #e3d28b;
    }
    & > div:nth-child(5)::after {
        display: block;
        content: "";
        width: 50px;
        height: 50px;
        background-color: #c26363;
        border-radius: 50%;
        position: absolute;
        top: 60px;
        left: 80px;
        box-shadow: 0 0 20px 10px #ff3333; /* Тень для усиления эффекта */
        filter: blur(30px);
    }
    & > div:nth-child(6) {
        background-color: #d8d0c9; 
        position: relative;
        box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.3); 
    }
    & > div:nth-child(7) {
        background-color: #7FC8A9; 
        border-radius: 50%; 
        position: relative;
        overflow: hidden; 
        box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.5);  
    }
    & > div:nth-child(8) {
        background-color: #68b3ff; 
        border-radius: 50%; 
        position: relative;
        overflow: hidden; 
        box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.5); 
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
  width: 7px; /* Ширина кометы */
  height: 10px; /* Высота кометы */
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
const Satellite = styled.div`
  position: absolute;
  width: 15px; /* Размер спутника */
  height: 15px;
  background-color: #888; /* Цвет спутника */
  border-radius: 50%; /* Делает спутник круглой формы */
  animation: ${satelliteOrbit} 10s linear infinite; /* Анимиця вращения спутника */
  transform-origin: 50% -100px;
`;
