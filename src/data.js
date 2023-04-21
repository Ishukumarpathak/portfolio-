import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "Kharidi Karo - A website for INDIAN Products",
        image: p1,
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "An official Quizbizz Club Website",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: "CyberCrack event promotion webgame",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "A website for pokemon characters",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Super heroes characters API website ",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name: "A food receape API website",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1.5,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 21,
        description: "TECHNOLOGIES",
    },
    // {
    //     id: 4,
    //     year: 20,
    //     description: "COMMUNITY<br />POSTS",
    // },
];
