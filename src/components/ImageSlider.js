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

    const optimizeImage = (imageUrl) => {
        const optimizedUrl = imageUrl + "?w=530&h=400&q=85";
        return optimizedUrl;
    };

    return(
        <div className="imgslider">
            <Slider {...settings}>
                {images.map((item) => {
                    const optimizedSrc = optimizeImage(item.src);
                    return(
                        <div key={item.id}>
                            <img src={optimizedSrc} alt={item.alt} loading="lazy"/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}