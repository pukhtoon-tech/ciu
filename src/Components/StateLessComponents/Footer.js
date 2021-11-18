import React from 'react';
import './Header.css';







const Footer = () => {
    return (
        <>

            <footer className="bg-dark-footer py-1 footer-bottom text-center">
                <div className="social-icons">
                    <a href="#/">
                        <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                    </a>
                    <a href="#/">
                        <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                    </a>
                    <a href="#/">
                        <i class="fa fa-instagram text-white" aria-hidden="true"></i>
                    </a>
                    <a href="#/">
                        <i class="fa fa-youtube-play text-white" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="font-size-sm pb-2 text-white">© 2015-2018 KDH Research & Communication.All rights reserved. Web Design by Airtight Design.</p>
            </footer>

        </>


    );
}

export default Footer;