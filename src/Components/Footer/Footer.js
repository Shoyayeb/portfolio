
import React, { useEffect } from 'react';
const texts = [
    "Shafin", "a Web Developer",
];
const Footer = () => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (

        <div className="">
            <p>footer</p>

        </div>
    );
};

export default Footer;