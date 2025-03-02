import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home/Home.tsx";
import SignUp from "./components/Pages/signup/SignUp.tsx";
import Signin from "./components/Pages/signin/Signin.tsx";
import Layout from "./components/view/Layout.tsx";
import Products from "./components/Pages/products/Products.tsx";
import Profile from "./components/Pages/Profile.tsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}/>
          <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
