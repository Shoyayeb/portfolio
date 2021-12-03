// import { FiMail } from '@react-icons/all-files/fai/FiMail';
import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import TextTransition, { presets } from "react-text-transition";
import Particles from 'react-tsparticles';
import resume from '../../extra-files/resume.pdf';
import shafin from '../../Images/shafin.png';



const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
    console.log(container);
};
const Banner = () => {
    const texts = [
        "Shafin", " a Web Developer",
    ];
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div id="home">
            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    className="z-0"
                    options={{
                        fpsLimit: 30,
                        particles: {
                            number: {
                                value: 15,
                                density: {
                                    enable: false,
                                    value_area: 800
                                },
                                limit: 20,
                            },
                            color: {
                                value: "#79d279"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "#79d279"
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
                                value: 0.7,
                                random: true,
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
                                enable: true,
                                distance: 120,
                                color: "#d9f2d9",
                                opacity: 0.5,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 2,
                                direction: "none",
                                random: false,
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
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 109,
                                    line_linked: {
                                        opacity: .51
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
            </div>
            <main className="dark:bg-gray-800 font-mono bg-white h-screen">
                <div className="flex  z-20 items-center">
                    <div className="container mx-auto px-6 flex flex-col justify-between items-center  py-4">
                        <div className="flex flex-col">
                            <img src={shafin} className="z-20 rounded-full w-2/3 md:w-2/6 mx-auto" alt="profile" />
                            <p className="text-3xl my-6 text-center dark:text-white md:block hidden">
                                I am <TextTransition
                                    text={texts[index % texts.length]}
                                    springConfig={presets.wobbly}
                                    inline={true}
                                    direction="down"
                                    className="text-green-500"
                                />
                            </p>
                            <span className="text-3xl my-6 text-center md:hidden ">
                                <p>I am</p>
                                <TextTransition
                                    text={texts[index % texts.length]}
                                    direction="down"
                                    className={" overflow-x-hidden"}
                                    inline={true}
                                />
                            </span>
                            <h2 className="max-w-3xl text-3xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                                <Fade left>
                                    MERN Stack Developer
                                </Fade>
                            </h2>
                            <div className="flex items-center justify-center mt-4">
                                <a href={resume} target="_blank" rel="noreferrer"
                                    download="Resume-for-Soyayeb.pdf" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
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