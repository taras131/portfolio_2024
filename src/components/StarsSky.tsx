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
    const stars = [];
    for (let i = 0; i < 333; i++) {
        const x = generateRandomValue(0, pageWidth);
        const y = generateRandomValue(0, 4000);
        const size = generateRandomValue(1, 3);
        stars.push(
            <Star
                key={i}
                style={{
                    top: y,
                    left: x,
                    width: size,
                    height: size,
                    filter: i % 2 ? "blur(1px)" : "",
                }}
            >

            </Star>
        );
    }

    return (
        <Sky>
            {stars}
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
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }
`

const Star = styled.div`
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: absolute;
  background-color: white;


  &::before, &::after {
    content: " ";
    border-radius: 50%;
    background-color: white;
    position: absolute;
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  &::before {
    width: 2px;
    height: 2px;
    top: -80px;
    left: -70px;
  }

  &::after {
    width: 2px;
    height: 2px;
    filter: blur(2px);
    top: 90px;
    left: 70px;
  }
`


