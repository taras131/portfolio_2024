import React from 'react';
import {CodeFragmentFunction} from "./CodeFragmentFunction";
import {Tag} from "./Tag";
import {CodeLine} from "./CodeLine";

export const CodeFragmentFileCodeLine = () => {
    return (
        <CodeFragmentFunction functionName={"CodeLine"}>
            <Tag name={"Line"} tabCount={2} isNewLine/>
                <Tag name={"Tag"} tabCount={3} isNewLine />
                <CodeLine tab={4} tag={"LineBody"}> &#123;children&#125; </CodeLine>
                <Tag name={"Tag"} tabCount={3} isNewLine type={"close"}/>
            <Tag name={"Wrapper"} type={"close"} tabCount={2} isNewLine/>
        </CodeFragmentFunction>
    );
};

