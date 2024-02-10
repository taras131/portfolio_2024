import styled from "styled-components";

type TStyledProps = {
    fontSizePx?: number
    isWhite?: boolean
}


export const TextInBox = styled.div<TStyledProps>`
  display: inline-block;
  color: ${props => props.isWhite ? props.theme.colors.backgroundPrimary
    : props.theme.colors.textPrimary};
  background-color: ${({theme}) => theme.colors.accent};
  font-size: ${props => props.fontSizePx ? `${props.fontSizePx}px` : "10px"};
  font-weight: 400;
  padding: 4px 7px;
  text-transform: capitalize;
`