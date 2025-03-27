//import {BrowserRouter, Routes, Route} from "react-router-dom"
//-- hashrouter - used with GitHub pages
import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Footeer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About"


function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
