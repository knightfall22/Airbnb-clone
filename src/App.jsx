import { useState, useEffect } from 'react';
import { DisplayFilter, Navbar, Filters, Gallery, Footer } from './components'
import { map } from './assets';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
      <Navbar />
      <Filters isScrolled={isScrolled}/>
      <DisplayFilter />
      <Gallery />
      <Footer />

      <div className='bg-secondary flex items-center px-4 py-3 rounded-[2rem] fixed z-[1000] bottom-20 left-[42%] sm:left-[47%] gap-2 hover:shadow-lg hover:scale-x-110 transition-all cursor-pointer'>
        <h3 className='text-white font-medium'> <span className='sm:inline hidden'>Show</span> Map</h3>
        <img src={map} alt="map" className='h-5 w-5'/>
      </div>
    </div>
  )
}

export default App
