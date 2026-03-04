import React from 'react';
import './Footer.css';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import mail from '../../assets/images/mail.svg';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer max-w-[1440px] mx-auto grid lg:grid-cols-6 gap-12 text-neutral-content py-10 mt-20 px-2">
                <div className='col-span-2'>
                    <a className="font-bold md:text-xl text-md text-white">CS — Ticket System</a>
                    <p className='w-3/4'>The CS-Ticket System is a centralized customer support management platform designed to efficiently track, prioritize, and resolve customer issues across web and mobile applications.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <div>
                    <h6 className="footer-title">Social Links</h6>
                    <ul className='flex flex-col gap-4'>
                        <li><a className='flex gap-2' href=""><img src={twitter} alt="" /> @CS — Ticket System</a></li>
                        <li><a className='flex gap-2' href=""><img src={facebook} alt="" /> @CS — Ticket System</a></li>
                        <li><a className='flex gap-2' href=""><img src={linkedin} alt="" /> @CS — Ticket System</a></li>
                        <li><a className='flex gap-2' href=""><img src={mail} alt="" /> support@cst.com</a></li>
                    </ul>
                </div>
            </footer>
            <aside className='max-w-[1440px] mx-auto text-center border border-l-0 border-r-0 border-b-0 border-t-[#E5E7EB10] py-6 text-[#FAFAFA] px-2'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </aside>
        </div>
    );
};

export default Footer;