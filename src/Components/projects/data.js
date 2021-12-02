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
const healthcareTag = [
    "Reactjs",
    "Context API",
    "REST API",
    "Tailwindcss",
    "Firebase",
    "react-router-dom",
]
export const projectsData = [
    {
        name: "Calida Tour Planner (Tourism Related Website)",
        img: tourismGif,
        tags: tourismTag,
        feature1:
            "Complete Niche website with admin & client dashboard with CRUD operation.",
        feature2: "Clients can buy products, see orders, cancel them and add reviews",
        feature3: "Admin can add new product, modify or delete product and make others admin",
        link: "https://calida-tour-planner.web.app/",
        client: "https://github.com/Shoyayeb/calida-tour-planner",
        server: "https://github.com/Shoyayeb/calida-tour-planner-server",
    },
    {
        name: "Baby Island (Niche Website)",
        img: nicheGif,
        tags: nicheTag,
        feature1:
            "Complete tourism related website with basic CRUD operation.",
        feature2: "Fully responsive on most device",
        feature3: "Clients can book plans, see ordered plans, remove it and add review",
        link: "https://baby-island-ccea1.web.app/",
        client: "https://github.com/Shoyayeb/calida-tour-planner",
        server: "https://github.com/Shoyayeb/calida-tour-planner-server",
    },
    {
        name: "Care & Cure Hospital (Healthcare Related Website):",
        img: healthcareGif,
        tags: healthcareTag,
        feature1:
            "Complete healthcare related website with login/register system",
        feature2: "Clients can login/register with email-password, gmail or github.",
        feature3: "Fully responsive on most device.",
        link: "https://care-n-cure-hospital.web.app/",
        client: "https://github.com/Shoyayeb/care-n-cure-client",
        server: "",
    },

];