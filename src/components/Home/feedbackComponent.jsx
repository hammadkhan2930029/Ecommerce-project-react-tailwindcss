import React, { useRef } from "react";

import { useScreenWidth } from "../../hooks/screenWidth";
import StarIcon from '@mui/icons-material/Star';
import { motion, useInView } from "framer-motion";
import { AppImages } from "../../constant/appImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const FeedbackComponent = () => {
    // ---------------------------------------

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3, // Default for large screens
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
    const sliderRef = useRef(null);

    // -----------------------------------------------
    const screenWidth = useScreenWidth();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10px' })
    return (
        <div style={{paddingTop:'30px'}}>
            <div className="flex justify-center">

                <div className="flex flex-col justify-center items-center md:w-1/2 px-2 md:px-5" style={{ padding: 20 }}>
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" style={{ padding: 3 }}></div>
                    <span className="text-orange-400 text-sm font-bold text-center" style={{ paddingTop: 10 }}>OUR FEEDBAKCS</span>
                    <motion.span

                        className="text-black text-6xl text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-center"
                        style={{ paddingTop: 10, fontSize: screenWidth == 430 && '32px', }}>What They’re Talking About Company</motion.span>
                </div>
            </div>
            {/* ========================== */}
            <div style={{ marginTop: '20px' }}>
                <Slider {...settings} ref={sliderRef}>

                    {[...Array(4)].map((_, i) => (
                        <div >
                            <div className="group bg-black text-white p-6 rounded-md w-/-2 max-w-md shadow-lg" style={{ padding: '20px', margin: '50px', }}>
                                <div>
                                    <img src={AppImages.aboutimg1} className="rounded-full w-[80px] h-[80px] border-orange-400 border-4 transition-transform duration-1000 group-hover:rotate-y-360" style={{ marginTop: '-50px' }} />
                                </div>
                                <div className="flex mb-3" style={{ padding: '10px' }}>
                                    {[...Array(4)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 text-orange-400" />
                                    ))}
                                    <StarIcon className="h-5 w-5 text-gray-400" />
                                </div>

                                <p className="text-gray-300 text-md leading-relaxed mb-4" style={{ padding: '10px' }}>
                                    Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium
                                    dolore laudantium totam rem aperiam eaque ipsa quae ab illo inventore
                                    veritatis et quasi beatae.
                                </p>

                                <h3 className="font-bold text-3xl text-white group-hover:text-orange-400" style={{ padding: '10px' }}>Michael Bennett</h3>
                                <p className="text-sm text-gray-400" style={{ padding: '10px' }}>IT Officer</p>
                            </div>
                        </div>
                    ))}
                </Slider>



            </div>
        </div>
    )
}