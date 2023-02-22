import React, { useReducer, createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';
export const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};



