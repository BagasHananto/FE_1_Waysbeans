import { Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Detail from "./component/Detail";
import Header from './component/Navbar';

export default function App() {
  // const adminUser = {
  //   email: "bagas@gmail.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name:"", email:""});
  // const Login = details => {
  //   console.log(details);
  // }

  // const Logout = () => {
  //   console.log("Logout");
  // }
    return (
      <>   
      <Header />
      
  <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/detailProfile/:id" element={<Detail />} />
  </Routes>
  </>
    );
  }