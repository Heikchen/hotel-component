import React from 'react';
import { useState } from 'react';
import HotelComponent from 'src/Components/HotelComponent/HotelComponent';
import Navbar from 'src/Components/Navbar/Navbar';
import HotelContext from 'src/Context/HotelContext';

import { MockData } from './mockdata';

function App(): JSX.Element {
  const [selected, setSelected] = useState<string[]>(['']);

  return (
    <HotelContext.Provider value={{ selected, setSelected }}>
      <>
        <Navbar />
        <HotelComponent hotels={MockData} />
      </>
    </HotelContext.Provider>
  );
}

export default App;
