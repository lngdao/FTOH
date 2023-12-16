import Navbar from './components/Navbar';
import { styles } from './common';

import Footer from './components/Footer';
import MobileApp from './components/MobileAppSection';
import OverlayMenu from './components/OverlayMenu';
import { useOverlayMenuContext } from './context';
import Hero from './components/Hero';
import LaptopAppSection from './components/LaptopAppSection';
import AboutSection from './components/AboutSection';
import TestmonialsSection from './components/TestmonialsSection';

function App() {
  const { isOpen } = useOverlayMenuContext();

  return (
    // <Scrollbar>
    <div className="relative">
      <div
        className={`${styles.flexCenter} fixed top-0 left-0 right-0 z-10 backdrop-blur-lg bg-black/25`}
      >
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}

      <div
        id="home"
        className="max-md:h-[70vh] relative overflow-hidden h-screen"
      >
        <Hero />
      </div>

      {/* Content */}

      <div className={`${styles.flexCenter} relative`}>
        <div className={`${styles.boxWidth} py-20`} id="about">
          <AboutSection />
          <LaptopAppSection />
          <MobileApp />
          <TestmonialsSection />
        </div>
        <div className="absolute top-0 flex items-center justify-between w-full h-[350px] -z-30 gradient blur-[200px]" />
        <div className="absolute top-0 flex items-center justify-between w-full h-full -z-10 backdrop-blur-xl" />
      </div>

      {/* Footer */}

      <div
        id="footer"
        className={`${styles.flexCenter} border-t border-[#30313F] pt-10`}
      >
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
      {isOpen && <OverlayMenu />}
    </div>
    // {/* </Scrollbar> */}
  );
}

export default App;
