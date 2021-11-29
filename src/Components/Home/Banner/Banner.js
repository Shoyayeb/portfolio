// import { FiMail } from '@react-icons/all-files/fai/FiMail';
import React, { useEffect } from 'react';
import Bounce from 'react-reveal/Zoom';
import TextTransition, { presets } from "react-text-transition";

const texts = [
    "Shafin", "a Web Developer",
];
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
            <main class="dark:bg-gray-800 font-mono bg-white  h-screen">
                <div class="flex relative z-20 items-center">
                    <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                        <div class="flex flex-col">
                            <img src="/shafin.png" class="rounded-full w-28 mx-auto" alt="profile" />
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
                                <a href="/" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
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