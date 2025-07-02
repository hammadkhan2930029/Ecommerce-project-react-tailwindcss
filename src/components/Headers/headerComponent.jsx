import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { AppImages } from "../../constant/appImages"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useScreenWidth } from "../../hooks/screenWidth";
import StylishMenuIcon from "../../assets/images/stylishIcon";
import { MenuDrawer } from '../Home/drawer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


export const HeaderComponent = () => {
    const navigate = useNavigate();


    const ScreenWidth = useScreenWidth()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [drawerOpen, setDrawerOpen] = useState()



    return (
        <div>

            <div >
                {ScreenWidth > 1024 ? (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full flex flex-col md:flex-row shadow-md" >
                        <div className="md:w-1/5 bg-black flex justify-center items-center ">
                            <img src={AppImages.logo} className="w-52 h-22 object-contain " alt="logo" />

                        </div>
                        <div className="md:w-4/5 border-l-8 border-orange-400">
                            <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-gray-100 px-4 py-2 md:py-4" style={{ padding: 15 }}>
                                <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 text-sm lg:text-base w-full lg:w-3/4">
                                    <div className="flex items-center gap-1 text-black text-sm ">
                                        <AccessTimeFilledIcon className="text-orange-400 text-sm" />
                                        <span > Sunday - Friday: 9.am - 8pm</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-black text-sm">
                                        <FmdGoodIcon className="text-orange-400 text-sm" />
                                        <span>  Richardson, California 62639</span>

                                    </div>

                                    <div className="flex items-center gap-1 text-sm text-black">
                                        <EmailIcon className="text-sm text-orange-400" />
                                        <span > needhelp@company.com</span>

                                    </div>


                                </div>
                                <div className="flex flex-row justify-evenly items-center w-full lg:w-2/8">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-orange-400 w-10 h-10 rounded-full flex justify-center items-center">
                                            <CallIcon className="text-white text-lg" />
                                        </div>
                                        <span className="text-black"> +1234567789</span>
                                    </div>
                                    {ScreenWidth <= 1290 ? null : (

                                        <div className="flex gap-2">
                                            <FacebookIcon className="text-black text-lg" />
                                            <TwitterIcon className="text-black text-lg" />
                                            <LinkedInIcon className="text-black text-lg" />
                                            <YouTubeIcon className="text-black text-lg" />
                                        </div>
                                    )}



                                </div>

                            </div>
                            {/* Navigation Bar */}
                            <div className="flex flex-col md:flex-row justifay-between items-center px-4 py-3" style={{ padding: 10 }}>
                                <div className="flex w-full md:w-4/5 items-center border-r-2 border-gray-200" style={{ padding: 20 }}>
                                    <div className="flex w-full md:w-4/5 gap-8 text-black text-lg">
                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={() => navigate('/')}>Home</span>

                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={()=> navigate('/services')}>Services</span>
                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={() => navigate('/about')}>About</span>
                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={handleClick}>Pages</span>
                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={() => navigate('/contact')}>Contact</span>
                                        <span className="hover:text-orange-400 cursor-pointer font-semibold uppercase" onClick={() => navigate('/faqs')}>FAQs</span>


                                    </div>
                                    <div>

                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Menu>
                                    </div>

                                    <div className="w-1/4 flex justify-end">
                                        <SearchIcon className="text-black text-3xl cursor-pointer" />

                                    </div>

                                </div>

                                <div className="flex justify-center items-center gap-4 mt-3 md:mt-0 md:w-1/5">
                                    <ShoppingCartIcon className="text-black text-4xl cursor-pointer" />
                                    {/* <button style={{ padding: 20 }} className="bg-orange-400 text-white text-lg md:text-sm  rounded hover:bg-orange-600 cursor-pointer font-semibold">Request a Quote</button> */}
                                    <div className="group relative overflow-hidden w-[75%] sm:w-[75%] flex justify-center rounded bg-orange-400 cursor-pointer p-4 mt-5">
                                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                        <span className="relative z-10 text-md font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Request a Quote</span>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </motion.div>
                ) : (
                    <div

                        className="flex justify-between items-center w-full bg-white shadow" style={{ padding: '15px' }}>
                        <div className="md:w-1/5  flex justify-center items-center ">
                            <img src={AppImages.logo2} className="w-38 object-contain" alt="logo" />

                        </div>
                        <div onClick={() => setDrawerOpen(true)}>
                            <StylishMenuIcon />

                        </div>
                    </div>
                )}
                <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
            </div>
        </div>
    )
}