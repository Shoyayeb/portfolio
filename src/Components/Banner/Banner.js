// import { FiMail } from '@react-icons/all-files/fai/FiMail';
import React, { useEffect } from 'react';
import Bounce from 'react-reveal/Zoom';
import TextTransition, { presets } from "react-text-transition";
import Particles from 'react-tsparticles';
import resume from '../../extra-files/resume.pdf';
import shafin from '../../Images/shafin.png';

const texts = [
    "Shafin", "a Web Developer",
];
const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
    console.log(container);
};
const Banner = () => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        number: {
                            value: 15,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#cdcdcd"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "#cdcdcd"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 36.54347455356053,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 121.81158184520176,
                                size: 10,
                                duration: 2,
                                opacity: 0.3004685685514977,
                                speed: 3
                            },
                            repulse: {
                                distance: 20,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 3
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
            <main class="dark:bg-gray-800 font-mono bg-white  h-screen">
                <div class="flex relative z-20 items-center">
                    <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                        <div class="flex flex-col">
                            <img src={shafin} class="rounded-full w-28 mx-auto" alt="profile" />
                            <p class="text-3xl my-6 text-center dark:text-white md:block hidden">
                                I am <TextTransition
                                    text={texts[index % texts.length]}
                                    springConfig={presets.wobbly}
                                    inline={true}
                                    className={"text-red-400"}
                                />
                            </p>
                            <p class="text-3xl my-6 text-center dark:text-white md:hidden block">
                                I am <TextTransition
                                    text={texts[index % texts.length]}
                                    springConfig={presets.wobbly}
                                    inline={true}
                                    className={"text-center"}
                                />
                            </p>
                            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">

                                <Bounce bottom>
                                    MERN Stack Developer
                                </Bounce>
                            </h2>
                            <div class="flex items-center justify-center mt-4">
                                <a href={resume} target="_blank" rel="noreferrer"
                                    download="Resume-for-Soyayeb.pdf" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Banner;