import { AppImages } from "../../constant/appImages";
import { useScreenWidth } from "../../hooks/screenWidth";
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik } from "formik";
import TextField from '@mui/material/TextField';

export const Contact = () => {
    const accordianData = [
        {
            id: 'panel1',
            title: 'Is my technology allowed on tech?',
            content:
                'IT solutions encompass a range of technologies and services designed to address specific business needs...',
        },
        {
            id: 'panel2',
            title: 'How can IT solutions benefit my business?',
            content:
                'They help streamline operations, improve efficiency, and enable data-driven decisions.',
        },
        {
            id: 'panel3',
            title: 'What types of IT solutions are available?',
            content:
                'From software development to cybersecurity and cloud computing.',
        },
        {
            id: 'panel4',
            title: 'What is the implementation for IT solutions?',
            content:
                'Implementation includes planning, setup, integration, and ongoing support.',
        },
    ];

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": { borderColor: "#d1d5db" },
            "&:hover fieldset": { borderColor: "#9ca3af" },
            "&.Mui-focused fieldset": { borderColor: "#fb923c" },
        },
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInputBase-input::placeholder": { color: "white" },
        "& .MuiInputLabel-root.Mui-focused": { color: "#fb923c" },
    };

    return (
        <div className="w-full flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div
                style={{ backgroundImage: `url(${AppImages.contactBg})` }}
                className="w-full lg:w-1/2 min-h-screen bg-cover bg-center flex justify-center items-center p-6 lg:p-10"
            >
                <div className="bg-black/90 w-full max-w-2xl rounded-md shadow-md p-6 md:p-10">
                    <div className="mb-6">
                        <span className="text-orange-400 text-sm font-bold uppercase block">Contact us</span>
                        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mt-2">Write Email</h2>
                    </div>

                    <Formik
                        initialValues={{ name: '', email: '', subject: '', phone: '', message: '' }}
                        onSubmit={(value) => {
                            console.log(value)
                        }}>
                        {({ values, handleBlur, handleChange, handleSubmit }) => (
                            <div className="w-full flex justify-center items-center p-8">
                                <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4 items-center">
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Enter Name"
                                        sx={inputStyle}
                                        name="name"
                                        type="text"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        name="email"
                                        placeholder="Enter Email"
                                        sx={inputStyle}
                                    />
                                    <div className="w-full flex flex-col md:flex-row gap-4">
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            variant="outlined"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Subject"
                                            sx={inputStyle}
                                            name="subject"
                                            value={values.subject}

                                        />
                                        <TextField
                                            fullWidth
                                            label="Phone number"
                                            variant="outlined"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Phone number"
                                            sx={inputStyle}
                                            value={values.phone}
                                            name="phone"

                                        />
                                    </div>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Message"
                                        multiline
                                        rows={4}
                                        sx={inputStyle}
                                        value={values.message}
                                        name="message"


                                    />
                                    <div style={{ padding: 10 }} className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded bg-orange-500 cursor-pointer">
                                        <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                        <span className="relative z-10 text-lg font-semibold text-black group-hover:text-orange-400 transition-colors duration-300">Explore now</span>
                                    </div>

                                </form>
                            </div>



                        )}
                    </Formik>
                </div>
            </div>

            {/* Right Side - Accordion */}
            <div
                style={{ backgroundImage: `url(${AppImages.pattern2})` }}
                className="w-full lg:w-1/2 min-h-screen bg-cover bg-center p-6 lg:p-10 flex flex-col justify-center"
            >
                <div className="mb-6">
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 h-1 rounded mb-2"></div>
                    <span className="text-orange-400 text-sm font-bold block">QUESTIONS & ANSWERS</span>
                    <h2 className="text-black text-3xl md:text-5xl font-bold leading-tight mt-2">
                        See Frequently Asked Questions
                    </h2>
                </div>

                <div className="mt-4">
                    {accordianData.map((item) => (
                        <Accordion
                            key={item.id}
                            expanded={expanded === item.id}
                            onChange={handleChange(item.id)}
                            sx={{ marginTop: 2 }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${item.id}-content`}
                                id={`${item.id}-header`}
                                sx={{
                                    backgroundColor: expanded === item.id ? '#fb923c' : 'white',
                                    transition: 'background-color 0.3s',
                                }}
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>

    );
};
