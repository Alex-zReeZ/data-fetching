import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        console.log("clicked");
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`flex ${isOpen ? 'flex-col gap-5' : 'flex-row '} items-center justify-between p-6 bg-gray-800 text-white w-full`}>
            <img src="/favicon.svg" alt="logo" className="w-12"/>

            <div
                id="menu"
                onClick={() => toggleNavbar()}
                className="lg:hidden cursor-pointer flex flex-col"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white mb-1"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </>
                )}
            </div>

            <ul
                className={`${
                    isOpen ? "block" : "hidden"
                } lg:flex lg:items-center lg:space-x-8`}
            >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;