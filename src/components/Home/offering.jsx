// CustomCarousel.js
import React, { useRef } from "react";
import { AppImages } from "../../constant/appImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useScreenWidth } from "../../hooks/screenWidth";




export const Offering = ({ deviceType }) => {
    const screenWith = useScreenWidth()
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200, // laptops
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992, // tablets landscape
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // tablets portrait
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480, // mobile phones
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="flex justify-center">
            <div className="flex justify-center flex-col items-center w-[90%]" style={{ paddingTop: 10, paddingBottom: 20 }}>
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 md:px-10 py-5" style={{ padding: 10 }}>
                    <div className="flex flex-col md:w-1/2 px-2 md:px-5" style={{ padding: 20 }}>
                        <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" style={{ padding: 3 }}></div>
                        <span className="text-orange-400 text-sm font-bold" style={{ paddingTop: 10 }}>What we’re Offering</span>
                        <span className="text-black text-6xl text-3xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ paddingTop: 10, fontSize: screenWith == 430 && '32px', }}>Services Built Specifically For Your Business</span>
                    </div>
                    <div style={{ padding: 10, width: screenWith <= 480 ? '100%' : screenWith <= 840 ? "15%" : screenWith <= 1024 ? '12%' : '8%' }} className="flex justify-between items-center space-x-3 mt-4 md:mt-0">
                        <button className=" hover:bg-gray-300 p-2 rounded-full flex justify-center items-center" style={{ padding: 10, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onClick={() => sliderRef.current.slickPrev()}><ArrowBackIosIcon fontSize="small" /></button>
                        <button className=" hover:bg-gray-300 p-2 rounded-full flex justify-center items-center" style={{ padding: 10, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onClick={() => sliderRef.current.slickNext()}><ArrowForwardIosIcon fontSize="small" /></button>

                    </div>
                </div>

                <div style={{ padding: 20, margin: 20, }} className="w-full">

                    <Slider {...settings} ref={sliderRef}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} style={{ padding: 5 }}>
                                <div
                                    className="group relative overflow-hidden bg-white flex flex-col items-center rounded shadow-xl"
                                    style={{

                                        paddingTop: 5,
                                        paddingBottom: 10,
                                        margin: 10,
                                        borderLeft: '2px solid #fb923c',
                                        borderRight: '2px solid #fb923c'

                                    }}
                                >
                                    <div className="absolute inset-0 bg-orange-400 z-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />

                                    <span className="relative z-10 text-base sm:text-base md:text-xl lg:text-2xl font-bold text-center mb-4 px-2" style={{ padding: 15 }}>
                                        Strategy and digital marketing
                                    </span>
                                    <img
                                        src={AppImages.brandLogo1}
                                        className="w-44 h-auto object-contain relative z-10"
                                        alt="brand"
                                        style={{ padding: 10 }}
                                    />
                                    <span
                                        className=" relative z-10 text-base text-center mt-4 px-2 font-bold"
                                        style={{ padding: 10 }}

                                    >
                                        Read More
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>



            </div>
        </div>
    );
};

