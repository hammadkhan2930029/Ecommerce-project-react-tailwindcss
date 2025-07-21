import React, { useEffect, useState, useRef } from 'react';
import { Second_HeaderComponent } from '../Headers/seacondHeader';
import { HeaderComponent } from '../Headers/headerComponent';
import { Footer } from '../Footer/footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppImages } from '../../constant/appImages';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const products = [

    {
        id: 1,
        name: "Case of the Giant Jackal",
        price: 20.0,
        oldPrice: null,
        sale: false,
        image: AppImages.product1,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sizeAndFit: "The model (height 6′) is perfect for you.",
        materialAndCare: "100% Genuine. Machine-wash.",
        colors: [],
        button: 'Add to cart',
    },
    {
        id: 2,
        name: "Case of the Giant Pygmy",
        price: "42",
        oldPrice: null,
        sale: true,
        image: AppImages.product2,
        description: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
        sizeAndFit: "The model (height 6′) is perfect for you.",
        materialAndCare: "100% Genuine. Machine-wash.",
        colors: ["Red", "Blue"],
        button: 'Add to cart',
    },
    {
        id: 3,
        name: "Case of the Miniature",
        price: 16.0,
        oldPrice: 18.0,
        sale: true,
        image: AppImages.product3,
        description: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        sizeAndFit: "The model (height 6′) is perfect for you.",
        materialAndCare: "100% Genuine. Machine-wash.",
        colors: ["Green", "Yellow"],
        button: 'Add to cart',
    },
    {
        id: 4,
        name: "Clue of the Thirteenth",
        price: 45.0,
        oldPrice: null,
        sale: false,
        image: AppImages.product4,
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        sizeAndFit: "The model (height 6′) is perfect for you.",
        materialAndCare: "100% Genuine. Machine-wash.",
        colors: ["Gray"],
        button: 'Add to cart',
    },
];

export const CartPage = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(1)
    const add = () => {
        setCount(count + 1)
    }
    const sub = () => {
        if (count > 1) {

            setCount(count - 1)
        }
    }
    // ----------------------------------

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // ---------------------------------
    const navbarRef = useRef(null)
    const [showTopbar, setShowTopbar] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setShowTopbar(scrollTop > 100); // Show after scrolling 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    console.log('showtopbar :', showTopbar)

    return (
        <div>
            {showTopbar && (
                <div className='fixed top-0 left-0 w-full z-50'><Second_HeaderComponent /></div>)}


            <HeaderComponent ref={navbarRef} />
            <div>
                <div className="overflow-hidden">
                    <div style={{ backgroundImage: `url(${AppImages.b2})` }} className="bg-cover w-full h-[250px] lg:h-[400px] md:h-[300px] sm:h-[250px] object-contain flex justify-start items-center">
                        <div className="flex flex-col items-start p-10 ml-10">
                            <div>

                                <span className=" text-3xl lg:text-6xl md:text-4xl sm:text-2xl font-bold text-white">Shop</span>
                            </div>


                            <div className="flex flex-wrap items-center gap-2 w-full mt-4 text-white">
                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Home</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Product</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Consulting</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Cart</span>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
            {!products ? (

                <div className="flex flex-col items-center mt-8">
                    <span className="text-6xl mb-4">😢</span>
                    <h2 className="text-xl font-semibold">Your cart is currently empty!</h2>
                </div>
            ) : (



                <div className='p-5'>

                    <div className=' w-full  flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between '>
                        <div className='w-full sm:w-full md:w-full lg:w-[70%] p-1 overflow-x-auto '>
                            <table className='min-w-full divide-gray-200 shadow-lg '>
                                <thead className='bg-gray-100 '>
                                    <tr >
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>image</th>
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Product name</th>
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Quantity</th>
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Total</th>
                                        <th className='px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>

                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {products.map((item, index) => (

                                        <tr key={index} className='hover:bg-gray-50 transition'>
                                            <td className='px-6 py-4 flex justify-center '>
                                                <img src={item.image} className='w-10 sm:w-10 md:w-10 lg:w-20  h-10 sm:h-10 md:h-10 lg:h-20 object-cover rounded' />
                                            </td>
                                            <td className=' px-6 py-4 whitespace-nowrap text-center'>{item.name}</td>
                                            <td className=' px-6 py-4 whitespace-nowrap text-center'>{item.price}</td>
                                            <td className=' px-6 py-4 whitespace-nowrap text-center'>
                                                <div className='flex flex-row justify-between items-center  w-full '>
                                                    <div className={`px-1 py-1 rounded-md ${count == 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-400 text-white hover:bg-orange-500'}  `} onClick={() => sub()}><RemoveIcon /></div>

                                                    <div >
                                                        <span className='text-gray-600 text-xl font-semibold'>{count}</span>
                                                    </div>
                                                    <div className='px-1 py-1 rounded-md bg-orange-400 text-white hover:bg-orange-500' onClick={() => add()}><AddIcon /></div>

                                                </div></td>
                                            <td className=' px-6 py-4 whitespace-nowrap text-center'>12542</td>
                                            <td className=' px-6 py-4 whitespace-nowrap text-red-500 cusor-pointer text-center'>
                                                <DeleteIcon />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        {/* <div className='w-full flex justify-center sm:justify-center md:justify-center lg:justify-end '> */}
                        <div className='shadow-lg w-full sm:w-full md:w-[50%] lg:w-[30%] p-10 mt-5 sm:mt-5 md:mt-5 lg:mt-0 bg-white self-start'>

                            <div className='flex flex-row justify-between items-center'>
                                <span className='text-lg text-gray-700 font-semibold'>Subtotal</span>
                                <span className='text-md text-gray-400'>PKR 5,000</span>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <span className='text-lg text-gray-700 font-semibold'>Delivery</span>
                                <span className='text-md text-gray-400'>PKR 200</span>
                            </div>
                            <div className='flex flex-row justify-between items-center mt-8'>
                                <span className='text-xl text-gray-700 font-semibold'>Grand Total</span>
                                <span className='text-lg text-gray-400'>PKR 5,200</span>
                            </div>
                            <div
                            onClick={()=> navigate('/checkOut')} 
                            className="group relative overflow-hidden w-full  flex justify-center rounded-lg bg-orange-400 cursor-pointer p-5 mt-10 ">
                                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Checkout</span>
                            </div>
                        </div>

                        {/* </div> */}


                    </div>

                </div>
            )}
            <div className="flex flex-col items-center p-8">
                {/* New in Store */}
                <h2 className="text-3xl font-bold mb-8">New in store</h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center border border-gray-200 rounded-lg p-4 relative bg-white"
                        >
                            {product.sale && (
                                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                                    SALE
                                </span>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-40 h-40 object-cover mb-4"
                            />
                            <h3 className="font-semibold text-center mb-2">{product.name}</h3>
                            {product.oldPrice ? (
                                <p className="mb-2">
                                    <span className="line-through mr-2 text-gray-500">{product.oldPrice}</span>
                                    <span className="text-orange-500">{product.price}</span>
                                </p>
                            ) : (
                                product.price && (
                                    <p className="mb-2 text-orange-500">{product.price}</p>
                                )
                            )}
                            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">
                                {product.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    );
}
