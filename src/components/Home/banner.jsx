import { AppImages } from "../../constant/appImages";

AppImages
export const BannerComponent = () => {
    return (
        <div style={{ backgroundImage: `url(${AppImages.banner})`, width: '100%', height: '500px', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '20px', padding: '40px' }}>
            <div className="flex flex-col justify-center items-center w-full border-1 border-white" style={{ height: '430px', boxShadow: 'inset 60px 61px 172px 88px rgba(72, 77, 77, 0.6)' }}>
                <span style={{ padding: 10 }} className="w-full lg:w-1/2 text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 text-3xl sm:text-5xl md:text-6xl text-center">IT Solutions & Services at Your Fingertips</span>
                <div style={{ padding: 10 }} className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-orange-500 cursor-pointer">
                    <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                    <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Discover more</span>
                </div>
            </div>
        </div>
    )
}