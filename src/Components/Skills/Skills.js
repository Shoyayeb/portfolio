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
    const skillText = [
        "HTML5",
        "CSS3",
        "Tailwind",
        "Bootstrap",
        "JavaScript",
        "React",
        "NextJS",
        "Node.js",
        "Express.js",
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
        <div
            id="skills">
            <p className="max-w-3xl text-3xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">Skills and Technologies</p>
            <div className="bg-white dark:bg-gray-800 hidden md:flex justify-center items-center md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 " data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <div className="md:max-w-1/2 hidden md:flex">
                    {allSkills.map((skill) => (
                        <img src={skill} className="w-10 h-8 cursor-pointer hover:shadow-sm" alt="skill" />
                    ))}
                </div>
            </div>
            <div data-aos="zoom-in-bottom" data-aos-easing="linear" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
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
            <section data-aos="zoom-in-bottom" data-aos-easing="linear" data-aos-duration="800">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Spent lots of sleepless night into learning. And I think that was not a waste because I'm confident at WHAT I am.
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