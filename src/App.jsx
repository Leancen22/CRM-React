import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IniciarSecion from './layout/IniciarSecion'
import Layout from './layout/Layout'
import EditarCliente from './páginas/EditarCliente'
import VerCliente from './páginas/VerCliente'
import NuevoCliente from './páginas/NuevoCliente'
import Inicio from './páginas/Inicio'
import LoginForm from './páginas/LoginForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />}/>
          <Route path="nuevo" element={<NuevoCliente />}/>
          <Route path="editar/:id" element={<EditarCliente />}/>
          <Route path=":id" element={<VerCliente />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
