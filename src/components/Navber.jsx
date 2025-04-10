import { useState } from "react";
import logo from "../assets/logo2.png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { LINKS } from "../constants";
const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="border-b-2">
            <div className="max-w-8xl mx-auto flex justify-between items-center py-0">
                <div className="pl-2">
                    <a href="#">
                        <img
                            src={logo}
                            width={100}
                            height={10}
                            alt="VastuSpaze"
                        />
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl pr-2 focus:outline-none"
                        aria-lebel={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>

                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className="uppercase text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}
            >
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        className="uppercase text-lg font-medium block py-2 tracking-wide"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navber;
