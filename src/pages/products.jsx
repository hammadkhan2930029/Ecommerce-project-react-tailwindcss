import React, { useState, useRef, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Second_HeaderComponent } from '../components/Headers/seacondHeader';
import { HeaderComponent } from '../components/Headers/headerComponent';
import { Footer } from '../components/Footer/footer';
import { ProductsBradCrumbs } from '../components/products/productBreadCrumbs';
import { ProductCardsList } from '../components/products/productCardsList';




export const ProductCards = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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

            <div>

                {showTopbar && (
                    <div className='fixed top-0 left-0 w-full z-50'><Second_HeaderComponent /></div>)}


                <HeaderComponent ref={navbarRef} />
                <ProductsBradCrumbs/>
                <ProductCardsList/>
              

                <Footer />
            </div>
        </div >


    )
}

