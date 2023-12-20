import { X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { useOverlayContext } from '../context';

function OverlayMenu() {
  const { setIsMenuOpen } = useOverlayContext();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 items-center justify-center w-screen h-screen overflow-hidden duration-700 md:hidden backdrop-blur-2xl">
      <X
        onClick={closeMenu}
        className="absolute cursor-pointer right-6 top-5 hover:text-slate-200"
        size={36}
      />
      <ul className="flex flex-col items-center mt-24 text-3xl font-semibold text-white gap-14">
        <li>
          <HashLink
            onClick={closeMenu}
            smooth
            to={'/#home'}
            className="hover:text-primary"
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            onClick={closeMenu}
            smooth
            to={'/#download'}
            className="hover:text-primary"
          >
            Download
          </HashLink>
        </li>
        <li>
          <HashLink
            onClick={closeMenu}
            smooth
            to={'/#footer'}
            className="hover:text-primary"
          >
            Explore
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default OverlayMenu;
