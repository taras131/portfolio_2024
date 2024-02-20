import React, {FC} from 'react';
import sprite from "../accest/icons/sprite.svg";
import styled from "styled-components";

type IProps = {
    iconId: string,
}

export const Icon: FC<IProps> = ({
                                     iconId,
                                 }) => {
    return (

            <svg width="24" height="24" viewBox="0 0 24 24">
                <use xlinkHref={`${sprite}#${iconId}`}/>
            </svg>

    );
};

export const SVG = styled.svg`

`

