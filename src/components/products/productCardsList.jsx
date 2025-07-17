import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppImages } from '../../constant/appImages';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';
import { productsList } from '../../constant/productList';



export const ProductCardsList = () => {
    const navigate = useNavigate()
    const [clickState, setClickState] = useState({
        isclick1: false,
        isclick2: false
    })
    // --------------------------------
   


    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 8;
    const totalPages = Math.ceil(productsList.length / perPage)
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = productsList.slice(startIndex, endIndex)

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='w-full  p-5 sm:p-5 md:p-20 lg:p-25 bg-white'>
            <div className=' flex flex-col sm:flex-col lg:flex-row md:flex-col justify-between items-start sm:items-start md-items-center lg:items-center'>
                <div >
                    <span>Showing {startIndex}–{endIndex} of {totalPages} results</span>
                </div>
                <div className=' w-full md:w-1/2 sm:w-full lg:w-[30%]  flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-start sm:items-start md:items-center lg:items-center'>
                    {/* ------------------dropdown 1------------------------ */}

                    <div className='mt-2 sm:mt-2 md:m-2 lg:m-2 relative z-50'>

                        <div
                            onClick={() => setClickState(prev => ({
                                ...prev,
                                isclick1: !prev.isclick1,
                                isclick2: false

                            }))}
                            className='relative w-full sm:w-full md:w-[180px] lg:w-[165px] bg-white border-1 border-gray-300 p-3 rounded-md shadow-lg'>
                            <span>Default sorting</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        {clickState.isclick1 &&
                            <div className='w-[165px] absolute flex flex-col bg-white border-1 border-gray-300 p-3 mt-2 rounded-md shadow-lg transform transition duration-500'>
                                <span>menu</span>
                                <span>menu</span>
                                <span>menu</span>
                                <span>menu</span>
                                <span>menu</span>

                            </div>
                        }
                    </div>
                    {/* ------------------dropdown 2------------------------ */}
                    <div className='mt-2 sm:mt-2 md:m-2 lg:m-2 relative z-40'>

                        <div
                            onClick={() => setClickState(prev => ({
                                ...prev,
                                isclick2: !prev.isclick2,
                                isclick1: false
                            }))}
                            className=' w-[200px] bg-white border-1 border-gray-300 p-3 rounded-md shadow-lg'>
                            <span>8 Product per page</span>
                            <KeyboardArrowDownIcon />
                        </div>
                        {clickState.isclick2 &&
                            <div className='w-[200px] absolute flex flex-col bg-white border-1 border-gray-300 p-3 mt-2 rounded-md shadow-lg transform transition duration-500'>
                                <span>menu 2</span>
                                <span>menu 2</span>
                                <span>menu</span>
                                <span>menu</span>
                                <span>menu</span>

                            </div>
                        }
                    </div>

                </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className='w-full flex flex-row justify-bewteen items-center flex-wrap mt-10 sm:mt-10 md:mt-5 lg:mt-5'>
                {paginatedProducts.map((item, index) => (
                    <div 
                    onClick={()=> navigate(`/productDetail/${item.id}`)}
                    className='group w-[100%] sm:w-[100%] md:w-[45%] lg:w-[22%] h-[500px] sm:h-[500px] md:h-[450px] lg:h-[400px]  flex flex-col justify-center items-center m-4 relative'>
                        {item.sale === true &&
                            <div className='w-full absolute flex justify-end  mt-[-350px]'>

                                <span className='text-md bg-yellow-400 pl-2 pr-2 rounded-md m-5'>Sale</span>
                            </div>}
                        <div className='w-full h-[500px] sm:h-[500px] md:h-[450px] lg:h-[400px] bg-gray-200 flex justify-center items-center rounded-md shadow-lg'>

                            <img src={item.image} alt='product1' className='w-[500px]' />
                        </div>
                        <div className='w-full absolute flex justify-end mt-[130px] '>

                            <span className='bg-yellow-400 p-2 rounded-full m-5 hidden group-hover:block'><ShoppingBagOutlinedIcon /></span>
                        </div>

                        <div className='flex flex-col justify-center items-center p-5'>
                            <span className='text-orange-400 text-xl font-bold '>${item.price}</span>
                            <span className='text-black text-lg'>{item.name}</span>

                        </div>
                    </div>

                ))}

            </div>
            {/* Stylish Pagination */}
            <div className="flex justify-center items-center mt-10 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-400 text-white hover:bg-orange-500'}`}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-400 text-white hover:bg-orange-500'}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}