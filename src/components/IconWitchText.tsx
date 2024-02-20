import React, {FC} from 'react';
import styled from "styled-components";
import arrow from "../accest/icons/arrow.png"
import copy from "../accest/icons/copy.png"

interface IProps {
    title: string,
    icon: string,
    link?: string
}

export const IconWitchText: FC<IProps> = ({title, icon, link}) => {
    return (
        <Wrapper isLink ={!!link}>
            {link
                ? (
                    <a href={link} target={"_blank"}>
                        <img src={icon} alt={"icon"}/>
                        <span> {title}  </span>
                        <img src={arrow} alt={"arrow right"}/>
                    </a>
                )
                : (
                    <div>
                        <img src={icon} alt={"icon"}/>
                        <span> {title}  </span>
                        <img src={copy} alt={"copy"}/>
                    </div>
                )}

        </Wrapper>
    );
};

interface IWrapperProps {
    isLink: boolean
}

const Wrapper = styled.li<IWrapperProps>`
    & > a, div {
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        gap: 20px;
        align-items: center;
        padding: 10px;
        transition: .4s;
        cursor: pointer;

        img:first-child {
            height: 30px;
        }

        img:last-child {
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