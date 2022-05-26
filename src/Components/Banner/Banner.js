import React, { useEffect } from 'react';
import TextTransition from "react-text-transition";
import profileImage from '../../Images/profile-image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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

    return (
        <div id="home">
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
                                <a href="https://drive.google.com/file/d/1EoWnY9YCoQgIO9kewZC3-PadsicOuG4h/view" target="_blank" rel="noreferrer"
                                    className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-md">
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