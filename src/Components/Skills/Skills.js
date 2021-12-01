import React from 'react';
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
    return (
        <div>
            <p className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">Web Development Skills</p>
            {/* <div class="bg-white dark:bg-gray-800 flex justify-center items-center">
                <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
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
            <div class="bg-white dark:bg-gray-800 flex justify-center items-center">
                <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
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
            <div class="bg-white dark:bg-gray-800 flex justify-center items-center">
                <div class="text-start md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span class=" text-red-400">
                            Back End
                        </span>
                    </h2>
                </div>
                <div className="md:max-w-1/2 flex">
                    {tools.map((skill) => (
                        <img src={skill} className="w-10 h-8 hover:h-10" alt="skill" />
                    ))}
                </div>
            </div> */}
            <div class="bg-white dark:bg-gray-800 flex justify-center items-center md:max-w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                <div className="md:max-w-1/2 flex">
                    {allSkills.map((skill) => (
                        <img src={skill} className="w-10 h-8 cursor-pointer hover:shadow-sm" alt="skill" />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Skills;