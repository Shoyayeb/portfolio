import React, { useEffect } from 'react';
import TextTransition from "react-text-transition";
import Particles from 'react-tsparticles';
import resume from '../../extra-files/resume.pdf';
import profileImage from '../../Images/profile-image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
    console.log(container);
};
const Banner = () => {
    const texts = [
        "Soyayeb Hasan Shafin", " a Web Developer", "a hard worker", "a React Develoeper", "a Night Owl"
    ];
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    const options = {
        fpsLimit: 25,
        particles: {
            number: {
                value: 25,
                density: {
                    enable: false,
                    value_area: 400
                },
                limit: 30,
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
                    nb_sides: 3
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#8bff59",
                opacity: 0.8,
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
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 6
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    return (
        <div id="home">
            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    className="z-0"
                    options={options}
                />
            </div>
            <main className="dark:bg-gray-800 font-mono bg-white h-screen">
                <div className="flex z-20 items-center">
                    <div className="container mx-auto px-6 flex flex-col justify-between items-center  py-4">
                        <div className="flex flex-col">
                            <img src={profileImage} className="z-20 rounded-full md:w-3/12 w-7/12 mx-auto" alt="profile" />
                            <h2 className="max-w-3xl text-2xl md:text-6xl font-bold mx-auto dark:text-white text-center py-2">
                                <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                    <p className='text-gray-900'>I am</p>
                                    <TextTransition
                                        className="text-green-600"
                                        text={texts[index % texts.length]}
                                        direction="up"
                                        noOverflow
                                        inline
                                    />
                                </div>
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