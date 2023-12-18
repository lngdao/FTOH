import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface OverlayMenuContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue: OverlayMenuContextProps = {
  isOpen: false,
  setIsOpen: () => {},
};

export const OverlayMenuContext =
  React.createContext<OverlayMenuContextProps>(initialContextValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useOverlayMenuContext = () => React.useContext(OverlayMenuContext);

export function OverlayMenuProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;

    if (isOpen) body.classList.add('overflow-hidden');
    else body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <OverlayMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OverlayMenuContext.Provider>
  );
}
