
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SiMicrosoftoutlook } from "react-icons/si";
import { Link } from 'react-router-dom';

const Header = () => {
    const [hidden, setHidden] = useState(true)
    const handleNavOnMobile = () => {
        if (hidden) {
            setHidden(false)
        } else if (!hidden) {
            setHidden(true)
        }
    }
    console.log(hidden);
    return (

        <div>
            <nav class="bg-white dark:bg-gray-800 shadow ">
                <div class="max-w-7xl mx-auto px-4 sticky">
                    <div class="flex items-center justify-between h-16 sticky">
                        <div class="w-full justify-between flex items-center">
                            <a class="animate-pulse hover:opacity-50 flex-shrink-0 md:mx-0 mx-auto text-xl" href="mailto:sa.fine@outlook.com">
                                <SiMicrosoftoutlook className=" inline mx-2 text-blue-500"></SiMicrosoftoutlook>
                                <span className="hover:text-blue-400 ">sa.fine@outlook.com</span>
                            </a>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <Link class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                                        Profile
                                    </Link>
                                    <Link class="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                                        Skills
                                    </Link>
                                    <Link class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/notfound">
                                        Projects
                                    </Link>
                                    <Link class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button onClick={handleNavOnMobile} class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <FiMenu className="w-6 text-3xl"></FiMenu>
                            </button>
                        </div>
                    </div>
                </div>
                {!hidden ? <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Home
                        </a>
                        <a class="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Content
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Contact
                        </a>
                    </div>
                </div> : ''}
            </nav>
        </div>

    );
};

export default Header;
