import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        console.log("clicked");
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`flex ${isOpen ? 'flex-col gap-5' : 'flex-row '} items-center justify-between p-6 bg-gray-800 text-white w-full`}>
            <h1 className="text-2xl font-bold">Logo</h1>

            <div
                id="menu"
                onClick={() => toggleNavbar()}
                className="lg:hidden cursor-pointer flex flex-col"
            >
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
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