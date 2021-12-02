import healthcareGif from '../../Images/projects/healthcare.gif';
import nicheGif from '../../Images/projects/niche.gif';
import tourismGif from '../../Images/projects/tourism.gif';


const tourismTag = [
    "Reactjs",
    "Tailwindcss",
    "Firebase",
    "Node",
    "MongoDB",
    "Express",
]
const nicheTag = [
    "Reactjs",
    "Tailwindcss",
    "Firebase",
    "Node",
    "MongoDB",
    "Express",
]
export const projectsData = [
    {
        name: "Calida Tour Planner",
        img: tourismGif,
        tags: tourismTag,
        feature1:
            "Complete Niche website with admin & client dashboard with CRUD operation.",
        feature2: "Clients can buy products, see orders, cancel them and add reviews",
        feature3: "Admin can add new product, modify or delete product and make others admin",
        link: "https://baby-island-ccea1.web.app/",
    },
    {
        name: "Baby Island",
        img: nicheGif,
        tags: nicheTag,
        feature1:
            "Complete tourism related website with basic CRUD operation.",
        feature2: "Fully responsive on most device",
        feature3: "Clients can book plans, see ordered plans, remove it and add review",
        link: "https://calida-tour-planner.web.app/",
    },
    {
        name: "Calida Tour Planner",
        img: healthcareGif,
        tags: tourismTag,
        feature1:
            "Complete tourism related website with basic CRUD operation.",
        feature2: "Fully responsive on most device",
        feature3: "Clients can book plans, see ordered plans, remove it and add review.",
        link: "https://baby-island-ccea1.web.app/",
    },

];