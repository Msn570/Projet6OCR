import React from 'react';
import Home from "./assets/pages/Home/Home";
import About from "./assets/pages/About/About";
import Error from "./assets/pages/Error/Error";
import Logement from "./assets/pages/Logement/Logement";
import { Route , Routes } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import './App.scss';

 export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


