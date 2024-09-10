import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import VolunteerNow from "./pages/VolunteerNow";
import Navbar from './Components/Navbar';
import {  BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/VolunteerNow" element={<VolunteerNow />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
