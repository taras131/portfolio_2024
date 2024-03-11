import React from 'react';
import diploma_1 from "../assets/img/diplom_1.jpg";
import diploma_2 from "../assets/img/diplom_2.jpeg";
import styled from "styled-components";

export const DiplomasSections = () => {
    return (
        <Wrapper>
            <h2>Diplomas</h2>
            <div>
                <img src={diploma_1} alt="diploma 1"/>
                <img src={diploma_2} alt="diploma 2"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding-top: 70px;

  & > div {
    display: flex;
    align-items: start;
    gap: 20px;
    margin-top: 50px;

    img:first-child {
      width: 60%;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }

    img:last-child {
      width: 40%;
      @media screen and (max-width: 1000px) {
        width: 60%;
      }
    }

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 0 15px;
  }
`

