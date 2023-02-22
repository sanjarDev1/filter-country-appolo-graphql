import React from 'react';
import MainContextProviderfrom from './context/index';
import Asosiy from './pages/Asosiy';
const App = () => {
  return (
    <div className='container'>
      <MainContextProviderfrom>
        <Asosiy />
      </MainContextProviderfrom>
    </div>
  );
};

export default App;
