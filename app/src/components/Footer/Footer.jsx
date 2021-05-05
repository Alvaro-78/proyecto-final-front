import React from 'react';
import './Footer.css';

import facebook from  '../../assets/Icons/facebook.png';
import twitter from  '../../assets/Icons/twitter.png';
import instagram from '../../assets/Icons/instagram.png'
import whatsapp from '../../assets/Icons/whatsapp.png'
import pinterest from '../../assets/Icons/pinterest.png'
import linkedin from  '../../assets/Icons/linkedin.png';

const Footer = () => {
    return (
        <div className="footerBody">
            <div className="icons">
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://www.facebook.com/">
                        <img src={facebook} 
                        alt="facebook"/>
                    </a>
                </div>
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://twitter.com/">
                        <img src={twitter} 
                        alt=""/>
                    </a>
                </div>
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://www.instagram.com/">
                        <img src={instagram} 
                        alt=""/>
                    </a>
                </div>
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://www.whatsapp.com/?lang=es/">
                        <img src={whatsapp} 
                        alt=""/>
                    </a>
                </div>
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://www.pinterest.es/">
                        <img src={pinterest} 
                        alt=""/>
                    </a>
                </div>
                <div className="iconContainer">
                    <a className="iconContainer"
                    href="https://www.linkedin.com/in/%C3%A1lvaro-aguerr%C3%A9/">
                        <img src={linkedin} 
                        alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
