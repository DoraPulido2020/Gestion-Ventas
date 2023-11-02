import Login from './components/Login';
import Home from './components/home';
import AgregarUsuario from './components/usuarios/AgregarUsuario';
import EditarUsuario from './components/usuarios/EditarUsuario';
import ListaUsuarios from './components/usuarios/ListaUsuarios';
import AgregarRol from './components/usuarios/roles/AgregarRol';
import EditarRol from './components/usuarios/roles/EditarRol';
import ListaRoles from './components/usuarios/roles/ListaRoles';
import ListaVentas from './components/ventas/ListaVentas';
import AgregarVenta from './components/ventas/AgregarVenta';
import EditarVenta from './components/ventas/EditarVenta';
import './index.css';

import ListaProductos from './components/productos/ListaProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="navbar narbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-center d-flex align-items-center text-light"> 
            <img src="/logo.png" alt="Logo" width="80" height="80" className="d-inline-block align-text-top rounded-circle me-4"/>
            <h3>REBAJA | Sistema gestion de ventas</h3>
          </a>
        </div>
      </nav>

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/inicio' element={<Home/>}></Route>

          <Route path='/listaUsuarios' element={<ListaUsuarios/>}></Route>
          <Route path='/agregarUsuario' element={<AgregarUsuario/>}></Route>
          <Route path='/editarUsuario/:idusuario' element={<EditarUsuario/>}  ></Route>

          <Route path='/listaRoles' element={<ListaRoles/>}></Route>
          <Route path='/agregarRol' element={<AgregarRol/>}></Route>
          <Route path='/editarRol/:idrol' element={<EditarRol/>}  ></Route>

          <Route path='/listaVentas' element={<ListaVentas/>}></Route>
          <Route path='/agregarVenta' element={<AgregarVenta/>}></Route>
          <Route path='/editarVenta/:idventa' element={<EditarVenta/>}></Route> 

          <Route path='/listaProductos' element={<ListaProductos/>}></Route>
          <Route path='/agregarProducto' element={<AgregarProducto/>}></Route>
          <Route path='/editarProducto/:idproducto' element={<EditarProducto/>}></Route> 

        </Routes>
      </Router>

    </div>
  );
}

export default App;
