// import { useState, createContext, useEffect } from "react";
// import Carts from "../Data/DataCard.json";

// export const GlobalContext = createContext();

// export const GlobalProvider = (props) => {
//   const [isLogin, setLogin] = useState(false);

//   const [loginUser, setLoginUser] = useState({});

//   const [cart, setCart] = useState(
//     Carts.map((item) => ({ ...item, addPrice: item.price }))
//   );

//   useEffect(() => {
//     setCart(cart);
//   }, []);

//   let state = {
//     loginUser,
//     setLoginUser,
//     isLogin,
//     setLogin,
//     cart,
//     setCart,
//   };
//   return (
//     <GlobalContext.Provider value={{ state }}>
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
