import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlareIcon from '@mui/icons-material/Flare';
import { useScreenWidth } from "../../hooks/screenWidth";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AppImages } from "../../constant/appImages";


export const Management = () => {

    const screenWidth = useScreenWidth()
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 6, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200, // laptops
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992, // tablets landscape
                settings: {
                    slidesToShow: 3,
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
                    slidesToShow: 2,
                },
            },
        ],
    };
    // ------------------------------------------
    const leftPoints = [
        "Reliable Support and Maintenance",
        " Making this the first true generator on the Internet",
        "Various versions have evolved over the years"
    ];
    return (
        <div >
            <div >
                <Slider {...settings}>
                    {[...Array(10)].map((_, index) => (
                        <div className="w-full flex justify-between bg-orange-400 border-t-2 border-black border-b-2" >
                            <div className="flex flex-row justify-evenly items-center" style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <div style={{ padding: 5 }}>

                                    <span className="text-sm lg:text-lg md:text-sm font-bold">IT Managment Services </span>
                                </div>
                                <div style={{ padding: 10 }}>

                                    <FlareIcon sx={{ color: '#000', }} />
                                </div>
                            </div>


                        </div>
                    ))}
                </Slider>

            </div>
            <div className="w-full flex flex-row lg:flex-row sm:flex-col  md:flex-col justify-center items-center bg-black p-2" style={{ height: screenWidth <= 1024 ? "auto" : '100vh', display: 'flex', flexDirection: screenWidth <= 645 ? 'column' : null }}>
                <div>
                    <div className="flex  justify-between items-center w-2/2  px-5 md:px-10 py-5" style={{ height: screenWidth <= 1024 ? "auto" : '100vh' }}>
                        <div className="flex flex-col md:w-2/2 px-2 md:px-5 " style={{ padding: '35px' }}>
                            <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-30 rounded h-1 mb-3" style={{ padding: 3 }}></div>
                            <span className="text-orange-400 text-sm font-bold" style={{ paddingTop: 20 }}>TECH MANAGEMENT</span>
                            <span className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-3xl sm:text-5xl md:text-6xl" >Empowering Businesses Through Technology</span>
                            <span className="text-gray-400 text-sm md:text-base mb-6" style={{ paddingTop: 20 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu convenient scheduling, account fugiat pariatur</span>
                            <div style={{ paddingTop: 20 }}>
                                <TipsAndUpdatesIcon sx={{ color: 'orange', fontSize: '100px' }} />
                                <span className="text-white text-sm sm:text-sm md:text-lg mb-6" style={{ paddingTop: 20, paddingLeft: 10 }}>We’re doing the right thing. The right way</span>
                            </div>
                            <div className="flex flex-col gap-4 w-full" style={{ paddingTop: 20 }}>
                                {leftPoints.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3  p-3 rounded-md transition">
                                        <CheckCircleIcon sx={{ color: 'orange', fontSize: 28 }} />
                                        <span className="text-gray-700 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-orange-400 flex flex-col lg:flex-col justify-around items-center  shadow-lg transition-all duration-300 hover:shadow-2xl" style={{ height: screenWidth <= 1024 ? "auto" : '100vh', width: screenWidth <= 1024 ? "100%" : "400px", padding: '10px' }}>
                    <div className="bg-black rounded-full hover:w-[100px] w-[90px] hover:h-[100px] h-[90px] flex justify-center items-center cursor-pointer shadow-lg">

                        <PlayArrowIcon sx={{ color: '#fff', fontSize: '62px', }} />
                    </div>
                    <span className="text-black text-sm md:text-lg mb-6 font-semibold" style={{ textAlign: 'center', padding: 10 }}>Professional IT technology services you can trust</span>
                </div>
                <div>
                    <img src={AppImages.aboutimg2} style={{ width: screenWidth <= 1024 ? '100%' : '800px', height: screenWidth <= 1024 ? 'auto' : '100vh', resize: 'contain' }} />
                </div>


            </div>

        </div>
    )
}