import React from 'react';
import MainContextProviderfrom from './context';
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
