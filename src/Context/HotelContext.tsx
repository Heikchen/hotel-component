import React, { createContext } from 'react';

interface ContextProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const HotelContext = createContext<ContextProps>({
  selected: [],
  setSelected: () => [],
});

export default HotelContext;

export const useHotelContext = () => {
  const context = React.useContext(HotelContext);
  if (context === undefined) {
    throw new Error('useHotelContext must be used within a HotelContext');
  }
  return context;
};
