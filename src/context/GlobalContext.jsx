import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isLogin, setLogin] = useState(false);

  let state = {
    isLogin,
    setLogin,
  };
  return (
    <GlobalContext.Provider value={{ state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
