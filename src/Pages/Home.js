import React from "react";
import '../Styles/home.css';
import TitleSection from "../Components/titleSection";
import SubscribeSection from "../Components/SubscribeSection";
import Footer from "../Components/Footer";

import HomeProductsRequest from "../Requests/HomeProductsRequest";






// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Autoplay } from 'swiper';


import Product from "../Components/Product";
import '../Styles/card.css';
import '../Styles/slider.css';





























class Home extends React.Component{
    state={
        products:[]
    }
    componentDidMount() {
      const HomeProducts =  HomeProductsRequest.get('http://localhost:3000/Data/products.json');
      HomeProducts.then(res=>{
          const data = res.data.products;
          this.setState({
              products:this.state.products.concat(data)
          })

      })
    }

    render(){
        return(
            <div>
                <div className='header-background'>
                 <div className='header-background-box'>
                     <span className='header-background-box-title'>بازطراحی قالب فروشگاهی پیکسی با ریکت</span>
                     <span className='header-background-box-line'></span>
                     <span className='header-background-box-desc'>
                         <p>
                              طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند
                         </p>
                     </span>
                     <a href='#' className='header-background-box-btn'>سفارش دهید ..</a>
                 </div>
                </div>
                <div className="container">
                    <div className='slider-section'>
                    <div className="row">
                        <div className="col-12">
                            <TitleSection title='جدید ترین  محصولات'></TitleSection>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Swiper

                                spaceBetween={40}
                                modules={[Autoplay]}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={true}
                                className="mySwiper"

                                breakpoints={{
                                    "640": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 20
                                    },
                                    "768": {
                                        "slidesPerView": 3,
                                        "spaceBetween": 40
                                    },
                                    "1024": {
                                        "slidesPerView": 4,
                                        "spaceBetween": 50
                                    }
                                }}


                                autoplay = {{
                                    "delay": 2500,
                                    "disableOnInteraction": false
                                }}

                            >
                                {
                                    this.state.products.map(item=>(item.newest === true && item.rate >= 40 ? <SwiperSlide><Product id={item.id} title={item.name} price={item.price} image={item.img}></Product></SwiperSlide>:null))
                                }



                            </Swiper>
                        </div>
                    </div>
                    </div>
                    <div className='slider-section'>
                    <div className="row">
                        <div className="col-12">
                            <TitleSection title='محبوب ترین محصولات'></TitleSection>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Swiper

                                spaceBetween={40}
                                modules={[Autoplay]}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={true}
                                className="mySwiper"

                                breakpoints={{
                                    "640": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 20
                                    },
                                    "768": {
                                        "slidesPerView": 3,
                                        "spaceBetween": 40
                                    },
                                    "1024": {
                                        "slidesPerView": 4,
                                        "spaceBetween": 50
                                    }
                                }}


                                autoplay = {{
                                    "delay": 3500,
                                    "disableOnInteraction": false
                                }}

                            >
                                {
                                    this.state.products.map(item=>(item.rate >= 90 ? <SwiperSlide><Product id={item.id} title={item.name} price={item.price} image={item.img}></Product></SwiperSlide>:null))
                                }



                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>


            </div>

        );
    }
}


export default Home;