import AddIcon from '@mui/icons-material/Add';
import { AppImages } from '../../../constant/appImages';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export const Details = () => {
    return (
        <div className="bg-white w-full p-15 flex flex-col md:flex-col lg:flex-row justify-center items-center">
            {/* -----left------ */}
            <div className="w-full md:w-full lg:w-1/3  p-5 m-5">
                <div className=' w-full bg-white  rounded-md p-5 shadow-xl border-2 border-gray-200'>
                    <span className='text-2xl p-2 font-bold'>All Services</span>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-black text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>

                </div>
                {/* ------------------------------- */}
                <div className="relative w-full h-[450px] mt-15">
                    <img
                        src={AppImages.servicesOne}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div> {/* Ye transparent black layer */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center  m-3 border-2 border-white">
                        <div className='bg-orange-400 p-5 rounded'>

                            <PhoneInTalkIcon style={{ fontSize: '32px' }} />
                        </div>
                        <h1 className="text-white text-3xl font-bold text-center p-3">
                            Have Any Query <br /> Feel Free Contact
                        </h1>
                        <div className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-orange-400 cursor-pointer p-2 mt-3">
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                            <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Contact us</span>
                        </div>
                    </div>
                </div>



            </div>
            {/* -----Right------ */}
            <div className="w-1/2 bg-green-900 p-5 m-5"></div>




        </div>
    )
}