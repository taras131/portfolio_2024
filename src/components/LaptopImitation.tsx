import styled, {keyframes} from "styled-components";
import React, {FC, memo} from 'react';

interface IProps {
    children: React.ReactNode
}

export const LaptopImitation: FC<IProps> = memo(({children}) => {
    return (
        <Wrapper>
            {children}
            <Camera/>
            <Body/>
            <CardRider/>
            <Indications>
                <li></li>
                <li></li>
                <li></li>
            </Indications>
        </Wrapper>
    );
});

const Wrapper = styled.div`
  border-radius: 8px;
  border: 20px solid #252323FF;
  position: relative;
  z-index: 100;
  @media screen and (min-width: 1300px) {
    transform: scale(1.3) translateX(-15%);
    
  }
`;

const Camera = styled.div`
  height: 10px;
  width: 10px;
  position: absolute;
  top: -15px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
`;

const Body = styled.div`
  right: 0;
  left: -40px;
  width: calc(100% + 80px);
  height: 30px;
  background-color: #252323FF;
  position: absolute;
  bottom: -55px;
  border-radius: 0 0 8px 8px;
`;

const CardRider = styled.div`
  position: absolute;
  width: 20px;
  height: 4px;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
  bottom: -40px;
`

const blink = keyframes`
  0% {
    background-color: ${({theme}) => theme.colors.backgroundSecondary}
  }
  50% {
    background: radial-gradient(circle at 50% 40%, white 20%, red 50%);
    box-shadow: 0 0 10px 2px rgba(255, 255, 0, .7);
  }
  100% {
    background-color: ${({theme}) => theme.colors.backgroundSecondary}
  }
`

const Indications = styled.ul`
  position: absolute;
  right: 0;
  bottom: -40px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 100;

  li {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
  }

  li:first-child {
    background: radial-gradient(circle at 50% 40%, white 20%, green 50%);
    box-shadow: 0 0 10px 2px rgba(255, 255, 0, .7);
  }

  li:nth-child(2) {
    animation: ${blink} 1s infinite;

`;