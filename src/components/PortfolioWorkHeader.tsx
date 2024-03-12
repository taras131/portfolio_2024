import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {navigation} from "../utils/consts";
import {LanguageContext} from "../contexts/LanguageContext";

interface IProps {
    title: string
}

export const PortfolioWorkHeader: FC<IProps> = ({title}) => {
    const {language} = useContext(LanguageContext);
    return (
        <Wrapper>
            <div>
                <h2>{navigation[1].title[language]}: <span>{title}</span></h2>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1230px) {
    padding: 15px;
  }
  
  h2 > span {
    font-weight: 500;
    color: ${({theme}) => theme.colors.textSecondary};
    margin-left: 30px;
  }
`;
