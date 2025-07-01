import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import { useScreenWidth } from "../../hooks/screenWidth";
import { AppImages } from "../../constant/appImages";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const TeamMembers = () => {

    const teamMembers = [
        { id: '1', image: AppImages.project1, name: 'Robert Jhonson', designation: 'it director' },
        { id: '2', image: AppImages.project2, name: 'Robert Jhonson', designation: 'it director' },
        { id: '3', image: AppImages.project3, name: 'Robert Jhonson', designation: 'it director' },
        { id: '4', image: AppImages.project1, name: 'Robert Jhonson', designation: 'it director' },


    ]

    return (
        <div >
            <div className="flex justify-center flex-col bg-white p-6 lg:p-12 md:p-8 sm:p-6" >

                <div className="flex  justify-center items-center w-[100%]" >
                    <div className="flex flex-col justify-center items-center  px-2 md:px-5 w-full lg:w-[60%]  sm:w-full" >
                        <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" ></div>
                        <span className="text-orange-400 text-sm font-bold" >MEET OUR TEAM MEMBERS</span>
                        <span className="text-black  text-center md:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-3xl sm:text-5xl " >Meet the professional team behind the success</span>
                    </div>

                </div>
                <div className=" w-full flex flex-col lg:flex-row flex-wrap sm:flex-col justify-center items-center">
                    {teamMembers.map((item, index) => (
                        <div className=" w-[100%] lg:w-[22%] md:w-[55%] sm:w-[100%]  mt-5 lg:m-5 border border-black">
                            <div className="group relative w-[100%]  flex justify-center flex-col items-center overflow-hidden">
                                {/* LEFT ORANGE GRADIENT OVERLAY */}
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"/>
 <div className="flex justify-end absolute rounded-md inset-0 bg-orange-400 z-20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out opacity-80 cursor-pointer"/>
                                {/* RIGHT SOCIAL ICONS BAR */}
                                <div className="absolute top-0 right-0 h-full w-10 flex flex-col justify-end items-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="bg-white flex justify-center flex-col items-center p-2">
                                    <FacebookIcon className="text-black cursor-pointer "  style={{fontSize:'28px'}}/>
                                    <TwitterIcon className="text-black cursor-pointer mt-2" style={{fontSize:'28px'}}/>
                                    <InstagramIcon className="text-black  cursor-pointer mt-2" style={{fontSize:'28px'}}/>
                                    </div>
                                    
                                </div>

                                {/* MAIN IMAGE */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[100%]  object-cover  shadow-md z-10"
                                />
                            </div>



                            {/* <div className="group w-[100%] lg:w-[100%] md:w-[55%] sm:w-[100%] flex justify-center flex-col items-center relative " >
                                <div className="flex justify-end absolute rounded-md inset-0 bg-orange-400 z-20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out opacity-80 cursor-pointer">

                                </div>

                                <img src={item.image} className="w-[100%] lg:w-[100%] md:w-[55%] sm:w-[100%] object-cover  shadow-md z-10" />

                            </div> */}
                            <div className="bottom-0  w-[100%]  text-white text-center mt-5 p-5" >

                                <span className="block font-bold text-black text-2xl uppercase">{item.name}</span>
                                <span className="block uppercase text-sm text-orange-400 font-bold">{item.designation}</span>
                            </div>

                        </div>

                    )

                    )}



                </div>
            </div>


        </div>
    )
}