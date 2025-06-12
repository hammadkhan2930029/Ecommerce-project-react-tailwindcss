import { useState, useRef, useEffect } from 'react'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from './pages/header'
import { CoverSlider } from './pages/coverSlider'
import { Brands } from './pages/brands'
import { Second_HeaderComponent } from './components/header2/seacondHeader'
import { About } from './pages/about';
import { Offering } from './components/Offering/offering';

function App() {
  const navbarRef = useRef(null)
  const [showTopbar, setShowTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setShowTopbar(rect.bottom < 0);
      }

    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  console.log('showtopbar :', showTopbar)

  return (
    <div >
      {showTopbar && (
        <div className='fixed top-0 left-0 w-full z-50'><Second_HeaderComponent /></div>)}


      <Header ref={navbarRef} />
      <CoverSlider />
      <Brands />
      <About/>
      <Offering/>
    </div>

  )
}

export default App;
