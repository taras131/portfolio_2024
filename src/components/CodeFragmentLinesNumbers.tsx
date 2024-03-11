import React, {memo} from 'react';
import styled from "styled-components";

export const CodeFragmentLinesNumbers = memo(() => {
    let numberArr = []
    for (let i = 1; i < 15; i++) {
        numberArr.push(i)
    }
    const numbersList = numberArr.map(number => (<span key={number}>{number}</span>))
    return (
        <Wrapper>
            {numbersList}
        </Wrapper>
    );
});

const Wrapper = styled.div`
  
  background-color: #3F3D3DFF;
  width: 25px;
  padding-left: 3px;


  span {
    display: block;
    font-size: 11px;
    margin-top: 1.4px;
    color: #545151;
  }
`;