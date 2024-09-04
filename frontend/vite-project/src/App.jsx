import Header from "./component/Header.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
       <Routes>
         <Route path="/Home" element={<Home/>}/>
         <Route path="/Checkout" element={<Checkout/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
