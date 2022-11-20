import { Routes, Route } from "react-router-dom";

import HeaderNav from "./components/HeaderNav/HeaderNav.js";
import About from "./components/About/About.js";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
