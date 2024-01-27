import React, {FC, useEffect, useState} from 'react';
import {CodeFragmentFunction} from "./CodeFragmentFunction";
import {Tag} from "./Tag";
import {CodeLine} from "./CodeLine";

interface IProps {
    myName: string;
}
const CodeFragmentFileMainSection:FC<IProps> = ({myName}) => {
    const [cursorVisible, setCursorVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 600);
        return () => clearInterval(interval);
    }, []);
    return (
        <CodeFragmentFunction functionName={"MainSection"}>
            <Tag name={"Wrapper"} tabCount={2} isNewLine/>
            <Tag name={"Info"} tabCount={3} isNewLine/>
            <CodeLine tag={"span"} tab={4}>{myName}{cursorVisible && (
                <span>|</span>)}</CodeLine>
            <CodeLine tag={"h1"} tab={4}>Frontend developer</CodeLine>
            <CodeLine tag={"p"} tab={4}>&#123;mainSectionDescriptionText&#125;</CodeLine>
            <Tag name={"Info"} type={"close"} tabCount={3} isNewLine/>
            <Tag name={"CodeFragment"} type={"single"} tabCount={3} isNewLine/>
            <Tag name={"Wrapper"} type={"close"} tabCount={2} isNewLine/>
        </CodeFragmentFunction>
    );
};

export default CodeFragmentFileMainSection;