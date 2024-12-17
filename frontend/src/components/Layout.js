
import '../App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Service from './Service';
import Table from './admin/Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
// import Table from './admin/Table';

function Layout() {
  return (
    <div className="Layout"  >
        <Header />
        <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Layout;
