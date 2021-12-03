
import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SiMicrosoftoutlook } from "react-icons/si";
import { HashLink } from 'react-router-hash-link';


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
            <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-4 sticky">
                    <div className="flex items-center justify-between h-16 sticky">
                        <div className="w-full justify-between flex items-center">
                            <a className="animate-pulse hover:opacity-50 flex-shrink-0 md:mx-0 mx-auto text-xl" href="mailto:sa.fine@outlook.com">
                                <SiMicrosoftoutlook className=" inline mx-2 text-blue-500"></SiMicrosoftoutlook>
                                <span className="hover:text-blue-400 ">sa.fine@outlook.com</span>
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <HashLink className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home#home">
                                        Profile
                                    </HashLink>
                                    <HashLink className="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home#skills">
                                        Skills
                                    </HashLink>
                                    <HashLink className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home#projects">
                                        Projects
                                    </HashLink>
                                    <HashLink className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home#contact">
                                        Contact
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={handleNavOnMobile} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <FiMenu className="w-6 text-3xl"></FiMenu>
                            </button>
                        </div>
                    </div>
                </div>
                {!hidden ? <div className="md:hidden sticky top-0 z-50">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <HashLink className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home#home">
                            Home
                        </HashLink>
                        <HashLink className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home#skills">
                            Skills
                        </HashLink>
                        <HashLink className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home#projects">
                            Projects
                        </HashLink>
                        <HashLink className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home#contact">
                            Contact
                        </HashLink>
                    </div>
                </div> : ''}
            </Disclosure>
        </div>

    );
};

export default Header;
