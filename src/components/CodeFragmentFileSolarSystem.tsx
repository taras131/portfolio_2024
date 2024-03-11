import React, {memo} from 'react';
import {Tag} from "./Tag";
import {CodeFragmentFunction} from "./CodeFragmentFunction";

export const CodeFragmentFileSolarSystem = memo(() => {
    return (
        <CodeFragmentFunction functionName={"SolarSystem"}>
            <Tag name={"Wrapper"} tabCount={2} isNewLine/>
            <Tag name={"Planet_0"} tabCount={3} isNewLine type={"single"}/>
            <Tag name={"Planet_1"} tabCount={3} isNewLine/>
            <Tag name={"Satellite"} tabCount={4} type={"single"}/>
            <Tag name={"Planet_1"} tabCount={3} isNewLine type={"close"}/>
            <Tag name={"Comet"} tabCount={3} isNewLine type={"single"}/>
            <Tag name={"Wrapper"} type={"close"} tabCount={2} isNewLine/>
        </CodeFragmentFunction>
    );
});
