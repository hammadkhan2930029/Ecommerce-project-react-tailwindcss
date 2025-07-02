import React, { useState, useRef, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cover } from '../components/Home/cover';
import { BrandsLogo } from '../components/Home/brandLogoSlider';
import { AboutCompoent } from '../components/Home/aboutComponent';
import { Offering } from '../components/Home/offering';
import { Management } from '../components/Home/management';
import { ProjectList } from '../components/Home/projectList';
import { FeedbackComponent } from '../components/Home/feedbackComponent';
import { BannerComponent } from '../components/Home/banner';
import { CompanyBenifits } from '../components/Home/benifits';
import { Loader } from '../components/Loader/loader';
import { ProgressCards } from '../components/Home/progressCards';
import { Contact } from '../components/Home/contact';
import { Blogs } from '../components/Home/blogs';
import { BannerSection2 } from '../components/Home/bannersection2';
import { Footer } from '../components/Footer/footer';
import { HeaderComponent } from '../components/Headers/headerComponent';
import {Second_HeaderComponent}from '../components/Headers/seacondHeader'


export const Home = () => {
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
                    <div className='fixed top-0 left-0 w-full z-50'>< Second_HeaderComponent/></div>)}


                <HeaderComponent ref={navbarRef} />
                <Cover />
                <BrandsLogo />
                <AboutCompoent />
                <Offering />
                <Management />
                <ProjectList />
                <FeedbackComponent />
                <BannerComponent />
                <CompanyBenifits />
                <ProgressCards />
                <Contact />
                <Blogs />
                <BannerSection2 />
                <Footer />
            </div>
        </div >


    )
}

