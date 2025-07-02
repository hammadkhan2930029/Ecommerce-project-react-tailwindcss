import { useNavigate } from "react-router-dom"
import { AppImages } from "../../constant/appImages"


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
                        style={{ backgroundImage: `url(${item.img})` }}
                        className="bg-cover bg-center w-full  sm:w-[100%] md:w-[40%] lg:w-[30%]  h-[200px] md:h-[300px] lg:h-[400px] rounded shadow-[inset_0_0_50px_20px_rgba(0,0,0,0.7)] flex flex-col justify-between cursor-pointer transform transition duration-500 hover:scale-105">
                        <span className="text-lg lg:text-3xl md:text-2xl sm:text-lg font-bold text-white p-5 ">{item.title}</span>
                        <div className="flex flex-row justify-center items-center  m-2">
                            <img src={item.icon} className="bg-orange-400 w-[100px] h-[100px] p-2 rounded" />
                            <span className="text-white p-2 sm:p-2 md:p-3 lg:p-5 bg-black text-md">{item.description}</span>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}