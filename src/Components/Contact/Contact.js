import { ChatIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
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

    // const form = useRef();
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
    return (
        <div>
            <button className="py-4 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full fixed bottom-6 right-7" onClick={openForm}>
                <ChatIcon className="w-10"></ChatIcon>
            </button>
            {open ? <div className=" fixed bottom-0 right-4 z-10 border-2">
                <form class="flex w-full max-w-sm space-x-3" ref={form} onSubmit={sendEmail}>
                    <div class="w-full max-w-2xl px-5 py-10 m-auto bg-white rounded-lg shadow dark:bg-gray-800">

                        <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                            <ChatIcon className="w-7 inline" /> Lets Chat !
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
                                    <textarea required aria-required="true" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="message" placeholder="Enter Your Message" name="message" rows="5" cols="40">
                                    </textarea>
                                </label>
                            </div>
                            <div class="col-span-2 text-right">
                                <button type="submit" class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-600 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Send
                                </button>
                            </div>
                            <div class="col-span-2 text-right">
                                <button type="reset" onClick={closeForm} class="py-2 px-4  bg-red-400 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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