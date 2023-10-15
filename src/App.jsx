import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Headert from "./components/Headert";
import Footer from "./components/Footer";
import Center from "./components/Center";
import SignIn from "./components/SignIn";
import Orders from "./components/Orders";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element = {[<Header/>,<Headert/>,<Center/>,<Footer></Footer>]}/>
          <Route path="/checkout" element = {[<Header/>, <h1>Hi this is checkout page</h1>]}/>
          <Route path="/signin" element = {[<SignIn/>]}/>
          <Route path="/orders" element={[<Header/>,<Orders/>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;