import scoutSkills from "/img/scoutsSkills.png";
import selfPresentation from "/img/Self-presentation.png";
import monkeyTest from "/img/Monkey Test.png";

export const projectData = [
    {
        title: "Scouts skills",
        desc: [
            "This app is currently working for scouts and their parents to pick challenges to advance themselves. I created this app in 2022 for myself and other scouts but but the development of it had to come to an end in January 2024 since the official ZHP team made their own version of it.",
            "From this project, I learned about developing, hosting, making pdfs, domains, DNS and how GitHub works.",
        ],
        img: scoutSkills,
        buttonText: "See in web",
        link: "https://sprawnosci.gdanska.zhp.pl",
    },
    {
        title: "Self-presentation",
        desc: [
            "To create this page, I started learning aspects like designing in Figma, project planning in Notion, and even animation in Framer Motion (JS 3rd part library). I was trying to make this creating process as optimal as possible. Project was made in React",
        ],
        img: selfPresentation,
        buttonText: "Back to homepage",
        link: "/",
    },
    {
        title: "Monkey Test",
        desc: [
            "I created this app because of my curious about how monkeys in NASA are so good in this game. To try it myself I thought I would do something similar. The app depends on memorizing a sequence of numbers (from 1 to 9). After they hide, you have to click blocks in the right order",
        ],
        img: monkeyTest,
        buttonText: "See on github",
        link: "https://github.com/Pawel-Serkowski/MokeyTest",
    },
];
