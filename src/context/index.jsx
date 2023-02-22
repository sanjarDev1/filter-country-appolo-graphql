import React from 'react';
import { MainProvider } from './Main';

const MainContextProvider = ({ children }) => {
  return <MainProvider>{children}</MainProvider>;
};

export default MainContextProvider;
export { MainProvider };
