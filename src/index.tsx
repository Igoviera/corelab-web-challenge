import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Adicionar from './pages/Adicionar/Adicionar';
import Filtro from './pages/Filtro/Filtro';
import Editar from './pages/Editar/Editar';
import { CartProvider } from './contexts/CartContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
        <Route path='/filtro' element={<Filtro/>}/>
        <Route path='/editar/:id' element={<Editar/>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>

);

