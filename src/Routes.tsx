import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quem_somos from "./pages/Quem_somos";
import Produtos from "./pages/Produtos";
import Services from "./pages/Services";
import Contactos from "./pages/Contactos";
import Criar_conta from "./pages/Criar_conta";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import Productos from "./pages/Admin/Produtos";
import Encomendas from "./pages/Admin/Encomendas";
import Usuarios from "./pages/Admin/Usuarios";

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/quem_somos" element={<Quem_somos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contact" element={<Contactos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar_conta" element={<Criar_conta />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="produtos" element={<Productos />} />
          <Route path="encomendas" element={<Encomendas />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};
