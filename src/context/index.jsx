import React from 'react';
import { MainProvider } from './Main';

function MainContextProvider({ children }) {
  return <MainProvider>{children}</MainProvider>;
}

export default MainContextProvider;
