import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-[1440px] mx-auto">
                <div className="navbar-start">
                    <a className="font-bold md:text-xl text-md text-[#130B2D]">CS — Ticket System</a>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">+ New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default Header;