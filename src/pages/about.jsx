import React, { useState, useRef, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Second_HeaderComponent } from '../components/Home/seacondHeader';
import { HeaderComponent } from '../components/Home/headerComponent';

import { Footer } from '../components/Footer/footer';
import { AboutCompoent } from '../components/Home/aboutComponent';
import { AboutBanner } from '../components/About/aboutBanner';
import { About_ProjectList } from '../components/About/aboutProjectList';

export const About = () => {
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
                    <AboutBanner/>
                    <AboutCompoent/>
                    <About_ProjectList/>
                 
                    <Footer />
                </div>
        </div >


    )
}

