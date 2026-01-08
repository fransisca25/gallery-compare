import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Introduction from "./pages/Intro";
import Option from "./pages/option";

import "./styles/main.css"

function App()
{
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/option" element={<Option />} />
      </Routes>
  );
}

export default App
