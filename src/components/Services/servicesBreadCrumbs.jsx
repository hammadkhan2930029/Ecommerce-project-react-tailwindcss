import { AppImages } from "../../constant/appImages"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ServicesBradCrumbs = () => {
    return (
        <div className="overflow-hidden">
            <div style={{ backgroundImage: `url(${AppImages.b2})` }} className="bg-cover w-full h-[250px] lg:h-[400px] md:h-[300px] sm:h-[250px] object-contain flex justify-start items-center">
                <div className="flex flex-col items-center p-10">

                    <span className=" text-3xl lg:text-6xl md:text-4xl sm:text-2xl font-bold text-white">Services</span>
                    <div className="flex flex-row items-center justify-between w-[160px] mt-4 ">

                        <span className="text-md lg:text-xl md:text-lg sm:text-md font-semibold text-white">Home</span>
                        <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: '16px' }} />
                        <span className="text-md lg:text-xl md:text-lg sm:text-md font-semibold text-white">Services</span>

                    </div>
                </div>


            </div>

        </div>
    )
}