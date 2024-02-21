import supply_1 from "../assets/img/supply_1.bmp"
import supply_2 from "../assets/img/supply_2.jpg"
import supply_3 from "../assets/img/supply_3.jpg"
import troubleshooting_1 from "../assets/img/troubleshooting_1.jpg"
import troubleshooting_2 from "../assets/img/troubleshooting_2.jpg"
import burger_1 from "../assets/img/burger_1.bmp"
import burger_2 from "../assets/img/burger_2.bmp"
import burger_3 from "../assets/img/burger_3.bmp"
import {IWork} from "../models/iWorks";
import {IHistory} from "../models/iHistory";
import {INavigation} from "../models/iNavigation";


export const mainSectionDescriptionText = "I am developing SPAs using React, utilizing Typescript, Redux, Toolkit, Material UI, and Styled Components. I have experience working in teams using Git and Jira."

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

export const educationHistory: IHistory [] = [
    {
        id: 0,
        name: "It инкубатор",
        role: "Student",
        discipline: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Dec 2021",
        dateFinish: "Today"
    },
    {
        id: 1,
        name: "Яндекс Практикум",
        role: "Student",
        discipline: "Реакт разработчик",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Nov 2021",
        dateFinish: "Feb 2022"
    },
]

export const workHistory: IHistory [] = [
    {
        id: 0,
        name: "Лиза Алерт",
        role: "Frontend Developer",
        discipline: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Mar 2022",
        dateFinish: "Aug 2022"
    },
]

export const navigation: INavigation [] = [
    {id: 0, title: "Main",},
    {id: 1, title: "Portfolio",},
    {id: 2, title: "Education",},
]