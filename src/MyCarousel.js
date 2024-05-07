import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./MyCarousel.css";
import RedPhone from "./assets/red-phone.svg";
import RedMail from "./assets/red-mail.svg";
import RedLocation from "./assets/red-location.svg";

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <>
        <div className='karusel-div'>
            <p className='clients-stories'>CLIENTS STORIES</p>
            <Slider {...settings} className='karusel-block'>
                <div className='text-and-name-carousel'>
                    <p className='text-carousel'>
                        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    </p>
                    <p className='name-carousel'>Lena Brock, SF</p>
                </div>
                <div className='text-and-name-carousel'>
                    <p className='text-carousel'>
                        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    </p>
                    <p className='name-carousel'>Jay Blake, FL</p>
                </div>
                <div className='text-and-name-carousel'>
                    <p className='text-carousel'>
                        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    </p>
                    <p className='name-carousel'>Alexis Willis, NJ</p>
                </div>
            </Slider>
        </div>
            <div className='sklad'></div>
            <div className='end-part-of-mainpage'>
                <p className='text-in-call-find-email'>YOUR DREAM HOUSE IS ONE STEP AWAY!</p>
                <div className='call-find-email'>
                    <div className='red-telephone'>
                        <img className='red-phone-photo' alt='' src={RedPhone}/>
                        <p className='text-under-red-phone'>Call Us</p>
                        <p className='free-calls'>Free Calls</p>
                        <p className='number-for-connect'>1-800-000-000</p>
                    </div>
                    <div className='red-telephone'>
                        <img className='red-location-photo' alt='' src={RedLocation}/>
                        <p className='text-under-red-phone'>Find Us</p>
                        <p className='free-calls'>500 Terry Francine St.</p>
                        <p className='number-for-connect'>San Francisco, CA 94158</p>
                    </div>
                    <div className='red-telephone'>
                        <img className='red-mail-photo' alt='' src={RedMail}/>
                        <p className='text-under-red-phone'>Email Us</p>
                        <p className='free-calls'>Direct Email</p>
                        <p className='number-for-connect'>info@mysite.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;