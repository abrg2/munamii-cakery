import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router';

import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';

export default function App() {
  /*
   * N.B.: <Route /> previously supported "component={MyComponent}", but now must be named "Component" (capital C),
   *       and reportedly supports less functions that elements?
   */
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}