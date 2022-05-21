import React from "react";
import TitleSection from "../Components/titleSection";
import '../Styles/about.css';
import aboutImg from '../Images/about-us.jpg';


class About extends React.Component{
    render() {
        return (
            <div className='about-section'>
                <div className='container'>
                    <TitleSection title='درباره ما بیشتر بدانید'></TitleSection>
                </div>
                <div className='container'>
                   <div className='row'>
                       <div className='col-md-7 col-sm-6 col-xs-12 about-section-row1'>
                           <div className='about-section-texts'>
                               <span className='about-section-text-title'>همه چیز در مورد تیم ما و فروشگاه</span>
                               <span className='about-section-text-desc'>
                                   <p>
                                        بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                   </p>
                               </span>
                               <span className='about-section-text-icons'>
                                   <ul>
                                       <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                                       <li><a href='#'><i className='fa fa-linkedin'></i></a></li>
                                       <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                                       <li><a href='#'><i className='fa fa-telegram'></i></a></li>
                                   </ul>
                               </span>

                           </div>
                       </div>
                       <div className='col-md-5 col-sm-6 col-xs-12 about-section-row2'>
                           <div className='about-section-image'><img src={aboutImg}/></div>
                       </div>
                   </div>
                </div>


            </div>
        );
    }
}



export default About;