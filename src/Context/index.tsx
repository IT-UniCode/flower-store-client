import React, { createContext, useState } from 'react';

interface IUserContext {
  auth: boolean;
  goodsCount: number;
  userId: string;
  userName: string;
  userSurName: string;
  userLastName: string;
  phone: string;
  address: string;
  role: string;
}

interface IInitialContext {
  userContext: IUserContext;
  setUserContext: (userContext: IUserContext) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const initialState = {
  userContext: {
    auth: false,
    goodsCount: 0,
    userId: '',
    userName: '',
    userSurName: '',
    userLastName: '',
    phone: '',
    address: '',
    role: '',
  },
  setUserContext: (userContext: IUserContext) => userContext,
};

export const AppContext = createContext<IInitialContext>(initialState);

const AppProvider = ({ children }: UserProviderProps) => {
  const [userContext, setUserContext] = useState<IUserContext>(
    initialState.userContext
  );

  return (
    <AppContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
