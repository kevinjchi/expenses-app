import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (

    <footer className="footer__fill">
       
            <div className="footer__content">
            
            <h3 className="footer__title">Made by {"Kevin Jeu Chiem".toUpperCase()} 
            <p>
            <a href={"https://github.com/kevinjchi/"}> <FontAwesomeIcon icon="stroopwafel" /> </a>
            </p></h3>
            </div>
    </footer>
);

export default Footer;