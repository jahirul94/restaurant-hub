'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li><Link className="nav-link" href="/">All Restaurant</Link></li>
        <li><Link className="nav-link" href="/">About Us</Link></li>
        <li><Link className="nav-link" href="/">Contact</Link></li>
    </>



    return (
        <nav className="bg-gray-800 py-4">
            <div className="mx-auto flex justify-between items-center px-4 md:px-10">
                <div className="text-white font-bold text-xl">Restaurant Hub</div>
                {/* Hamburger menu for mobile */}
                <div>
                    <ul className="hidden md:flex">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-between md:hidden">
                    <h2 onClick={toggleNavbar} className="text-white">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </h2>
                </div>
                {/* Navbar links */}
            </div>
            {isOpen && <div className="relative md:hidden">
                <ul className="absolute right-0 top-4 bg-gray-800 text-white px-4 pb-6 rounded-bl-xl">
                    {navLinks}
                </ul>
            </div>}
        </nav>
    );
};

export default Navbar;