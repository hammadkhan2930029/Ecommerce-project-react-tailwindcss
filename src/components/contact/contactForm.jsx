import { Formik } from 'formik';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
export const ContactForm = () => {
    return (
        <div className="w-full bg-white flex flex-col md:flex-col sm:flex-col lg:flex-row justify-center items-center">
            {/* ----------------------left----------------------------- */}
            <div className="w-full lg:w-1/2 md:w-full sm:w-full p-5 md:p-15 sm:p-5  lg:p-15  lg:h-[700px] md:h-full sm:h-full h-full">
                <div className="flex flex-col justify-start items-start w-full px-2 " >
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" ></div>
                    <span className="text-orange-400 text-sm font-bold" >SEND US EMAIL</span>
                    <span className="text-black  text-center md:text-2xl lg:text-5xl font-bold leading-tight mb-4 text-3xl sm:text-3xl" >Feel free to write</span>
                </div>
                <div>
                    <Formik
                        initialValues={{ email: '', name: '', subject: '', phone: '', message: '' }}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col justify-center items-center'>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder='Your Name'
                                        className='w-full bg-gray-100 p-4 rounded text-lg text-black outline-none m-2'
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder='Email Address'
                                        className='w-full bg-gray-100 p-4 rounded text-lg text-black outline-none m-2'
                                    />
                                    <div className='w-full flex flex-row items-center justify-between m-2'>
                                        <input
                                            type="text"
                                            name="subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                            placeholder='Enter Subject'
                                            className='w-[48%] bg-gray-100 p-4 rounded text-lg text-black outline-none '
                                        />
                                        <input
                                            type="number"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                            placeholder='Enter Phone'
                                            className='w-[48%] bg-gray-100 p-4 rounded text-lg text-black outline-none'
                                        />
                                    </div>
                                    <textarea
                                        type="text"
                                        name="meassge"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        placeholder='Write a Message'
                                        rows={4}

                                        className='w-full bg-gray-100 p-4 rounded text-lg text-black outline-none m-2'
                                    />

                                    <div className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded-md bg-orange-400 cursor-pointer p-5 mt-5">
                                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                        <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Send A Message</span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
            {/* ----------------Right------------------------ */}
            <div className="w-full lg:w-1/2 md:w-full sm:w-full p-5 md:p-15 sm:p-5  lg:p-15 lg:h-[700px] md:h-full sm:h-full h-full">
                <div className="flex flex-col justify-start items-start w-full px-2 " >
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3" ></div>
                    <span className="text-orange-400 text-sm font-bold" >NEED ANY HELP?</span>
                    <span className="text-black  text-center md:text-2xl lg:text-5xl font-bold leading-tight mb-4 text-3xl sm:text-3xl" >Get in touch with us</span>
                </div>
                <div>
                    <span className="text-black text-md text-center  " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</span>
                    <div className='group flex flex-row items-center justify-start mt-10'>
                        <div className='bg-orange-400 p-5 group-hover:bg-black group-hover:text-white'><PhoneInTalkOutlinedIcon style={{ fontSize: '32px' }} /></div>
                        <div className='flex flex-col ml-5 justify-start items-start'>
                            <span className="text-black text-lg text-center font-bold " > Have any question?</span>

                            <span className="text-black text-md text-center  " >Free +92 (020)-9850</span>


                        </div>

                    </div>
                    <div className='group flex flex-row items-center justify-start mt-10'>
                        <div className='bg-orange-400 p-5 group-hover:bg-black group-hover:text-white'><EmailOutlinedIcon style={{ fontSize: '32px' }} /></div>
                        <div className='flex flex-col ml-5 justify-start items-start'>
                            <span className="text-black text-lg text-center font-bold " >Write email</span>

                            <span className="text-black text-md text-center  " >needhelp@company.com</span>


                        </div>

                    </div>
                    <div className='group flex flex-row items-center justify-start mt-10'>
                        <div className='bg-orange-400 p-5 group-hover:bg-black group-hover:text-white'><PlaceOutlinedIcon style={{ fontSize: '32px' }} /></div>
                        <div className='flex flex-col ml-5 justify-start items-start'>
                            <span className="text-black text-lg text-center font-bold " >Visit anytime</span>

                            <span className="text-black text-md text-center  " >66 broklyn golden street. New York</span>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}