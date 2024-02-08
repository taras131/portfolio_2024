import supply_1 from "../accest/img/supply_1.bmp"
import supply_2 from "../accest/img/supply_2.jpg"
import supply_3 from "../accest/img/supply_3.jpg"
import troubleshooting_1 from "../accest/img/troubleshooting_1.jpg"
import troubleshooting_2 from "../accest/img/troubleshooting_2.jpg"
import burger_1 from "../accest/img/burger_1.bmp"
import burger_2 from "../accest/img/burger_2.bmp"
import burger_3 from "../accest/img/burger_3.bmp"
import {IWork} from "../models/iWorks";


export const mainSectionDescriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus."

export const fileNames = ["MainSection.tsx", "CodeFragment.tsx", "SolarSystem.tsx", " CodeLine.tsx"]
export const works: IWork [] = [
    {
        id: 0,
        title: "Troubleshooting",
        description: "lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input",
        img: [troubleshooting_1, troubleshooting_2],
        skills: ["React", "Typescript", "Redux", "Toolkit", "Material UI"]
    },
    {
        id: 1,
        title: "Supply",
        description: "lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input",
        img: [supply_2, supply_3],
        skills: ["React", "Typescript", "Redux", "Toolkit", "Material UI"]
    },
    {
        id: 2,
        title: "Burger constructor",
        description: "lorem input lorem input lorem input lorem ilorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input",
        img: [burger_1, burger_2, burger_3],
        skills: ["React", "Typescript", "Redux", "Toolkit", "JavaScript"]
    },
    {
        id: 3,
        title: "Portfolio",
        description: "lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input lorem input",
        img: [supply_1],
        skills: ["React", "Styled Component", "JavaScript"]
    },
]

export const skills = ["React", "Typescript", "Redux", "Toolkit", "JavaScript", "Styled Component", "Material UI", "Node js"]