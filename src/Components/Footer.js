import React from "react";
import '../Styles/footerSection.css';
import logo from '../Images/header-logo.png';


class Footer extends React.Component{
    render() {
        return(
            <div className='footer-section'>
                <div className='footer-section-row1'>
                    <span className='footer-section-row1-logo'><img src={logo}></img></span>
                    <span className='footer-section-row1-links'>
                        <ul>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">راهنمای</a></li>
                            <li><a href="#">حریم خصوصی</a></li>
                            <li><a href="#">چگونه کار میکند؟؟</a></li>
                            <li><a href="#">ارتباط با ما</a></li>
                        </ul>
                    </span>
                    <span className='footer-section-row1-icons'>
                         <ul>
                             <li><a href="#"><i className='fa fa-linkedin'></i></a></li>
                             <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                             <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                             <li><a href="#"><i className='fa fa-telegram'></i></a></li>
                        </ul>
                    </span>
                </div>
                <div className='footer-section-row2'>
                    <span>طراحی توسط <a href='#'>AREFMRP</a></span>
                </div>
            </div>
        )
    }
}

export  default Footer;