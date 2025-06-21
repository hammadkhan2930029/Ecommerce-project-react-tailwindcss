import { AppImages } from "../../constant/appImages";

export const BannerSection2 = () => {
    return (

            <div className="w-full flex  flex-col lg:flex-row h-auto lg:h-[400px]">
                {/* Left Side Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={AppImages.aboutimg2}
                        alt="Hackathon Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side Content */}
                <div className="w-full lg:w-1/2 bg-orange-400 flex flex-col justify-center items-start px-6 lg:px-16 py-10 relative overflow-hidden">
                    {/* Optional background pattern - use an SVG or background image if needed */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/path/to/your/pattern.svg')] bg-no-repeat bg-cover"></div>

                    <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-tight z-10">
                        The Passion Trying & Skill Can <br /> Make A Top Performing Company
                    </h2>

                    <div  className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-black cursor-pointer p-2 mt-10">
                        <div className="absolute inset-0 bg-gray-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                        <span className="relative z-10 text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">Explore now</span>
                    </div>
                </div>
            </div>

    );
};
