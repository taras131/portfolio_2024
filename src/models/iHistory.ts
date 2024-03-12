export interface IDoubleLanguageText {
    en: string,
    ru: string
}

export interface IHistory  {
    id: number,
    name: IDoubleLanguageText,
    role: IDoubleLanguageText,
    discipline: IDoubleLanguageText,
    description: IDoubleLanguageText,
    dateStart: IDoubleLanguageText,
    dateFinish: IDoubleLanguageText
}