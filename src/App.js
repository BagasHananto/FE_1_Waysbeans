import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import LandingPage from "./component/LandingPage";
import Detail from "./component/Detail";
import Header from "./component/Navbar";
import Cart from "./component/Cart";
import Profile from "./component/Profile";
import Addproduct from "./component/Addproduct";
import { GlobalProvider } from "./context/GlobalContext";

export const AppContext = createContext(null);
export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      <GlobalProvider>
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detailproduct/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addproduct" element={<Addproduct />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}
