import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AppImages } from "../../constant/appImages";

export const AboutCompoent = () => {
    const leftPoints = [
        "The business applications",
        "Revolutionary catalysts chang",
        "Humour for chang seamlessly"
    ];

    const rightPoints = [
        "Velit esse cillum dolore eu",
        "Duis aute dolor in volupte",
        "Refresing to get a"
    ];
    return (
        <div style={{ padding: 20 }} className="w-full bg-gray-100 flex flex-col lg:flex-row items-center justify-center px-4 md:px-10 py-10 space-y-10 lg:space-y-0">
            {/* -----------------left side------------------------------ */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                <img src={AppImages.aboutimg1} className="w-[250px] md:w-[350px] lg:w-[400px] object-contain z-10" />
                <img src={AppImages.aboutimg2} style={{ marginLeft: -100 }} className="absolute top-5 right-5 md:top-10 md:right-10 w-[180px] md:w-[250px] lg:w-[300px] border-[8px] border-white shadow-lg rounded z-10 " />
            </div>
            {/* --------------right side---------------------- */}
            <div style={{ padding: 20, }} className="w-full lg:w-1/2 flex flex-col px-4">
                <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-4" style={{ padding: 3 }}></div>
                <span className="text-orange-400 text-sm font-bold mb-2" style={{ paddingTop: 10 }}>ABOUT OUR COMPANY</span>
                <span className="text-black text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-3xl sm:text-5xl md:text-6xl" style={{ paddingTop: 10 }}>Professional IT Experts for Your Tech Solutions</span>
                <span className="text-black text-sm md:text-base mb-6" style={{ paddingTop: 20 }}>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors just not an only professions</span>
                {/* Points List */}
                <div className="flex flex-col md:flex-row justify-between gap-8 border-b-1 border-gray-400" style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        {leftPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-3  p-3 rounded-md transition">
                                <CheckCircleIcon sx={{ color: 'orange', fontSize: 28 }} />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-1/2 ">
                        {rightPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-3  p-3 rounded-md transition">
                                <CheckCircleIcon sx={{ color: 'orange', fontSize: 28 }} />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom Buttons Section */}
                <div style={{ padding: 20 }} className="flex flex-col sm:flex-row  justify-around items-center w-full bt-6 gap-6">
                    <div  className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-orange-400 cursor-pointer p-4">
                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                        <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">Explore now</span>
                    </div>


                    <div className="flex items-center ">
                        <img src={AppImages.co} className="w-15 h-15 rounded-full border-2 border-orange-400 object-cover" alt="Co-founder" />
                        <div style={{ paddingLeft: 10 }} className="flex flex-col">
                            <span className="text-black font-semibold">jhon martin</span>
                            <span className="text-gray-700 font-medium">Co founder</span>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}