import AddIcon from '@mui/icons-material/Add';
import { AppImages } from '../../../constant/appImages';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Formik } from 'formik';
export const Details = () => {
    return (
        <div className="bg-white w-full p-4 sm:p-4 md:p-8 lg:p-15 flex flex-col md:flex-col lg:flex-row justify-evenly items-center ">
            {/* -----left------ */}
            <div className="w-full md:w-full lg:w-[30%]">
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
                {/* -------------contact us------------------ */}
                <div className="relative w-full h-[450px] mt-15 shadow-xl rounded-md">
                    <img
                        src={AppImages.servicesOne}
                        alt="Cover"
                        className="w-full h-full object-cover rounded-md"
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
                {/* -------------Quick Contact------------------ */}
                <Formik initialValues={{ email: '', message: '' }}>
                    {({ handleBlur, handleChange, handleSubmit, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='bg-gray-100 p-10 flex flex-col justify-center items-center mt-10 shadow-xl rounded-md border-1 border-gray-200'>
                                <h2 className='text-black font-bold text-2xl p-3'>Quick Contact</h2>
                                <input
                                    placeholder='Email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    type='email'
                                    name='email'
                                    className='outline-none bg-white p-3 w-full rounded text-black border-1 border-gray-200'
                                />
                                <textarea
                                    placeholder='Message'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    rows={4}
                                    className='outline-none bg-white p-3 w-full rounded text-black mt-2 border-1 border-gray-200'


                                />
                                <div className="group relative overflow-hidden w-full sm:w-full flex justify-center rounded bg-orange-400 cursor-pointer p-5 mt-5">
                                    <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                    <span className="relative z-10 text-md font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Submit</span>
                                </div>

                            </div>
                        </form>
                    )}
                </Formik>





            </div>
            {/* -----Right------ */}
            <div className="w-full md:w-full lg:w-[65%] mt-5 sm:mt-5 md:mt-5">
                <div>
                    <img src={AppImages.slide5} className='w-full h-[640px] shadow-xl rounded-md' />
                </div>
                <div className='flex flex-col mt-5 p-5'>
                    <span className='text-black font-bold text-2xl'>Data Visualization</span>
                    <span className='text-lg text-gray-600 pt-4'>
                        Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley</span>
                        <div className='bg-white p-5 mt-5 mb-5 shadow-lg border-l-6 border-orange-400'>
                            <span className='text-lg text-gray-900 pt-4'>Lorem Ipsum is simply free text not dummy available typesetting industry been the industry standard Lorem ipsum is simply free text</span>
                        </div>
                        <span className='text-lg text-gray-600 pt-4'>
                            It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </span>
                </div>
                <div className='w-full flex flex-row '>
                    <div style={{backgroundImage:`url(${AppImages.web})`}} className='w-1/2 h-[300px] bg-cover bg-center shadow-lg rounded-md'>
                    </div>
                    <div className='flex flex-col p-5'>
                        <span>Our benefits</span>
                        <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>


                    </div>
                </div>

            </div>




        </div>
    )
}