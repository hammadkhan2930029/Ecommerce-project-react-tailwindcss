import React from "react";
import { AppImages } from "../../constant/appImages";

export const Cover = () => {
    return (
   
        <div
            style={{ backgroundImage: `url(${AppImages.cover3})` }}
            className="bg-cover bg-center w-full h-96 sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
        >
            <div className="w-full h-full  flex items-center">
                <div className="container mx-auto px-4 sm:px-8 md:px-16" style={{padding:20}}>
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
                        <button style={{padding:15,marginTop:20}} className="bg-orange-400 hover:bg-orange-500 text-black font-semibold text-sm sm:text-base px-6 py-3 rounded shadow-md transition duration-300">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}