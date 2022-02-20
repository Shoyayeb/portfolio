import { ChatAlt2Icon, ChatIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import profileImage from '../../Images/profile-image.jpg';

const Contact = () => {
    const [open, setOpen] = useState(false)
    const openForm = () => {
        console.log("hji");
        console.log(open);
        if (open) {
            setOpen(false)
        } else if (open === false) {
            setOpen(true)
        }
    }

    const closeForm = () => {
        if (open) {
            setOpen(false)
        } else if (!open) {
            setOpen(true)
        }
    }

    const mainForm = useRef();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form);

        emailjs.sendForm('service_b2vznsg', 'template_tafc3lo', form.current, 'user_DUA2xgdZobdv6TP7oDsmS')
            .then((result) => {
                console.log("result is" + result.text);
                form.current.reset();
                alert("Message Sent");
                setOpen(false)

            }, (error) => {
                console.log("error is" + error.text);
            });
    };
    const sendMainEmail = (e) => {
        e.preventDefault();
        console.log(mainForm);

        emailjs.sendForm('service_b2vznsg', 'template_tafc3lo', mainForm.current, 'user_DUA2xgdZobdv6TP7oDsmS')
            .then((result) => {
                console.log("result is" + result.text);
                mainForm.current.reset();
                alert("Message Sent");
            }, (error) => {
                console.log("error is" + error.text);
            });
    };

    return (
        <div id="contact">


            <div className="flex justify-around md:flex-row flex-col gap-4 my-5 md:my-9">
                {/* address here */}

                <div className="flex items-center justify-center px-5 py-5 w-full md:w-1/2">
                    <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                        <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                            <a href="/" className="block relative">
                                <img alt="profil" src={profileImage} className="mx-auto object-cover rounded-full h-20 w-20 " />
                            </a>
                        </div>
                        <div className="w-full mb-10 flex justify-center">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                                “
                            </div>
                            <div className="text-base text-gray-700 px-5 text-left">
                                <p>Address: Sirajganj, Bangladesh</p>
                                <p>Phone: <a className="underline" href="tel:+8801647002060">+8801647002060</a></p>
                                <span>Email: <a className="underline" href="mailto:sa.fine@outlook.com">sa.fine@outlook.com</a></span>
                                <p> <a href="https://www.linkedin.com/in/soyayeb/" className="underline">www.linkedin.com/in/soyayeb</a></p>
                            </div>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 mt-8">
                                ”
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-md text-green-500 font-bold text-center">
                                Soyayeb Hasan Shafin
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                                sa.fine@outlook.com
                            </p>
                        </div>
                    </div>
                </div>
                {/* contact email here */}
                <div className="flex items-center justify-center px-5 py-5 w-full md:w-1/2">

                    <form class="flex max-w-xl space-x-3" ref={mainForm} onSubmit={sendMainEmail}>
                        <div class="w-full max-w-xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                                <ChatAlt2Icon className="w-7 inline" /> Lets Chat !
                            </div>
                            <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                <div class="col-span-2 lg:col-span-1">
                                    <div class=" relative ">
                                        <input type="text" required aria-required="true" id="user_name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="*Name" name="user_name" />
                                    </div>
                                </div>
                                <div class="col-span-2 lg:col-span-1">
                                    <div class=" relative ">
                                        <input type="text" required aria-required="true" id="user_email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="*Email" name="user_email" />
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <label class="text-gray-700" for="name">
                                        <textarea required aria-required="true" className="resize-none flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="message" placeholder="Enter Your Message" name="message" rows="5" cols="40">
                                        </textarea>
                                    </label>
                                </div>
                                <div class="col-span-2 text-right">
                                    <button type="submit" class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className="py-4 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full fixed bottom-6 right-7" onClick={openForm}>
                <ChatIcon className="w-10"></ChatIcon>
            </button>
            {open ? <div className=" fixed bottom-0 right-4 z-50 border-2 rounded-xl shadow-lg">
                <form className="flex w-full max-w-sm space-x-3" ref={form} onSubmit={sendEmail}>
                    <div className="w-full max-w-2xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">

                        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                            <ChatIcon className="w-7 inline" /> Lets Chat !
                        </div>
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input type="text" required aria-required="true" id="user_name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="*Name" name="user_name" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input type="email" required aria-required="true" id="user_email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="*Email" name="user_email" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700" for="name">
                                    <textarea required aria-required="true" className="resize-none flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="message" placeholder="Enter Your Message" name="message" rows="5" cols="40">
                                    </textarea>
                                </label>
                            </div>
                            <div className="col-span-2 text-right">
                                <button type="submit" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-600 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Send
                                </button>
                            </div>
                            <div className="col-span-2 text-right">
                                <button type="reset" onClick={closeForm} className="py-2 px-4  bg-red-400 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div> : ''}
        </div>
    );
};

export default Contact;