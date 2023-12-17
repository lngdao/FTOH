import { styles } from '../common';
import { HashLink } from 'react-router-hash-link';
import { Menu } from 'lucide-react';
import { useOverlayMenuContext } from '../context';

import logo from '../assets/mini_logo.png';

function Navbar() {
  const { setIsOpen } = useOverlayMenuContext();

  return (
    <nav className="flex justify-between h-[65px] items-center">
      <HashLink
        smooth
        to={'/#home'}
        className="text-3xl font-black text-primary"
      >
        <img className="w-[100px]" src={logo} alt="logo" />
        {/* FTOH */}
      </HashLink>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer md:hidden hover:text-primary"
      >
        <Menu size={28} />
      </div>
      <div className="flex items-center gap-7 max-md:hidden">
        <ul className="flex gap-5 font-medium text-white">
          <li>
            <HashLink smooth to={'/#about'} className="hover:text-primary">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#download'} className="hover:text-primary">
              Download
            </HashLink>
          </li>
          {/* <li>
            <HashLink smooth to={'/#gallary'} className="hover:text-primary">
              Gallary
            </HashLink>
          </li> */}
          <li>
            <HashLink smooth to={'/#footer'} className="hover:text-primary">
              Explore
            </HashLink>
          </li>
        </ul>
        <div
          className={`${styles.flexCenter} w-[150px] py-3 max-md:w-[130px] bg-primary rounded-md hover:bg-primary-darker hover:scale-x-105 cursor-pointer`}
        >
          <p className="font-semibold text-white">Play now</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
