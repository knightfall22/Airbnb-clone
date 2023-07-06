import { useState, useEffect } from 'react';
import { DisplayFilter, Navbar, Filters, Gallery, Footer } from './components'

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
    <>
      <Navbar />
      <Filters isScrolled={isScrolled}/>
      <DisplayFilter />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
