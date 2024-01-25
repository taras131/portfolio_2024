import React from 'react';
import styled, {keyframes} from "styled-components";

export const SolarSystem = () => {
    return (
        <Wrapper>
            <Planet_0/>
            <Planet_1><Satellite/></Planet_1>
            <Planet_2/>
            <Comet/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  opacity: 0.6;
  border: 1px solid red;
  
`;

const orbit_0 = keyframes`
  from {
    transform: rotate(0deg) translateX(70px) rotate(0deg); /* Начальное положение планеты */
  }
  to {
    transform: rotate(360deg) translateX(70px) rotate(-360deg); /* Конечное положение планеты */
  }
`

const Planet_0 = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  animation: ${orbit_0} 9s infinite linear;
  background: #f9c688;
  box-shadow: 0 0 40px #fffb7d, 0 0 70px #ffbd88, 0 0 100px #ffdb9e;
`;

const orbit_1 = keyframes`
  from {
    transform: rotate(0deg) translateX(150px) rotate(0deg); /* Начальное положение планеты */
  }
  to {
    transform: rotate(360deg) translateX(150px) rotate(-360deg); /* Конечное положение планеты */
  }
`

const Planet_1 = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  animation: ${orbit_1} 12s infinite linear;
  background: #3b5998;
  box-shadow: 0 0 40px #00b3ff, 0 0 70px #4286f4, 0 0 100px #39b3e3;
`;

const orbit_2 = keyframes`
  from {
    transform: rotate(0deg) translateX(210px) rotate(0deg); /* Начальное положение планеты */
  }
  to {
    transform: rotate(360deg) translateX(210px) rotate(-360deg); /* Конечное положение планеты */
  }
`

const Planet_2 = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #d08a5c;
  box-shadow: 0 0 50px #ff5a1d;
  position: absolute;
  z-index: 1;
  animation: ${orbit_2} 16s infinite linear;
`;

const moveComet = keyframes`
  0% {
    top: 500px;
    left: -500px;
  }
  25% {
    top: 250px;
    left: -250px; /* Положение кометы при пересечении солнечной системы */
  }
  50% {
    top: 0;
    left: 0;
  }
  75% {
    top: -250px;
    left: 250px; /* Возвращение кометы к начальной точке */
  }
  100% {
    top: -500px;
    left: 500px;
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
  animation: ${moveComet} 6s linear  20s; /* Анимация движения кометы по орбите */

`;

const satelliteOrbit = keyframes`
  from {
    transform: rotate(0deg) translateX(40px) rotate(0deg); /* Начальное положение спутника относительно планеты */
  }
  to {
    transform: rotate(360deg) translateX(40px) rotate(-360deg); /* Конечное положение спутника относительно планеты */
  }
`
const Satellite = styled.div`
  position: absolute;
  width: 5px; /* Размер спутника */
  height: 5px;
  background-color: #888; /* Цвет спутника */
  border-radius: 50%; /* Делает спутник круглой формы */
  animation: ${satelliteOrbit} 6s linear infinite; /* Анимиця вращения спутника */
  transform-origin: 50% -100px;
`;
