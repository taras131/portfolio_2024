import {IDoubleLanguageText} from "./iHistory";

export interface IWork {
    id: number,
    title: string,
    description: IDoubleLanguageText,
    achievements: IDoubleLanguageText
    img: string [],
    skills: string [],
    git: string,
    webSite?: string
}