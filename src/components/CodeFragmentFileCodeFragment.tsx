import React from 'react';
import {CodeFragmentFunction} from "./CodeFragmentFunction";
import {Tag} from "./Tag";
import {CodeLine} from "./CodeLine";

export const CodeFragmentFileCodeFragment = () => {
    return (
        <CodeFragmentFunction functionName={"CodeFragment"}>
            <Tag name={"LaptopImitation"} tabCount={2} isNewLine/>
            <Tag name={"CodeFragmentHeader"} tabCount={3} type={"single"}/>
            <Tag name={"div"} tabCount={3} isNewLine/>
            <CodeLine tag={"pre"} tab={4}> &#123;visibleCode&#125; </CodeLine>
            <Tag name={"div"} tabCount={3} isNewLine type={"close"}/>
            <Tag name={"LaptopImitation"} type={"close"} tabCount={2} isNewLine/>
        </CodeFragmentFunction>
    );
};

