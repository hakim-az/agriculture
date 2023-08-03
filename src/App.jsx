import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import Navbar from "./Components/General/Navbar/Navbar";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import ShopSingle from "./Pages/Shop/ShopSingle";
import Service from "./Pages/Service/Service";
import ServiceSingle from "./Pages/Service/ServiceSingle";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Team from "./Pages/Team/Team";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import PortfolioSingle from "./Pages/Portfolio/PortfolioSingle";
import BlogSingle from "./Pages/Blog/BlogSingle";
import Error from "./Pages/Error/Error";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />}/>
        {/* SHOP PAGES */}
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop-single" element={<ShopSingle />}/>
        {/* SERVICES PAGE */}
        <Route path="/services" element={<Service />}/>
        <Route path="/services-single" element={<ServiceSingle />}/>
        {/* BLOG PAGES */}
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog-single" element={<BlogSingle />}/>
        {/* PORTFOLIO PAGES */}
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/portfolio-single" element={<PortfolioSingle />}/>
        {/* TEAM PAGE */}
        <Route path="/team" element={<Team />}/>
        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />}/>
        {/* ERROR PAGE */}
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
