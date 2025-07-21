import { useNavigate } from "react-router-dom"
import { AppImages } from "../../constant/appImages"
import { useEffect } from "react"


export const ServicesCards = () => {
    const navigate = useNavigate()
    const data = [
        { img: AppImages.web, title: 'Website Development', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon1 },
        { img: AppImages.mob, title: 'Graphic Designing', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon2 },
        { img: AppImages.webApplication, title: 'Digital marketing', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon3 },
        { img: AppImages.web, title: 'Internal Networking', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon2 },
        { img: AppImages.mob, title: 'Mob Applications', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon1 },
        { img: AppImages.webApplication, title: 'web Applications', description: 'Duis aute irure dolor in reprehenderit in voluptate.', icon: AppImages.servicIcon3 },

    ]
    

    return (


        <div className="w-full bg-white p-10">
            <div className="w-full  p-2 gap-5 flex flex-wrap justify-center items-center mt-15 mb-10">
                {data.map((item, index) => (
                    <div
                        onClick={() => navigate('/servicesDetails')}
                        key={index}

                        className="relative w-full sm:w-[100%] md:w-[40%] lg:w-[30%] h-[200px] md:h-[300px] lg:h-[400px] rounded shadow-[inset_0_0_50px_20px_rgba(0,0,0,0.7)] flex flex-col justify-between cursor-pointer transform transition duration-500 hover:scale-105 overflow-hidden">


                        <div className="absolute inset-0 bg-gray-300"></div>


                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover" />


                        <div className="relative z-10 flex flex-col justify-between h-full">

                            <span className="text-lg lg:text-3xl md:text-2xl sm:text-lg font-bold text-white p-5 ">{item.title}</span>
                            <div className="flex flex-row justify-center items-center  m-2">
                                <img src={item.icon} className="bg-orange-400 w-[100px] h-[100px] p-2 rounded" />
                                <span className="text-white p-2 sm:p-2 md:p-3 lg:p-5 bg-black text-md">{item.description}</span>
                            </div>
                        </div>

                    </div>


                ))}

            </div>
        </div>
    )
}