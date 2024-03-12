import React, {memo, useEffect, useState} from 'react';
import styled, {keyframes} from "styled-components";

const generateRandomValue = (min: number, max: number) => {
    return Math.ceil(Math.random() * (max - min) + min);
};

export const StarsSky = memo(() => {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const stars_1 = [];
    const stars_2 = [];
    for (let i = 0; i < 150; i++) {
        const x = generateRandomValue(0, pageWidth);
        const y = generateRandomValue(0, 4700);
        const size = generateRandomValue(1, 3);
        stars_1.push(
            <Star1
                key={i}
                style={{
                    top: y,
                    left: x,
                    width: size,
                    height: size,
                    filter: i % 2 ? "blur(1px)" : "",
                }}
            />);
    }
    for (let i = 0; i < 100; i++) {
        const x = generateRandomValue(0, pageWidth);
        const y = generateRandomValue(0, 4700);
        const size = generateRandomValue(1, 3);
        stars_2.push(
            <Star2
                key={i}
                style={{
                    top: y,
                    left: x,
                    width: size,
                    height: size,
                    filter: i % 2 ? "blur(1px)" : "",
                    animationDuration: `${generateRandomValue(1,6)}s`
                }}/>
        );
    }

    return (
        <Sky>
            {stars_1}
            {stars_2}
        </Sky>
    );
});

const Sky = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
`

const starFlash = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
`

const Star = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: white;
`

const Star1 = styled(Star)`
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5),
  110px 230px 1px 1px aqua,
    -270px -190px 2px 0 aqua,
  -70px 90px 1px 0 #0094ff,
  -210px 130px 1px 0 #b5ffff;
`
const Star2 = styled(Star)`
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  animation: ${starFlash} infinite;
`


