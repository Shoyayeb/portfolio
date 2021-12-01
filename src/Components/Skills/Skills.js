import { BadgeCheckIcon } from "@heroicons/react/solid";
import React, { useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import express from '../../Images/back/express.svg';
import mongodb from '../../Images/back/mongodb.svg';
import nodejs from '../../Images/back/nodejs.svg';
import bootstrap from '../../Images/front/bootstrap.svg';
import css3 from '../../Images/front/css3.svg';
import html5 from '../../Images/front/html5.svg';
import javascript from '../../Images/front/javascript.svg';
import materialui from '../../Images/front/materialui.svg';
import react from '../../Images/front/react.svg';
import tailwindcss from '../../Images/front/tailwindcss.svg';
import chrome from '../../Images/tools/chrome.svg';
import firebase from '../../Images/tools/firebase.svg';
import git from '../../Images/tools/git.svg';
import heroku from '../../Images/tools/heroku.svg';
import vscode from '../../Images/tools/vscode.svg';

const Skills = () => {
    const frontEndSkill = [
        html5,
        css3,
        tailwindcss,
        materialui,
        bootstrap,
        javascript,
        react,
    ]
    const backEndSkill = [
        nodejs,
        express,
        mongodb,
    ]
    const tools = [
        git,
        firebase,
        chrome,
        heroku,
        vscode,
    ]
    const allSkills = [
        html5,
        css3,
        tailwindcss,
        materialui,
        bootstrap,
        javascript,
        react,
        nodejs,
        express,
        mongodb,
        git,
        firebase,
        chrome,
        heroku,
        vscode,
    ]
    const frontEndText = [
        "HTML5",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "JavaScript",
        "React",
    ]
    const backEndText = [
        "Node.js",
        "Express.js",
        "NoSQL",
        "Firebase",
    ]
    const skillText = [
        "HTML5",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "NoSQL",
        "Firebase",
    ]
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (

        <div>
            <p className="max-w-3xl text-3xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">Skills and Technologies</p>
            <div class="bg-white dark:bg-gray-800 hidden md:flex justify-center items-center md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                <div className="md:max-w-1/2 hidden md:flex">
                    {allSkills.map((skill) => (
                        <img src={skill} className="w-10 h-8 cursor-pointer hover:shadow-sm" alt="skill" />
                    ))}
                </div>
            </div>
            {/* <div className="md:flex justify-around">
                <div class="bg-white dark:bg-gray-800 flex flex-col">
                    <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                        <h2 class="text-3xl font-extrabold dark:text-white sm:text-4xl">
                            <span class=" text-yellow-400">
                                Front End
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-1/2 flex">
                        {frontEndSkill.map((skill) => (
                            <img src={skill} className="w-10 h-8 hover:h-10" alt="skill" />
                        ))}
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 flex flex-col">
                    <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                        <h2 class="text-3xl font-extrabold dark:text-white sm:text-4xl">
                            <span class=" text-red-400">
                                Back End
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-1/2 flex">
                        {backEndSkill.map((skill) => (
                            <img src={skill} className="w-10 h-8 hover:h-10" alt="skill" />
                        ))}
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 flex flex-col">
                    <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                        <h2 class="text-3xl font-extrabold dark:text-white sm:text-4xl">
                            <span class=" text-yellow-400">
                                Tools
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-1/2 flex">
                        {tools.map((skill) => (
                            <img src={skill} className="w-10 h-8 hover:h-10" alt="skill" />
                        ))}
                    </div>
                </div>

            </div> */}
            {/* mine */}
            <div>
                <p className="text-3xl my-6 text-center dark:text-white md:block hidden">
                    I am Expert at <TextTransition
                        text={skillText[index % skillText.length]}
                        springConfig={presets.wobbly}
                        inline={true}
                        className={"text-red-400"}
                    />
                </p>
                <p className="text-2xl my-6 text-center dark:text-white md:hidden block">
                    I am Expert at  <TextTransition
                        text={skillText[index % skillText.length]}
                        springConfig={presets.wobbly}
                        inline={true}
                        className={"text-red-400"}
                    />
                </p>
            </div>
            {/* freecodecamp */}
            <section id="skills">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                            possimus est.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2">
                        {skillText.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="cursor-pointer bg-gray-200 hover:bg-gray-500 hover:text-white rounded flex p-4 h-full items-center">
                                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Skills;