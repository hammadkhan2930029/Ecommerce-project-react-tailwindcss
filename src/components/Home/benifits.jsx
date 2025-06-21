import React from "react"
import { AppImages } from "../../constant/appImages"

export const CompanyBenifits = () => {

    return (
        <div style={{ padding: 20 }} className="w-full  flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 py-10 space-y-10 lg:space-y-0">
            {/* -----------------left side------------------------------ */}
            <div className="flex flex-row  justify-center items-center">
                <div className="flex flex-col">

                    <img src={AppImages.aboutimg1} className="top-5 right-5 md:top-10 md:right-10 w-full  md:w-[250px] lg:w-[250px] lg:h-[250px] shadow-lg rounded  " style={{margin:'5px'}}/>
                    <img src={AppImages.aboutimg2}  className="top-5 right-5 md:top-10 md:right-10 w-full md:w-[250px] lg:w-[250px] lg:h-[250px]  shadow-lg rounded " style={{margin:'5px'}}/>

                </div>
                <div>
                    <img src={AppImages.aboutimg2}  className="top-5 right-5 md:top-10 md:right-10 w-full md:w-[250px] lg:w-[280px]  shadow-lg rounded  " style={{margin:'5px'}}/>

                </div>
            </div>
            {/* --------------right side---------------------- */}
            <div style={{ padding: 20, }} className="w-full lg:w-1/2 flex flex-col px-4">
                <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-4" style={{ padding: 3 }}></div>
                <span className="text-orange-400 text-sm font-bold mb-2" style={{ paddingTop: 10 }}>Company Benefit’s</span>
                <span className="text-black text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-3xl sm:text-5xl md:text-6xl" style={{ paddingTop: 10 }}>Why Should You Choose Our Agency</span>
                <span className="text-black text-2xl md:text-4xl lg:text-2xl font-bold leading-tight mb-4 text-3xl sm:text-5xl md:text-6xl" style={{ paddingTop: 20 }}>Proin are many variations passages of available.</span>
                <span className="text-black text-sm md:text-base mb-6" style={{ paddingTop: 20 }}>There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words. variations of passages of available</span>
                {/* Points List */}
                <div className="flex flex-col md:flex-row justify-between gap-8 bg-white border-orange-400 border-l-5" style={{ padding: '10px', marginTop: '20px' }}>
                    <span className="text-black text-sm md:text-base mb-6" style={{ padding: '10px' }}>Lorem ipsum dolor sit amet, consectetur notted dipisicing elit sed do eiusmod consectetur notted dipisicing elit</span>
                </div>
                {/* Bottom Buttons Section */}
                <div style={{ padding: 20 }} className="flex flex-col sm:flex-row  justify-start items-center w-full bt-6 gap-6">
                    <div style={{ padding: 10 }} className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-orange-500 cursor-pointer">
                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                        <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">Explore now</span>
                    </div>



                </div>

            </div>

        </div>

    )
}