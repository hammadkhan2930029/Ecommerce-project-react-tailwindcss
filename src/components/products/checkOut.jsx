import React, { useEffect, useState, useRef } from 'react';
import { Second_HeaderComponent } from '../Headers/seacondHeader';
import { HeaderComponent } from '../Headers/headerComponent';
import { Footer } from '../Footer/footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppImages } from '../../constant/appImages';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
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
        price: 42,
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

export const CheckOut = () => {
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
    // ------------------------------------------------------
    const subtotal = products.reduce((sum, items) => sum + (items.price), 0)
    const deliveryPrice = 200
    const grandTotal= subtotal + deliveryPrice;

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

                                <span className=" text-3xl lg:text-6xl md:text-4xl sm:text-2xl font-bold text-white">Checkout</span>
                            </div>


                            <div className="flex flex-wrap items-center gap-2 w-full mt-4 text-white">
                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Home</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Product</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Cart</span>
                                <ArrowForwardIosIcon className="breadcrumb-icon text-xs sm:text-sm md:text-base lg:text-lg" />

                                <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">Checkout</span>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-start p-5 '>
                <div className='w-full sm:w-full md:w-full lg:w-[60%] p-5 bg-white shadow-lg'>
                    <span className='p-3 text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase'>shipping Address</span>
                    <Formik
                        initialValues={
                            {
                                name: '',
                                lastname: '',
                                email: '',
                                phone: '',
                                message: '',
                                country: '',
                                state: '',
                                city: '',
                                address: '',
                                description: ''

                            }}

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
                                <div className='flex flex-col justify-center items-center mt-10 mb-10'>



                                    <div className='w-full flex flex-row items-center justify-between m-2'>

                                        <TextField
                                            id="outlined-basic"
                                            label="Name"
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            placeholder='Your Name'
                                            className='w-[48%]  p-4 rounded text-lg text-black outline-none m-2'
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Last Name"
                                            type="text"
                                            name="lastname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastname}
                                            placeholder='last name'
                                            className='w-[48%] p-4 rounded text-lg text-black outline-none m-2'
                                        />



                                    </div>
                                    <div className='w-full flex flex-row items-center justify-between m-2'>

                                        <TextField
                                            id="outlined-basic"
                                            label="Email"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder='Email'
                                            className='w-[48%]  p-4 rounded text-lg text-black outline-none m-2'
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Phone"
                                            type="number"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                            placeholder='Phone'
                                            className='w-[48%]  p-4 rounded text-lg text-black outline-none m-2'
                                        />



                                    </div>
                                    <div className='w-full flex flex-col sm:flex-colmd:flex-col lg:flex-row items-center justify-between '>

                                        <TextField
                                            id="outlined-basic"
                                            label="Country"
                                            type="text"
                                            name="country"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.country}
                                            placeholder='Country'
                                            className='w-full sm:w-full md:w-full lg:w-[32%]  p-4 rounded text-lg text-black outline-none m-2'
                                        sx={{ marginTop: '15px' }}

                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="State"
                                            type="text"
                                            name="state"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.state}
                                            placeholder='State'
                                        sx={{ marginTop: '15px' }}

                                            className='w-full sm:w-full md:w-full lg:w-[32%]  p-4 rounded text-lg text-black outline-none m-2'
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="City"
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                            placeholder='City'
                                        sx={{ marginTop: '15px' }}

                                             className='w-full sm:w-full md:w-full lg:w-[32%]  p-4 rounded text-lg text-black outline-none m-2'
                                        />



                                    </div>
                                    <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        type="text"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        placeholder='Address'
                                        className='w-full  p-4 rounded text-lg text-black outline-none m-2'
                                        sx={{ marginTop: '10px' }}

                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        placeholder='Description'
                                        className='w-full  p-4 rounded text-lg text-black outline-none mt-10'
                                        sx={{ marginTop: '20px' }}
                                        multiline
                                        rows={4}
                                    />


                                    {/* <div className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded-lg bg-orange-400 cursor-pointer p-5 mt-5">
                                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                        <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Submit</span>
                                    </div> */}
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
                <div className='w-full sm:w-full md:w-full lg:w-[30%] p-5 bg-white shadow-lg mt-10 sm:mt-10 md:mt-10 lg:mt-0'>
                    {products.map((item, index) => (
                        <div className='flex flex-row justify-between items-center border-b-2 border-gray-200 p-4'>
                            <div className='flex flex-row items-center'>
                                <img src={item.image} className='w-20 h-20 bg-gray-200 p-2 rounded-md' />
                                <span className='text-lg text-gray-800 p-2 w-50'>
                                    {item.name}

                                </span>
                            </div>

                            <div>
                                <span className='text-orange-400 text-lg'>PKR {item.price}</span>
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='text-lg text-gray-700 font-semibold'>Subtotal</span>
                            <span className='text-md text-gray-400'>PKR {subtotal}</span>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='text-lg text-gray-700 font-semibold'>Delivery</span>
                            <span className='text-md text-gray-400'>PKR {deliveryPrice}</span>
                        </div>
                        <div className='flex flex-row justify-between items-center mt-8'>
                            <span className='text-xl text-gray-700 font-semibold'>Grand Total</span>
                            <span className='text-lg text-gray-400'>PKR {grandTotal}</span>
                        </div>
                        <div
                            
                            className="group relative overflow-hidden w-full  flex justify-center rounded-lg bg-orange-400 cursor-pointer p-5 mt-10 ">
                                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Paynow</span>
                            </div>
                    </div>


                </div>
            </div>
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
