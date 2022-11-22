import { Routes, Route } from "react-router-dom";
import "./App.css";

import HeaderNav from "./components/HeaderNav/HeaderNav.js";
import About from "./components/About/About.js";
import Gallery from "./components/Gallery/Gallery.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
