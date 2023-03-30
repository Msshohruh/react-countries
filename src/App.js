import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import { useTheme } from "./hooks/useTheme";

function App() {
  
  
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
        </Routes>
      </BRouter>
    </div>
  );
}

export default App;
