import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-24 bg-neutral text-neutral-content">
            <div>
                <h1 className='text-xl font-bold'> <span className='bg-white text-blue-500 p-1 rounded mr-1'>Gym</span> baran </h1>
                <p className='mt-2'>We take care of your health with <br /> regular and fun exercise</p>
            </div>
            <div>
                <span className="footer-title">Program</span>
                <a className="link link-hover">Workout</a>
                <a className="link link-hover">Gym</a>
                <a className="link link-hover">Cardio</a>
                <a className="link link-hover">Zumba</a>
            </div>
            <div>
                <span className="footer-title">Blog</span>
                <a className="link link-hover">Daily stretch</a>
                <a className="link link-hover">Daily Workout</a>
            </div>
            <div>
                <span className="footer-title">About us</span>
                <a className="link link-hover">Support</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Address</a>
            </div>
        </footer>
    );
};

export default Footer;