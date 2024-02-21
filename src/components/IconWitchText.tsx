import React, {FC, useState} from 'react';
import styled, {keyframes} from "styled-components";
import arrow from "../assets/icons/arrow.png"
import copy from "../assets/icons/copy.png"

interface IProps {
    title: string,
    icon: string,
    link?: string
}

export const IconWitchText: FC<IProps> = ({title, icon, link}) => {
   const [showSuccessCopyMessage, setShowSuccessCopyMessage] = useState(false)
    const showMessage = () => {
        setShowSuccessCopyMessage(true)
        setTimeout(()=> {
            setShowSuccessCopyMessage(false)
        }, 2000)
    }
    const handleCopyClick = () => {
       if (title !== "Moscow") {
           showMessage()
           navigator.clipboard.writeText(title);
       }
    };
    return (
        <Wrapper isLink={!!link}>
            {link
                ? (
                    <a href={link} target={"_blank"}>
                        <img src={icon} alt={"icon"}/>
                        <span> {title}  </span>
                        <img src={arrow} alt={"arrow right"}/>
                    </a>
                )
                : (
                    <div onClick={handleCopyClick} style={{position: "relative"}}>
                        <img src={icon} alt={"icon"}/>
                        <span> {title}  </span>
                        {title !== "Moscow" && (<img src={copy} alt={"copy"}/>)}
                        {showSuccessCopyMessage && (<CopyMessage>
                            <span>data has been copied</span>
                        </CopyMessage>)}
                    </div>
                )}
        </Wrapper>
    );
};

interface IWrapperProps {
    isLink: boolean
}

const Wrapper = styled.li<IWrapperProps>`

    & > a, & > div {
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        gap: 20px;
        align-items: center;
        padding: 10px;
        transition: .4s;
        cursor: pointer;
        z-index: 1001;
        border-radius: 8px;

        img:first-child {
            height: 30px;
        }

        img:nth-child(3) {
            height: 20px;
            transition: .4s;
        }

        &:hover {
            background-color: #3c475b;

            img:last-child {
                ${props => props.isLink
                        ? "margin-left: 20px;"
                        : "height: 30px;"}

            }
        }
    }

    & span {
        color: white;
    }
`
const messageAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: .6;
    }
`
const CopyMessage = styled.div`
    position: absolute;
    z-index: 1000;
    border-radius: 8px;
    padding: 8px;
    background-color: black;
    color: white;
    top: -30px;
    opacity: 0;
    animation: ${messageAnimation} 2s;

`