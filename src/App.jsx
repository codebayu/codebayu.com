import React from 'react';

import 'aos/dist/aos.css';
import { useAos } from './Hooks/useAos';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { Experience } from './Pages/Experience';
import { ProjectSection } from './Pages/Project';
import { Stacks } from './Pages/Stack';
import { Info } from './Pages/Info';
import { NotFound } from './Pages/NotFound';

function App() {
  useAos();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
