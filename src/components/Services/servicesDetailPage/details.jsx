import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AppImages } from '../../../constant/appImages';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Formik } from 'formik';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export const Details = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="bg-white w-full p-4 sm:p-4 md:p-8 lg:p-15 flex flex-col md:flex-col lg:flex-row justify-evenly items-start ">
            {/* -----left------ */}
            <div className="w-full md:w-full lg:w-[30%]">
                <div className=' w-full bg-white  rounded-md p-5 shadow-xl border-2 border-gray-200'>
                    <span className='text-2xl p-2 font-bold'>All Services</span>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
                        </div>
                        <div className='group-hover:bg-black p-1 rounded'>
                            <AddIcon className='text-orange-400 group-hover:text-white' />
                        </div>
                    </div>
                    <div className='group hover:bg-orange-400 bg-gray-100 flex flex-row justify-between mt-4 p-3 rounded'>
                        <div>

                            <span className='group-hover:text-white group-hover:font-semibold text-gray-500 text-lg'>Data Visualization</span>
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
            <div className="w-full md:w-full lg:w-[65%] mt-5 sm:mt-5 md:mt-5 lg:mt-0">
                <div>
                    <img src={AppImages.slide5} className='w-full sm:h-[320px] md:h-[640px] lg:h-[640px] shadow-xl rounded-md' />
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
                {/* ---------------Our Benifits-------------------- */}
                <div className='w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center'>
                    <div style={{ backgroundImage: `url(${AppImages.web})` }} className='w-full sm:w-full md:w-full lg:w-1/2 h-[350px] bg-cover bg-center cursor-pointer shadow-xl rounded-md flex justify-center items-center hover:scale-105 transform transition duration-500 ease-in-out'>
                        <div className='bg-orange-400 w-[80px] h-[80px] rounded-full flex justify-center items-center  hover:scale-115 transform transition duration-500 ease-in-out'>
                            <PlayArrowIcon sx={{ fontSize: '52px' }} />

                        </div>
                    </div>
                    <div className='flex flex-col  p-5'>
                        <span className='text-black font-bold text-2xl p-3'>Our benefits</span>
                        <span className='text-black  text-lg p-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
                        <div className='flex flex-row justify-center'>
                            <div className='bg-orange-400 p-5 rounded hover:bg-black hover:text-white transform transition duration-500 ease-in-out'>
                                <Diversity2Icon style={{ fontSize: '32px' }} />
                            </div>
                            <div className='flex flex-col justify-center pl-5'>
                                <span className='text-lg font-bold'>

                                    Support Management
                                </span>
                                <span>Write a short description, that will describe something useful.</span>
                            </div>

                        </div>
                        <div className='flex flex-row justify-center mt-2'>
                            <div className='bg-orange-400 p-5 rounded hover:bg-black hover:text-white transform transition duration-500 ease-in-out'>
                                <Diversity2Icon style={{ fontSize: '32px' }} />
                            </div>
                            <div className='flex flex-col justify-center pl-5'>
                                <span className='text-lg font-bold'>

                                    Support Management
                                </span>
                                <span>Write a short description, that will describe something useful.</span>
                            </div>

                        </div>

                    </div>
                </div>
                {/* ------------------------------------------------------- */}
                <div className='w-full mt-10'>

                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        className='mt-2 p-2'
                        sx={{ borderRadius: '5px' }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel1' ? '#ff8904' : '#000' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span" style={{ fontWeight: 'bold', color: expanded === 'panel1' ? '#ff8904' : '#000' }}>What are IT solutions?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            IT solutions encompass a range of technologies and services designed to address specific business needs, such as network security, cloud computing, and software development.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        sx={{ borderRadius: '5px' }}
                        onChange={handleChange('panel2')}
                        className='mt-4 p-2'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel2' ? '#ff8904' : '#000' }} />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography component="span" style={{ fontWeight: 'bold', color: expanded === 'panel2' ? '#ff8904' : '#000' }}>How can IT solutions benefit my business?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            IT solutions can improve efficiency, reduce costs, enhance security, and enable scalability by leveraging technology to streamline operations and support growth.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                        className='mt-4 p-2'
                        sx={{ borderRadius: '5px' }}

                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel3' ? '#ff8904' : '#000' }} />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography component="span" style={{ fontWeight: 'bold', color: expanded === 'panel3' ? '#ff8904' : '#000' }}>What types of IT solutions are available?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Common IT solutions include managed IT services, cybersecurity solutions, cloud computing, data analytics, custom software development, and IT consulting services.
                        </AccordionDetails>

                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                        className='mt-4 p-2 '
                        sx={{ borderRadius: '5px' }}

                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel4' ? '#ff8904' : '#000' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span" style={{ fontWeight: 'bold', color: expanded === 'panel4' ? '#ff8904' : '#000' }}>How do I choose the right IT solutions for my business?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Assess your business requirements, consider scalability, evaluate security features, review case studies or testimonials, and consult with IT experts to tailor solutions to your specific needs.
                        </AccordionDetails>
                    </Accordion>

                </div>

            </div>




        </div>
    )
}