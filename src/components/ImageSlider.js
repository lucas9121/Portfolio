import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react";

export default function ImageSlider({images}) {
    const settings = {
        infinite: true,
        dots: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return(
        <div className="imgslider">
            <Slider {...settings}>
                {images.map((item) => {
                    return(
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} style={{height: '400px', width: '530px'}}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}