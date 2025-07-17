import React, { useState, useRef, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeaderComponent } from '../Headers/headerComponent';
import { Second_HeaderComponent } from '../Headers/seacondHeader';
import { Footer } from '../Footer/footer';
import { productsList } from '../../constant/productList';
import { useNavigate, useParams } from 'react-router-dom';
import { AppImages } from '../../constant/appImages';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Formik } from 'formik';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


export const ProductDetails = () => {
    const navigate = useNavigate()
    const [rating, setRating] = useState(0);
    const [popUp, setpopUp] = useState(false);


    const [switchState, setSwitchState] = useState({
        isSwitch1: true,
        isSwitch2: false,
        isSwitch3: false,


    });
    // ----------------------------------------
    const [count, setCount] = useState(1)
    const add = () => {
        setCount(count + 1)
    }
    const sub = () => {
        if (count > 1) {

            setCount(count - 1)
        }
    }
    // -------------------------------------------

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // -------------------------------------------

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
    const { id } = useParams();
    console.log(id)
    const product = productsList.find(p => p.id === parseInt(id));
    console.log(product)
    // -------------------------------------------------------------

    const [clickState, setClickState] = useState({
        isclick1: false,
        isclick2: false
    });
    const [selectedColor, setSelectedColor] = useState('')
    const handleColorSelect = (color) => {
        setSelectedColor(color)
        setClickState(prev => ({
            ...prev,
            isclick1: false,

        }))

    }
    console.log('selected color ;', selectedColor)

    return (
        <div>

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

                                    <span className="breadcrumb-item text-sm sm:text-md md:text-lg lg:text-xl font-semibold">{product.name}</span>
                                </div>


                            </div>


                        </div>

                    </div>
                </div>
                {popUp && <div className='flex justify-center px-5 sm:px-5 md:px-5 lg:px-15 mt-20'>
                    <div className='border-t-6 border-orange-400 bg-[#f7f6f7] w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between p-5 '>
                        <span className='p-2'>{product.name + ' has been added to your cart.'}</span>
                        <div
                            onClick={() => navigate('/cart')} className="group relative overflow-hidden w-full sm:w-full md:w-full  lg:w-[10%] flex justify-center rounded-md bg-orange-400 cursor-pointer p-2 ">
                            <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                            <span className="relative z-10 text-md font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">View Cart</span>
                        </div>

                    </div>
                </div>}
                <div className={`w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between px-5 sm:px-5 md:px-5 lg:px-15 ${!popUp ? 'mt-20' : null}`}
                >
                    <div className='bg-[#f4f4f4] w-full sm:w-full md:w-full  lg:w-[50%] flex justify-center border-1 border-gray-200 rounded-lg shadow-lg'>
                        <img src={product.image} className='w-[100%] ' />

                    </div>
                    <div className='w-full sm:w-full md:w-full  lg:w-[50%] flex flex-col p-5'>
                        <span className='text-black text-4xl font-bold'>{product.name}</span>
                        <span className='text-orange-400 font-semibold text-2xl pt-4'><strong>Price : </strong>{product.price}</span>
                        <span className='text-gray-600 text-xl pt-8'>{product.description}</span>
                        <span className='pt-8 text-black font-semibold text-xl'>Size & Fit</span>
                        <span className='text-gray-600  text-lg'>{product.sizeAndFit}</span>
                        <span className='pt-8 text-black font-semibold text-xl'>Material & Care   </span>
                        <span className='text-gray-600  text-lg'>{product.materialAndCare}</span>
                        <div className='flex flex-row justify-start items-center mt-10'>
                            <span className='text-black font-semibold text-xl'>Color :</span>

                            <div className='ml-15'>

                                <div
                                    onClick={() => setClickState(prev => ({
                                        ...prev,
                                        isclick1: !prev.isclick1,

                                    }))}
                                    className='relative w-full sm:w-full md:w-[180px] lg:w-[190px] bg-white border-1 border-gray-300 p-3 rounded-md shadow-lg flex justify-between'>
                                    <span> {selectedColor || 'Choose An option'}</span>
                                    <KeyboardArrowDownIcon />
                                </div>
                                {clickState.isclick1 &&
                                    <div className='w-[190px] absolute flex flex-col bg-white border-1 border-gray-300 p-3 mt-2 rounded-md shadow-lg transform transition duration-500'>
                                        {product.colors.map((item) => (
                                            <span
                                                onClick={() => handleColorSelect(item)} className='hover:text-orange-400 hover:font-semibold cursor-pointer'>{item}</span>

                                        ))}


                                    </div>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-between mt-10 w-full sm:w-full md:w-full lg:w-[70%] '>
                            <div className='flex flex-row justify-evenly items-center  w-full sm:w-full md:w-full  lg:w-[50%]'>
                                <div className={`px-4 py-2 rounded-md ${count == 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-400 text-white hover:bg-orange-500'}  `} onClick={() => sub()}><RemoveIcon /></div>

                                <div >
                                    <span className='text-gray-600 text-2xl font-semibold'>{count}</span>
                                </div>
                                <div className='px-4 py-2 rounded-md bg-orange-400 text-white hover:bg-orange-500' onClick={() => add()}><AddIcon /></div>

                            </div>
                            <div
                                onClick={() => setpopUp(true)}
                                className="group relative overflow-hidden w-full sm:w-full md:w-full  lg:w-[50%] flex justify-center rounded-lg bg-orange-400 cursor-pointer p-5 m-5 sm:m-5 md:m-5 ">
                                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Add to cart</span>
                            </div>
                        </div>




                    </div>
                </div>
                <div className='w-full py-5 px-5 sm:px-5 md:px-10 lg:px-15'>
                    <div className='flex flex-row  w-full border-b-1 border-gray-400'>
                        <span
                            className={`text-sm sm:text-sm md:text-lg lg:text-lg ${switchState.isSwitch1 ? "text-orange-400 border-b-3 border-orange-400" : 'text-black'} font-semibold p-4 hover:border-b-3 hover:border-orange-400 transform transition duration-400 cursor-pointer`}
                            onClick={() =>
                                setSwitchState(prev => ({
                                    ...prev,
                                    isSwitch1: true,
                                    isSwitch2: false,
                                    isSwitch3: false,

                                }))} >
                            Description
                        </span>
                        {product.colors?.length > 0 &&
                            <span
                                className={`text-sm sm:text-sm md:text-lg lg:text-lg ${switchState.isSwitch2 ? "text-orange-400 border-b-3 border-orange-400" : 'text-black'} font-semibold p-4 hover:border-b-3 hover:border-orange-400 transform transition duration-400 cursor-pointer`}
                                onClick={() =>
                                    setSwitchState(prev => ({
                                        ...prev,
                                        isSwitch1: false,
                                        isSwitch2: true,
                                        isSwitch3: false,
                                    }))}>

                                Additional information

                            </span>}
                        <span
                            className={`text-sm sm:text-sm md:text-lg lg:text-lg ${switchState.isSwitch3 ? "text-orange-400 border-b-3 border-orange-400" : 'text-black'} font-semibold p-4 hover:border-b-3 hover:border-orange-400 transform transition duration-400 cursor-pointer`}
                            onClick={() =>
                                setSwitchState(prev => ({
                                    ...prev,
                                    isSwitch1: false,
                                    isSwitch2: false,
                                    isSwitch3: true,
                                }))}>
                            Reviews (0)
                        </span>

                    </div>
                    {switchState.isSwitch1 &&
                        <div className='pt-5'>
                            <span className='text-gray-600 text-md '>{product.description}</span>
                        </div>
                    }
                    {switchState.isSwitch2 &&
                        <div className='w-full flex flex-row justify-between pt-5'>
                            <span className='text-xl text-gray-700 border-1 border-gray-400 w-1/2 p-5'>Color</span>
                            <span className='text-xl text-gray-700 border-1 border-gray-400 w-1/2 p-5'>{product.colors.join(' , ')}</span>

                        </div>
                    }
                    {switchState.isSwitch3 &&
                        <div className='w-full '>
                            <div className='flex flex-col'>
                                <span className='pt-8 text-black font-bold text-2xl p-2'>Reviews</span>
                                <span className='text-gray-600 text-md p-2'>There are no reviews yet.</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='pt-8 text-black font-bold text-2xl p-2'>Be the first to review “The Shadows in the Forest”</span>
                                <span className='text-gray-800 text-md p-2'>Your email address will not be published. Required fields are marked *</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-gray-800 text-md p-2'>Your rating *</span>
                                <div className='flex'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <StarBorderIcon
                                            key={star}
                                            onClick={() => setRating(star)}
                                            className={`${star <= rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Formik
                                    initialValues={{ email: '', name: '', message: '' }}

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


                                                <textarea
                                                    type="text"
                                                    name="message"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.message}
                                                    placeholder='Write a Message'
                                                    rows={4}

                                                    className='w-full bg-gray-100 p-4 rounded text-lg text-black outline-none m-2'
                                                />
                                                <div className='w-full flex flex-row items-center justify-between m-2'>

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


                                                </div>


                                                <div className="group relative overflow-hidden w-full sm:w-1/3 flex justify-center rounded-lg bg-orange-400 cursor-pointer p-5 mt-5">
                                                    <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0"></div>

                                                    <span className="relative z-10 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase">Submit</span>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    }
                </div>
                <div className='w-full flex flex-row justify-bewteen items-center flex-wrap mt-10 sm:mt-10 md:mt-5 lg:mt-5'>
                    {productsList.filter(item => item.sale === true).slice(0, 4).map((item, index) => (
                        <div
                            // onClick={()=> navigate(`/productDetail/${item.id}`)}
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


                <Footer />
            </div>

        </div >
    )
}