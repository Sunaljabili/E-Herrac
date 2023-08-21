import React from "react";
import CarouselData from "./CarouselData.json"
import Slider from "react-slick"
import "./Carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
function Carousel() {
    return (
        <div className="slider mb-5">
            <Slider {...settings}>
                {CarouselData.slides.map(slide =>
                (
                    <div className="slider-image-item" key={slide.id}>
                        <img src={slide.img} alt={slide.alt} />
                        <div className="overlay">
                            <p className="text">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default Carousel;