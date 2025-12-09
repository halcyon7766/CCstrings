import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Materials from './pages/Materials';
import Menu from './components/Menu';
import Logo from './components/Logo';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-100 text-stone-800 font-sans flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-3">
                <Logo className="h-8 w-8 md:h-10 md:w-10 text-stone-800" />
                <span>
                  <span className="text-stone-800">つるしみゅ</span>
                  <span className="text-stone-400 text-sm md:text-base ml-2 font-normal">ループ弦シミュレーター</span>
                </span>
              </h1>
            </Link>
            <Menu />
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/materials" element={<Materials />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
