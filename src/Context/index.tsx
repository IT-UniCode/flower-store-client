import React, { createContext, useState } from 'react';

interface IInitialContex {
  auth: boolean | null;
  setAuth: (v: boolean | null) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
};

const initialState = {
  auth: false,
  setAuth: (v: boolean | null) => v,
};

export const AppContext = createContext<IInitialContex>(initialState);

const AppProvider = ({ children }: AppProviderProps) => {
  const [auth, setAuth] = useState<boolean | null>(initialState.auth);

  return (
    <AppContext.Provider value={{ auth, setAuth}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
