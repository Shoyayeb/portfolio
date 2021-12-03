import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-800 w-full py-8 ">
            <div className="max-w-screen-xl mx-auto px-4">

                <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">

                    <SocialIcon target="_blank" url="https://www.facebook.com/shafinrepeat" />

                    <SocialIcon target="_blank" url="https://www.linkedin.com/in/soyayeb" />

                    <SocialIcon target="_blank" url="https://github.com/Shoyayeb" />


                    <SocialIcon target="_blank" url="https://www.instagram.com/shafinrepeat" />

                    <SocialIcon target="_blank" url="https://api.whatsapp.com/send?phone=8801647002060" />

                </div>
                <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Created by Shafin
                </div>
            </div>
        </footer>

    );
};

export default Footer;