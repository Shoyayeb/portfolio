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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        centerPadding: "60px",

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

                    {/* niche */}

                    {
                        projectsData.map((project) => (
                            <div class="flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                                <div class=" bg-cover bg-landscape">
                                    <img src={project.img} alt="" srcset="" />
                                </div>
                                <div class="m-4">
                                    <h1 class="text-gray-900 font-bold text-2xl">
                                        {project.name}
                                    </h1>
                                    {/* <ul class="list-disc text-left">
                                        <li>
                                            {project.feature1}
                                        </li>
                                        <li>
                                            {project.feature2}
                                        </li>
                                        <li>
                                            {project.feature3}
                                        </li>
                                    </ul> */}



                                    <ul class="text-sm text-black dark:text-white w-full mt-6 mb-6">
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500" />
                                            <p>
                                                {project.feature1}
                                            </p>
                                        </li>
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500" />
                                            <p>
                                                {project.feature2}
                                            </p>
                                        </li>
                                        <li class="mb-3 flex items-center space-x-2">
                                            <FiPlusCircle className="text-green-500 text-opacity-100	" />
                                            <p>
                                                {project.feature3}
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="flex item-center justify-between mt-3 flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span class="px-3 py-2  text-base rounded-full text-gray-800  bg-yellow-200 ">
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