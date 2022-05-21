import React from "react";
import Swiper from "swiper";
import 'swiper/swiper.min.css';


const SimpleSwiperWithParams = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    }

    return(
        <Swiper {...params}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>Slide 4</div>
            <div>ffff</div>
        </Swiper>
    )
}



export default SimpleSwiperWithParams;
