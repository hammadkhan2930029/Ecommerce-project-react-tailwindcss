import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import { useScreenWidth } from "../../hooks/screenWidth";
import { AppImages } from "../../constant/appImages";



export const About_ProjectList = () => {

    const projectListImg = [
        { id: '1', image: AppImages.project1, field: 'technology', department: 'it consulting' },
        { id: '2', image: AppImages.project2, field: 'technology', department: 'it consulting' },
        { id: '3', image: AppImages.project3, field: 'technology', department: 'it consulting' },
        { id: '4', image: AppImages.project1, field: 'technology', department: 'it consulting' },
        { id: '5', image: AppImages.project2, field: 'technology', department: 'it consulting' },
        { id: '6', image: AppImages.project3, field: 'technology', department: 'it consulting' },

    ]
    const screenWidth = useScreenWidth()

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1285, // laptops
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
                    slidesToShow: 2,
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
        <div >
            <div className="flex justify-center flex-col bg-white p-15" >

                <div className="flex  justify-center items-center w-[100%]" >
                    <div className="flex flex-col justify-center items-center w-full px-2 md:px-5 lg:w-[60%] md:w-[80%] sm:w-full" >
                        <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" ></div>
                        <span className="text-orange-400 text-sm font-bold" >Our projects list</span>
                        <span className="text-black text-3xl text-center md:text-4xl lg:text-6xl font-bold leading-tight mb-4  sm:text-4xl " >Recently completed our successful projects</span>
                    </div>
                  
                </div>
                <div style={{ padding: '30px' }}>
                    <Slider {...settings}>
                        {projectListImg.map((item, index) => (
                            <div style={{ padding: 30 }}>
                                <div className="group w-[300px]  lg:w-[300px] md:w-[200px] sm:w-[150px] flex justify-center flex-col items-center relative " >
                                    <div className="flex justify-end absolute rounded-md inset-0 bg-orange-400 z-20 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out opacity-80 cursor-pointer">
                                        <div style={{margin:'10px'}} className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg hover:bg-black"><EastIcon  sx={{color:'#000',fontWeight:'bold',fontSize:'26px','&:hover':{color:'#fff'}}}/></div>
                                    </div>


                                        <img src={item.image} className="w-[300px] lg:w-[300px] md:w-[200px] sm:w-[150px] object-cover rounded-md shadow-md z-10" />
                                    <div className="absolute bottom-0  w-[300px] lg:w-[300px] md:w-[200px] sm:w-[150px] text-white text-center z-30"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                                            borderBottomLeftRadius: '8px',
                                            borderBottomRightRadius: '8px',
                                            padding: '10px'
                                        }}>

                                        <span className="block font-bold text-2xl uppercase">{item.department}</span>
                                        <span className="block uppercase text-sm text-orange-400 font-bold">{item.field}</span>
                                    </div>
                                </div>

                            </div>

                        )

                        )}

                    </Slider>


                </div>
            </div>


        </div>
    )
}