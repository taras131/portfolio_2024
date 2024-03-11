import portfolio_1 from "../assets/img/portfolio_1.jpg"
import supply_1 from "../assets/img/supply_1.bmp"
import supply_2 from "../assets/img/supply_2.jpg"
import supply_3 from "../assets/img/supply_3.jpg"
import troubleshooting_1 from "../assets/img/troubleshooting_1.jpg"
import troubleshooting_2 from "../assets/img/troubleshooting_2.jpg"
import burger_1 from "../assets/img/burger_1.bmp"
import burger_2 from "../assets/img/burger_2.bmp"
import burger_3 from "../assets/img/burger_3.bmp"
import flower_1 from "../assets/img/shop_1.jpg"
import flower_2 from "../assets/img/shop_2.jpg"
import flower_3 from "../assets/img/shop_3.jpg"
import {IWork} from "../models/iWorks";
import {IDoubleLanguageText, IHistory} from "../models/iHistory";
import {INavigation} from "../models/iNavigation";


export const mainSectionDescriptionText: IDoubleLanguageText = {
    en: "I am developing SPAs using React, utilizing Typescript, Redux, Toolkit, Material UI, and Styled Components." +
        " I have experience working in teams using Git and Jira.",
    ru: "Я разрабатываю SPA на React, используя Typescript, Redux, Toolkit, Material UI и Styled Components. " +
        "У меня есть опыт работы в командах, использующих Git и Jira."
}

export const fileNames = ["MainSection.tsx", "CodeFragment.tsx", "SolarSystem.tsx", " CodeLine.tsx"]
export const works: IWork [] = [
    {
        id: 0,
        title: "Troubleshooting",
        description: {
            en: "An application for creating guides for finding faulty machinery and quarry equipment. Allows you to" +
                " create and edit branching guides for troubleshooting technical problems. Create detailed instructions," +
                " add text, and attach documentation files.",
            ru: "Приложение для создания гайдов по поиску неисправнойстей машин и карьерной техники. Позволяет " +
                "создавать и редактировать ветвящиеся гайды для диагностики технических неисправностей. Создавайте" +
                " подробные инструкции, добавляйте текст и прикрепляйте файлы с документацией."
        },
        achievements: {
            en: "This job taught me how to create complex data structures and work with them. And also use the Material" +
                " UI library in practice to create a user interface.",
            ru: "Эта работа научила меня создавать сложные структуры данных и работать с ними. А так же использовать " +
                "на практике библиотеку Material UI для создания user interface."
        },
        img: [troubleshooting_1, troubleshooting_2],
        skills: ["React", "Typescript", "Redux", "Toolkit", "Material UI"],
        git: "https://github.com/taras131/mechanics_guide",
        webSite: "https://deluxe-torte-cdf6c9.netlify.app/guides"
    },
    {
        id: 1,
        title: "Supply",
        description: {
            en: "An application for my current place of work. It is designed to monitor the fulfillment of requests for" +
                " spare parts. It allows you to trace the entire history: the creation of an application, payment of an" +
                " invoice, shipment of spare parts by a transport company and their arrival at the warehouse.",
            ru: "Приложение для моего текущего места работы. Предназначено для контроля выполнения заявок на запчасти. " +
                "Позволяет проследить всё историю: создания заявки, оплату счёта, отгрузку " +
                "запчастей транспортной компанией и приход их на склад."
        },
        achievements: {
            en: "By creating this application, I learned how to work with firebase, read information from pdf files to" +
                " automatically link payment orders to accounts, and make requests by VIN number to third-party services." +
                "Based on feedback from users, the functionality is constantly being refined and expanded.",
            ru: "Создавая это приложение я научился работать с firebase, считывать информацию из pdf файлов для " +
                "автоматической привязки платёжных поручений к счетам, делать запросы по VIN номеру на сторонние сервисы." +
                "На основе обратной связи от пользователей, происходит постоянная доработка и расширение функционала."
        },
        img: [supply_2, supply_3],
        skills: ["React", "Typescript", "Redux", "Toolkit", "Material UI"],
        git: "https://github.com/taras131/supply_0.7"
    },
    {
        id: 2,
        title: "Burger constructor",
        description: {
            en: "This application is an online burger store where the customer can, using Drag and Drop, assemble a " +
                "burger for himself in the designer. The order history and ingredient cards are also available for viewing.",
            ru: "Это приложение представляет из себя интернет магазин по продаже бургеров, где клиент может, " +
                "используя Drag and Drop, сам собрать себе бургер в конструкторе. Так же доступна к просмоту история " +
                "заказов и карточки ингридиентов."
        },
        achievements: {
            en: "While working on this application, I mastered the Redux Toolkit, a technology for working with Drag " +
                "and Drop events. You can also note the removal of requests to the server in a separate layer and " +
                "authentication of the user based on the token.",
            ru: "Работая над этим приложением я освоил Redux Toolkit, технологию работы с Drag and Drop событиями. " +
                "Ещё можно отметить вынос запросов на сервер в отдельный слой и аутенфикацию пользователя на основе token."
        }, img: [burger_1, burger_2, burger_3],
        skills: ["React", "Typescript", "Redux", "Toolkit", "JavaScript", "Drag and Drop"],
        git: "https://github.com/taras131/react-burger",
        webSite: "https://taras131.github.io/react-burger/"
    },
    {
        id: 3,
        title: "Flower Shop",
        description: {
            en: "This is a universal server for an online store that allows the user to add products to the cart, " +
                "place orders, and view their order history. The administrator can add, delete goods, change prices, " +
                "mark 'out of stock' and keep a list of all orders made. To interact with the server, a flower shop " +
                "template was made on React.",
            ru: "Это универсальный сервер для интернет магазина, который позволяет пользователю добавлять товары в" +
                " корзину, оформлять заказы, просматривать историю своих заказов. Администратор может добавлять, удалять" +
                " товар, изменять цены, ставить отметку 'нет на складе' и ведеть список всех сделанных заказов. " +
                "Для взаимодействия с сервером был сделан шаблон цветочного магазина на React."
        },
        achievements: {
            en: "When writing this server, I mastered the Express library and learned how to create a database using " +
                "Sequelize. Which allowed me to look at the development from a new perspective, from the backend side.",
            ru: "При написании данного сервера я освоил  библиотеку Express и научился создавать базу данных с помощью " +
                "Sequelize. Что позволило мне посмотреть на разработку с новой стороны, - со стороны бекенда."
        }, img: [flower_1, flower_2, flower_3],
        skills: ["React", "Redux", "Node js", "Express", "Jsonwebtoken", "Sequelize"],
        git: "https://github.com/taras131/flowers_shop_0.2/tree/main/server"
    },
    {
        id: 4,
        title: "Portfolio",
        description: {
            en: "This portfolio was made so that the employer would spend less of his time evaluating my skills and " +
                "experience.",
            ru: "Это портфолио было сделано для того , чтобы работодатель затратил меньше своего времени для " +
                "оценки моих навыков и опыта."
        },
        achievements: {
            en: "I got the skills to work with the Styled Components library, looked at its pros and cons, and practiced" +
                " creating simple animations.",
            ru: "Я получил навыки работы с библиотекой Styled Components, посмотрел на её плюсы и минусы и " +
                "потренировался в создании несложных анимаций."
        }, img: [portfolio_1],
        skills: ["React", "Styled Components", "JavaScript"],
        git: "https://github.com/taras131/portfolio_2024"
    },
]

export const skills = ["React", "Typescript", "Redux", "Toolkit", "JavaScript", "Styled Component", "Material UI", "Node js"]

export const educationHistory: IHistory [] = [
    {
        id: 0,
        name: {en: "It incubator", ru: "ИТ инкубатор"},
        role: {en: "Student", ru: "Студент"},
        discipline: {en: "Frontend Developer", ru: "Frontend разработчик"},
        description:
            {
                en: "This course is important to me for deepening my understanding of the principles behind React" +
                    " applications. It will enable me to create more efficient and optimized applications. Additionally," +
                    " it allows me to master current development tools and learn the nuances of working with TypeScript." +
                    " An invaluable part of this course is the presence of a community passionate about development:" +
                    " both instructors and students are always eager to discuss new ideas.",
                ru: "Этот курс нужен мне для углубления понимания принципов работы React приложений. Он позволит мне создавать" +
                    " более эффективные и оптимизированные приложения. Так же ,благодаря ему я освоиваю актуальные инструменты разработки " +
                    "и учусь тонкостям работы с typescript. Безсценной частью этого курса является наличие  комьюнити, " +
                    "которое увлечено разработкой: и преподаватели и студенты всегда с интересом готовы обсудить новые идеи."
            },
        dateStart: {en: "Dec 2022", ru: "Дек 2022"},
        dateFinish: {en: "Today", ru: "В процессе"},
    },
    {
        id: 1,
        name: {en: "Yandex Practicum", ru: "Яндекс Практикум"},
        role: {en: "Student", ru: "Студент"},
        discipline: {en: "React Developer", ru: "Реакт разработчик"},
        description: {
            en: "I have successfully completed the React Developer course, gaining skills in HTML, CSS, JavaScript and" +
                " popular frontend frameworks such as React and Vue. Through hands-on projects and assignments, I honed" +
                " my skills in creating responsive and user-friendly web applications. The course gave me the knowledge" +
                " and expertise to create fascinating user interfaces and enhance the user experience. I am now able to" +
                " effectively use modern frontend development tools and methods, and I am ready to contribute as a " +
                "qualified frontend developer in any technical environment",
            ru: "Я успешно завершил курс React Developer,получив навыки в HTML, CSS, JavaScript " +
                "и популярных frontend-фреймворков, таких как React и Vue. Благодаря практическим проектам и " +
                "заданиям, я оттачивал навыки в создании адаптивных и удобных веб-приложений. Курс дал мне знания и " +
                "экспертизу для создания увлекательных пользовательских интерфейсов и улучшения пользовательского опыта." +
                " Я теперь умею эффективно использовать современные инструменты и методы frontend-разработки, " +
                "готов вносить свой вклад в качестве квалифицированного frontend-разработчика в любой технической среде."
        },
        dateStart: {en: "Nov 2021", ru: "Ноя 2021"},
        dateFinish: {en: "Feb 2022", ru: "Фев 2022"},
    },
]

export const workHistory: IHistory [] = [
    {
        id: 0,
        name: {en: "Liza Alert", ru: "Лиза Алерт"},
        role: {en: "Frontend Developer", ru: "Frontend разработчик"},
        discipline: {en: "React Application development", ru: "Разработка Реакт приложения"},
        description: {
            en: "I participated in the first iteration of developing the educational platform for Lisa Alert as part" +
                " of the frontend development team. During the development process, we established communication with " +
                "the backend team and designer, created a task distribution system within the team, and implemented " +
                "a code review mechanism before deploying new code to production. During our iteration, we built a " +
                "component library, introduced TypeScript, and integrated redux-toolkit into the project. It was an " +
                "invaluable and exciting team experience.",
            ru: "Я принимал участие в первой итерации разработки образовательной платформы для Лизы Алерт в команде" +
                " фронтенд разработки. В  процессе разработки мы наладили коммуникацию с командой бекенда и дизайнером," +
                " создали систему распределения задач внутри команды, наладили механизм ревью нового кода перед" +
                " попаданием его в продакшн. За свою итерацию мы создали библиотеку компонентов, внедрили в проект " +
                "typescript и redux-toolkit. Это был бесценный и увлекательный опыт работы в команде."
        },
        dateStart: {en: "Mar 2022", ru: "Март 2022"},
        dateFinish: {en: "Aug 2022", ru: "Авг 2022"}
    },
]

export const navigation: INavigation [] = [
    {id: 0, title: {en: "Main", ru: "Главная"}},
    {id: 1, title: {en: "Portfolio", ru: "Портфолио"}},
    {id: 2, title: {en: "Education", ru: "Образование"}},
]