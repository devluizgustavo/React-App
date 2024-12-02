import React from 'react';
import { Routes, Route } from 'react-router-dom'; // React-Router-Dom: Usado para criar as rotas da aplicação

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

// A função devera ter o nome de Routes
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/404" element={<Page404 />} />
    </Routes>
  );
}

// Dentro do routes colocamos a rota com Route */
// path: Especificar a rota  |  element: Conteúdo que irá conter na rota */
