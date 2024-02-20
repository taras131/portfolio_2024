import React, {FC, useCallback, useEffect, KeyboardEvent} from 'react';
import {ModalOverlay} from "./ModalOverlay";
import ReactDOM from 'react-dom'
import styled from "styled-components";


type IModal = {
    title?: string,
    closeModal: () => void,
    children: React.ReactNode
}
const modalRoot = document.getElementById("react-modals");
export const Modal: FC<IModal> = ({title = '', closeModal, children}) => {
    const onKeyDown = useCallback(({key}: { key: string }) => {
        if (key === 'Escape') closeModal()
    }, [closeModal])
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])
    if (!modalRoot) return (<div></div>)
    return ReactDOM.createPortal(
        <>
            <Wrapper onClick={(e) => e.stopPropagation()}>
                <h4>{title}</h4>
                <button onClick={closeModal}>
                    x
                </button>
                <Content>

                </Content>
                {children}
            </Wrapper>
            <ModalOverlay closeModal={closeModal}/>
        </>, modalRoot)
};

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 390px;
    max-width: 100%;
    border-radius: 8px;
    background: #1C1C21;
    z-index: 9999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > h4 {
        position: absolute;
        left: 30px;
        top: 30px;
        color: white;
        font-size: 24px;
        font-weight: 600;
    }

    & > button {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
        background-color: inherit;
        border: none;
        color: white;
    }
`;

const Content = styled.div`
    margin-top: 60px;
`;