import { AppImages } from "../../constant/appImages"
import Diversity3Icon from '@mui/icons-material/Diversity3';
export const ProgressCards = () => {
    return (
        <div className="flex justify-center mt-5 mb-5">
            <div className="flex flex-row w-full justify-between items-center flex-wrap p-15" >
                {[...Array(4)].map((_, index) => (


                    <div style={{ backgroundImage: `url(${AppImages.pattern})` }} className=" group bg-cover bg-center w-[300px] h-[200px] shadow-2xl flex flex-col justify-center items-center rounded-md lg:m-4 md:m-6 sm:m-7 m-7" >
                        <div className="bg-gray-200 w-[100px] h-[100px] flex justify-center items-center group-hover:bg-black group-hover:rounded-full rounded transform transition duration-500 ease-in-out mt-[-70px]" >
                            <Diversity3Icon sx={{fontSize:"34px"}} className="group-hover:text-white"/>

                        </div>
                        <div className="mt-5" >
                            <span className="text-3xl text-black font-semibold">850</span>

                        </div>
                        <div  className="group relative overflow-hidden w-[150px] flex justify-center rounded bg-orange-500 cursor-pointer p-2 mt-2">
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                            <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">it specialist</span>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}