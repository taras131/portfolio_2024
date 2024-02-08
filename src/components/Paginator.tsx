import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {Pagination} from "swiper/types/modules";

interface IProps {
    activeId: number
    paginationArr: number []
    handleSetActiveId: (id: number) => () => void
    isVerticalMode?: boolean
}

export const Paginator: FC<IProps> = ({
                                          activeId,
                                          paginationArr,
                                          handleSetActiveId,
                                          isVerticalMode=false
                                      }) => {
    const paginationList = paginationArr.map(item => (<PaginationItem key={item}
                                                                      isActive={activeId === item}
                                                                      onClick={handleSetActiveId(item)}
                                                                      isVerticalMode={isVerticalMode}/>))
    return (
        <Wrapper isVerticalMode={isVerticalMode}>
            {paginationList}
        </Wrapper>
    );
};

interface IWrapperProps {
    isVerticalMode: boolean
}

const Wrapper = styled.ul<IWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 100;
    ${props => props.isVerticalMode && css`
        flex-direction: column;
        gap: 20px;
    `};
`;

interface IPaginationItemProps {
    isActive: boolean
    isVerticalMode: boolean
}

const PaginationItem = styled.li<IPaginationItemProps>`
    width: 20px;
    height: 7px;
    background-color: #444d4d;
    border-radius: 10px;
    cursor: pointer;
    ${props => props.isActive && css`
        background-color: #8ea2a2;
    `}
    ${props => props.isVerticalMode && css`
        transform: rotate(90deg);
    `};
`;