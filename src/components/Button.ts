import React, {FC} from 'react';
import styled from "styled-components";

interface IProps {
    variant: "outlined" | "contained" | "text",
}

export const Button = styled.button<IProps>`
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: white;
`;