import React, {FC} from 'react';
import styled from "styled-components";

type TModalOverlay = {
    closeModal: () => void
}
export const ModalOverlay: FC<TModalOverlay> = ({closeModal}) => {
    const closeClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        closeModal()
    }
    return (
        <Wrapper onClick={closeClick}>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
`;