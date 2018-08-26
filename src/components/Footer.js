import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (

    <footer className="footer">
       
            <div className="footer__content">
            
            <h3 className="footer__title">Made by {"Kevin Jeu Chiem".toUpperCase()} 
            <p>
            <a href="https://github.com/kevinjchi" className="footer__title"> <FaGithub /> </a>
            <a href="https://www.linkedin.com/in/kevinjchi/" className="footer__title"> <FaLinkedinIn /> </a>
            </p></h3>
            </div>
    </footer>
);

export default Footer;