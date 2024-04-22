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
        // Extract the part of the URL after the "upload/" segment
        const urlParts = imageUrl.split("/upload/");

        // Image wasn't stored in cloudinary
        if(urlParts.length === 1) return imageUrl
        
        // Add the width and height parameters to the URL
        const transformedUrl = `${urlParts[0]}/upload/w_530,h_400/${urlParts[1]}`;
    
        return transformedUrl;
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