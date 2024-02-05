import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {Pagination} from "swiper/types/modules";

interface IProps {
    activeId: number
    paginationArr: number []
    handleSetActiveId: (id: number) => () => void
}

export const Paginator: FC<IProps> = ({
                                          activeId,
                                          paginationArr,
                                          handleSetActiveId
                                      }) => {
    const paginationList = paginationArr.map(item => (<PaginationItem key={item}
                                                                      isActive={activeId === item}
                                                                      onClick={handleSetActiveId(item)}/>))
    return (
        <Wrapper>
            {paginationList}
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

interface IPaginationItemProps {
    isActive: boolean
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
`;