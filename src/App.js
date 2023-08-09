import { Routes, Route } from "react-router-dom";
import TitleBar from "./components/TitleBar.js";
import WhatPage from "./components/WhatPage.js";
import LandPage from "./components/LandPage.js";
import WhyPage from "./components/WhyPage.js";
import ExamplePage from "./components/ExamplePage.js";
import ContactPage from "./components/ContactPage.js";
import Nav from './components/Nav.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <TitleBar></TitleBar>
      </header>
      <Routes>
        <Route exact path="/" element={<LandPage />} />
        <Route exact path="/what" element={<WhatPage />} />
        <Route path="/why" element={<WhyPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer>
        <Nav></Nav>
      </footer>
    </div>
  );
}

export default App;
