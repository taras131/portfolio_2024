import React, {FC} from 'react';
import {Modal} from "./Modal";
import styled from "styled-components";
import my_photo from "../assets/img/my_photo_1.png"
import my_photo_1 from "../assets/img/my_photo_1.jpg"
import {IconWitchText} from "./IconWitchText";
import location from "../assets/icons/location.png"
import telegram from "../assets/icons/telegram-1.png"
import phone from "../assets/icons/phone.png"
import email from "../assets/icons/email.png"
import instagram from "../assets/icons/instagram.png"
import linked from "../assets/icons/linked.png"
import git from "../assets/icons/git.png"
import cv from "../assets/files/zverev_cv.pdf"

interface IProps {
    closeContactsModal: () => void
}

export const Contacts: FC<IProps> = ({closeContactsModal}) => {
    return (
        <Modal title={"Contacts:"} closeModal={closeContactsModal}>
            <Wrapper>
                <PhotoContainer>
                    <img src={my_photo} alt="taras_photo"/>
                </PhotoContainer>
                <ul>
                    <IconWitchText icon={location} title={"Moscow"}/>
                    <IconWitchText icon={phone} title={"+7 (967) 049 30 28"}/>
                    <IconWitchText icon={email} title={"mossnabitkana@gmail.com"}/>
                    <IconWitchText icon={telegram} title={"@palichtz"} link={"https://t.me/palichtz"}/>
                    <IconWitchText icon={instagram} title={"@zverevtaras"}
                                   link={"https://www.instagram.com/zverevtaras"}/>
                    <IconWitchText icon={linked} title={"Linked In"}
                                   link={"https://www.linkedin.com/in/taras-zverev-7545101a2"}/>
                    <IconWitchText icon={git} title={"taras131"} link={"https://github.com/taras131"}/>
                </ul>
                <a href={cv} download={cv}>
                    Download CV
                </a>
            </Wrapper>
        </Modal>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;

    & > ul {
        width: 100%;

        & > li {
            font-size: 18px;
        }
    }

    & > a {
        border-radius: 8px;
        border: none;
        padding: 15px;
        color: white;
        background-color: black;
        cursor: pointer;
        transition: .4s;

        &:hover {
            background-color: #1b1c2f;
        }
    }
`;

const PhotoContainer = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-image: url(${my_photo_1});
    background-size: cover;
    position: relative;
    margin-top: 30px;

    & > img {
        position: absolute;
        width: 220px;
        height: 220px;
        bottom: -35px;
        left: -35px;
    }
`;