import React, { createContext, useState } from 'react';

interface IInitialContex {
  count: number;
  setCount: (v: number) => void;
}

interface CountProviderProps {
  children: React.ReactNode;
};

const initialState = {
  count: 0,
  setCount: (v: number) => v,
};

export const CountContext = createContext<IInitialContex>(initialState);

const AppProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState<number>(initialState.count);

  return (
    <CountContext.Provider value={{ count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}

export default AppProvider;
