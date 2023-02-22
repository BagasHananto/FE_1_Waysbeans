import { Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Detail from "./component/Detail";
import Header from './component/Navbar';

export default function App() {
    return (
      <>   
      <Header /> 
  <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/detailProduct/:id" element={<Detail />} />
  </Routes>
  </>
    );
  }