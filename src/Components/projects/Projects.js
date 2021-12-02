import { CodeIcon } from "@heroicons/react/solid";
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { projectsData } from './data';


const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4500,

    };
    return (
        <section id="projects" className=" body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Those Websites are created by myself
                    </p>
                </div>
                <Slider {...settings}>
                    {
                        projectsData.map((project) => (
                            <div class="flex h-auto md:max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
                                <div class=" bg-cover bg-landscape">
                                    <img src={project.img} alt="" srcset="" />
                                </div>
                                <div class="m-4">
                                    <a href={project.link} target="_blank" rel="noreferrer" class="text-gray-900 font-bold text-2xl underline hover:text-purple-400">
                                        {project.name}
                                    </a>
                                    <div className="flex justify-around underline mt-2">
                                        <a className="hover:text-purple-400" href={project.client}>Client Side Code</a>
                                        <a className="hover:text-purple-400" href={project.server}>Server Side Code</a>
                                    </div>
                                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500" />
                                            <p>
                                                {project.feature1}
                                            </p>
                                        </li>
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500 " />
                                            <p>
                                                {project.feature2}
                                            </p>
                                        </li>
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500" />
                                            <p>
                                                {project.feature3}
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="flex item-center justify-between mt-3 flex-wrap gap-1">
                                        {project.tags.map((tag) => (
                                            <span class="px-2 py-2 text-xs rounded-full text-gray-800  bg-red-200 ">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    );
};

export default Projects;