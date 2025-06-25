import React from 'react';
import Slider from 'react-slick';
import { AppImages } from '../../constant/appImages';
import { useScreenWidth } from '../../hooks/screenWidth';

const carouselItems = [
    { image: AppImages.brandLogo1 },
    { image: AppImages.brandLogo2 },
    { image: AppImages.brandLogo3 },
    { image: AppImages.brandLogo4 },
    { image: AppImages.brandLogo5 },
    { image: AppImages.brandLogo1 }, // repeat for demo
    { image: AppImages.brandLogo2 },
];

export const BrandsLogo = () => {
    const screenWidth = useScreenWidth()

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // mobile phones
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 360, // mobile phones
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    return (
       <div className="outline-none focus:outline-none">
  <Slider {...settings}>
    {carouselItems.map((item, index) => (
      <div
        key={index}
        className="flex justify-center items-center outline-none focus:outline-none"
      >
        <img
          src={item.image}
          alt={`brand-${index}`}
          className="w-[200px] h-[150px] object-contain bg-white rounded outline-none focus:outline-none"
          style={{
            width:
              screenWidth <= 480
                ? "330px"
                : screenWidth <= 360
                ? "270px"
                : null,
            margin: 20,
            padding: 10,
            boxShadow:
              "0 6px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
          tabIndex={-1}
        />
      </div>
    ))}
  </Slider>
</div>

    );
};
