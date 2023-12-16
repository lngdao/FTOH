import React, { PropsWithChildren, useState } from 'react';

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

  return (
    <OverlayMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OverlayMenuContext.Provider>
  );
}
