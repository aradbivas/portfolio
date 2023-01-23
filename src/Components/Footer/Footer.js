
import React from 'react';
import './Footer.css'
import github from '../images/icone-github-grise.png'
import linkedin from '../images/linkedin-xxl.png'
import mail from '../images/mail-xxl.png'
const Footer = () =>
{
    return <footer className="footer-distributed">

        <div className="footer-right">

                <a href='https://github.com/aradbivas' target='_blank' rel="noreferrer"><img className='footer-image' src={github} alt='github'/></a>
                <a href='https://www.linkedin.com/in/arad-bivas/' target='_blank' rel="noreferrer"><img className='footer-image' src={linkedin}  alt='linkedin'/></a>
                <a href='mailto:bivasarad@gmail.com' target='_blank' rel="noreferrer"><img className='footer-image' src={mail}  alt='mail'/></a>

        </div>

        <div className="footer-left">
            <p>Bivas Arad &copy; 2023</p>
        </div>

    </footer>
}

export default Footer;