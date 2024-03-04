import {useState} from "react";
import { getRelativeLocaleUrl } from "astro:i18n";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('Français');
    const [aboutURL, setAboutURL] = useState(getRelativeLocaleUrl("fr"));

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
        if (event.target.value === 'Français') {
            setAboutURL(getRelativeLocaleUrl("fr"));
        } else if (event.target.value === 'Anglais') {
            setAboutURL(getRelativeLocaleUrl("en"));
        }
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav
                className={`flex ${isOpen ? 'block pr-10 ' : 'flex-row px-80'} p-6 bg-gray-800 text-white w-full transition-all duration-300`}>
                <img src="/favicon.svg" alt="logo" className="w-12 sm:ml-32 lg:ml-0"/>

                <div id="menu" onClick={() => toggleNavbar()} className="lg:hidden cursor-pointer">
                    {isOpen ? (
                        <div className="absolute right-6 top-9 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6 text-white right-10 top-12 sm:mr-36">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    ) : (
                        <div className="absolute right-10 top-10 sm:pr-32">
                            <div className="w-6 h-0.5 bg-white mb-1"></div>
                            <div className="w-6 h-0.5 bg-white mb-1"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                        </div>
                    )}
                </div>
                <ul
                    className={`${isOpen ?
                        "transform translate-x-0 transition-all duration-500 ease-in-out flex gap-10 flex-col text-xl text-center mt-24 pt-20 z-30 lg:static lg:mt-0 lg:pt-0 lg:translate-x-0 lg:flex lg:items-center lg:space-x-8 absolute bg-gray-800 text-white w-96 h-full left-0 top-0 overflow-auto"
                        :
                        "-translate-x-full flex gap-10 flex-col text-xl text-center mt-24 pt-20 z-30 lg:static lg:mt-0 lg:pl-28 lg:translate-x-0 lg:flex lg:flex-row lg:w-full lg:items-center lg:pt-1.5  absolute bg-gray-800 text-white w-96 h-full sm:left-0 sm:top-0 lg:right-0 overflow-auto "
                        } 
                lg:flex lg:items-center lg:space-x-8 `
                    }
                >
                    <li>
                        <a href={`${aboutURL}/`} className="hover:text-gray-400">Home</a>
                    </li>
                    <li>
                        <a href={`${aboutURL}login`} className="hover:text-gray-400">Login Page</a>
                    </li>
                    <li>
                        <a href={`${aboutURL}404`} className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>
                <div>
                    <select value={language} onChange={handleLanguageChange} className="bg-gray-800 mt-3 cursor-pointer">
                        <option value="Français">Français</option>
                        <option value="Anglais">Anglais</option>
                    </select>
                </div>
            </nav>

            <ul
                className={`${isOpen ?
                    "transform translate-x-0 transition-all duration-500 ease-in-out flex gap-10 flex-col text-xl text-center mt-24 pt-20 z-30 lg:static lg:mt-0 lg:pt-0 lg:translate-x-0 lg:flex lg:items-center lg:space-x-8 absolute bg-gray-800 text-white w-96 h-full left-0 top-0 overflow-auto"
                    :
                    "-translate-x-full transition-all duration-500 ease-in-out flex gap-10 flex-col text-xl text-center mt-24 pt-20 z-30 absolute bg-gray-800 text-white w-96 h-full left-0 top-0 overflow-auto"
                    } 
                lg:flex lg:items-center lg:space-x-8 `
                }
            >
                <li>
                    <a href={`${aboutURL}/`} className="hover:text-gray-400">Home</a>
                </li>
                <li>
                    <a href={`${aboutURL}login`} className="hover:text-gray-400">Login Page</a>
                </li>
                <li>
                    <a href="${aboutURL}/404" className="hover:text-gray-400">Contact</a>
                </li>
            </ul>
        </>
    );
};


export default Navbar;
