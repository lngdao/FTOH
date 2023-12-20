import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface OverlayContextProps {
  isMenuOpen: boolean;
  isTrailerOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTrailerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue: OverlayContextProps = {
  isMenuOpen: false,
  isTrailerOpen: false,
  setIsMenuOpen: () => {},
  setIsTrailerOpen: () => {},
};

export const OverlayContext =
  React.createContext<OverlayContextProps>(initialContextValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useOverlayContext = () => React.useContext(OverlayContext);

export function OverlayProvider({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen || isTrailerOpen) body.classList.add('overflow-hidden');
    else body.classList.remove('overflow-hidden');
  }, [isMenuOpen, isTrailerOpen]);

  return (
    <OverlayContext.Provider
      value={{ isMenuOpen, isTrailerOpen, setIsMenuOpen, setIsTrailerOpen }}
    >
      {children}
    </OverlayContext.Provider>
  );
}
