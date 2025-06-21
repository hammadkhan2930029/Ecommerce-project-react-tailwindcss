import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { AppImages } from '../../constant/appImages';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




export const MenuDrawer = ({ open, onClose }) => {

    const isMobile = useMediaQuery('(max-width:600px)');



    return (
        <div>
            <Drawer open={open} onClose={onClose}
                PaperProps={{
                    sx: {
                        width: isMobile ? '85%' : 350,
                    }
                }}>
                <div className='w-full'>
                    <div className='w-full flex justify-end'>
                        <div className='bg-gray-300 w-10 h-10 flex justify-center items-center shadow-black hover:bg-orange-400 group' onClick={()=> onClose()}>
                            <CloseIcon className='text-black group-hover:text-white'/>

                        </div>
                    </div>
                    <div style={{padding:10}}>
                        <img src={AppImages.logo2} className='w-45 object-contain'/>
                    </div>
                    <div className='flex justify-center '>
                        <div className='flex justify-evenly border-1 border-gray-300 w-75 rounded-full' style={{padding:10,marginTop:20}}>
                            <input type='text' placeholder='Search product....' className='border-none outline-none'/>
                            <SearchIcon className='text-gray-400 text-sm'/>
                        </div>
                    </div>
                    <div className='flex justify-center border-t-1 border-gray-300 flex-col items-center' style={{marginTop:20}}>
                        <div className='w-75 flex justify-between items-center border-b-1 border-gray-300 hover:text-orange-400 hover:border-orange-400 group' style={{padding:10,marginTop:10}} onClick={()=> onClose()}>
                            <span className='text-lg font-semibold uppercase'>Home</span>
                            <div className='flex justify-center items-center bg-black rounded group-hover:bg-orange-400 transition'>
                                <KeyboardArrowRightIcon className='text-white'/>
                            </div>
                        </div>

                         <div className='w-75 flex justify-between items-center border-b-1 border-gray-300 hover:text-orange-400 hover:border-orange-400 group' style={{padding:10,marginTop:10}} onClick={()=> onClose()}>
                            <span className='text-lg font-semibold uppercase'>Pages</span>
                            <div className='flex justify-center items-center bg-black rounded group-hover:bg-orange-400 transition'>
                                <KeyboardArrowRightIcon className='text-white'/>
                            </div>
                        </div>

                         <div className='w-75 flex justify-between items-center border-b-1 border-gray-300 hover:text-orange-400 hover:border-orange-400 group' style={{padding:10,marginTop:10}} onClick={()=> onClose()}>
                            <span className='text-lg font-semibold uppercase'>Shop</span>
                            <div className='flex justify-center items-center bg-black rounded group-hover:bg-orange-400 transition'>
                                <KeyboardArrowRightIcon className='text-white'/>
                            </div>
                        </div>

                         <div className='w-75 flex justify-between items-center border-b-1 border-gray-300 hover:text-orange-400 hover:border-orange-400 group' style={{padding:10,marginTop:10}} onClick={()=> onClose()}>
                            <span className='text-lg font-semibold uppercase'>Services</span>
                            <div className='flex justify-center items-center bg-black rounded group-hover:bg-orange-400 transition'>
                                <KeyboardArrowRightIcon className='text-white'/>
                            </div>
                        </div>

                         <div className='w-75 flex justify-between items-center border-b-1 border-gray-300 hover:text-orange-400 hover:border-orange-400 group' style={{padding:10,marginTop:10}} onClick={()=> onClose()}>
                            <span className='text-lg font-semibold uppercase'>news</span>
                            <div className='flex justify-center items-center bg-black rounded group-hover:bg-orange-400 transition'>
                                <KeyboardArrowRightIcon className='text-white'/>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
            </Drawer>
        </div>
    );
}
