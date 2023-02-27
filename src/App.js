import { Routes, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage";
import Detail from "./component/Detail";
import Header from "./component/Navbar";
import Cart from "./component/Cart";
import Profile from "./component/Profile";
import Addproduct from "./component/Addproduct";
import TableTransaction from "./component/tableTransaction";
import TableListProduct from "./component/tableListProduct";

export default function App() {
  return (
    <>
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailproduct/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/tabletransaction" element={<TableTransaction />} />
        <Route path="/tablelistproduct" element={<TableListProduct />} />
      </Routes>
    </>
  );
}
