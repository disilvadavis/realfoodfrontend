import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Menu from './pages/Menu';
import Order from './pages/Order';

const App = () => (
   <Router>
      <div className="app">
         <Header />
         <Sidebar />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/restaurants" element={<Restaurant />} />
               <Route path="/menu" element={<Menu />} />
               <Route path="/orders" element={<Order />} />
            </Routes>
         </main>
         <Footer />
      </div>
   </Router>
);

export default App;
