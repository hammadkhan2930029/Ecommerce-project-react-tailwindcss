import Diversity1Icon from '@mui/icons-material/Diversity1';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { AppImages } from '../../constant/appImages';

export const ChoosUs = () => {
    const features = [
        {
            icon: <Diversity1Icon sx={{ fontSize: '34px', color: 'orange' }} />,
            title: 'Web Growth',
            desc: 'Good knowledge because you do something many times.',
        },
        {
            icon: <WaterfallChartIcon sx={{ fontSize: '34px', color: 'orange' }} />,
            title: 'Marketing',
            desc: 'Grow your brand with proper strategy.',
        },
        {
            icon: <SignalCellularAltIcon sx={{ fontSize: '34px', color: 'orange' }} />,
            title: 'Business Analytics',
            desc: 'Analyze your data with the latest tools.',
        },
        {
            icon: <RecyclingIcon sx={{ fontSize: '34px', color: 'orange' }} />,
            title: 'Sustainability',
            desc: 'Build eco-friendly and cost-effective solutions.',
        },
    ];
    return (
        <div className="bg-gray-200 w-full flex flex-col md:flex-col sm:flex-col lg:flex-row justify-center items-center">
            <div className=" w-full lg:w-1/2 md:w-full sm:w-full p-12 md:flex-col md:justify-center md:items-center ">
                <div className="flex flex-col justify-center items-start md:w-1/2 p-5 md:px-5 lg:w-[100%] " >
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" ></div>
                    <span className="text-orange-400 text-sm font-bold" >WHY CHOOSE US</span>
                    <span className="text-black  md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-3xl sm:text-5xl " >Building a design easy for business</span>
                </div>
                <div className='flex flex-row flex-wrap '>
                    {features.map((item, index) => (
                        <div className='group flex flex-col items-center justify-center lg:justify-start md:justify-start sm:justify-center  w-[90%] md:w-[46%] lg:w-[45%] sm:[90%]  p-4 m-4 '>
                            <div className='flex flex-col lg:flex-row md:flex-row sm:flex-col justify-start items-center  w-full'>
                                <div className='w-[70px] h-[70px] bg-white group-hover:bg-black rounded-full flex justify-center items-center shadow-full'>
                                    {item.icon}
                                </div>
                                <span className='text-xl font-bold pl-2 text-black'>{item.title}</span>
                            </div>
                                <span className='text-md text-gray-600 pt-5 text-center md:text-start lg:text-start sm:text-center'>{item.desc}</span>
                        </div>
                    ))}
                </div>


            </div>
            {/* ---------------------------------right--------------------- */}
            <div className=" w-full lg:w-1/2 md:w-full sm:w-full bg-cover bg-center h-[800px] flex justify-start items-center" style={{ backgroundImage: `url(${AppImages.project1})` }}>
                <div>
                    <div className='bg-black w-[350px] p-12 flex justify-center'>
                        <span className='text-white text-2xl lg:text-4xl md:text-3xl sm:text-2xl  text-center'>We’re bringing latest business innovation in to the digital world</span>
                    </div>
                    <div className='bg-orange-400 w-[350px] flex justify-center  p-5'>
                        <span className='text-lg text-center font-semibold'>

                            Top quality marketing solutions
                        </span>
                    </div>
                </div>

            </div>


        </div>

    )
}