import React from "react";
import { AppImages } from "../../constant/appImages";

export const Cover = () => {
    return (

        <div
            style={{ backgroundImage: `url(${AppImages.cover3})` }}
            className="bg-cover bg-center w-full h-96 sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
        >
            <div className="w-full h-full  flex items-center">
                <div className="container mx-auto px-4 sm:px-8 md:px-16" >
                    <div className="max-w-4xl">
                        <span className="text-orange-400 text-sm sm:text-base md:text-lg font-semibold block mb-4">
                            Tech Management
                        </span>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                            The Best Source for IT Solutions
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg mb-8">
                            Web designing in a powerful way of not just a profession, but a passion for our company. We tend to believe that the smart look of any website is the first impression on visitors.
                        </p>

                        <div className="group relative overflow-hidden w-1/2  sm:w-1/2 md:w-1/3 lg:w-1/4  flex justify-center rounded-md bg-orange-400 cursor-pointer p-5 mt-5">
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                            <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Discover More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}