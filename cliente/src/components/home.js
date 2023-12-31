import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
    
    return(
        <div className='container col-8 mt-5'>
            <h2 className='mb-4'>Bienvenido usuario</h2>
            <p>Seleccione el modulo que desea ingresar: </p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                <div className="col">
                    <Link to='/listaProductos' className="card h-100 bg-dark p-3">
                        <img src="productIcon_OK.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title text-light">Productos</h4>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to='/listaVentas' className="card h-100 bg-dark p-3">
                        <img src="salesIcon_OK.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title text-light">Ventas</h4>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to='/listaUsuarios' className="card h-100 bg-dark p-3">
                        <img src="usersIcon_OK.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title text-light">Usuarios</h4>
                        </div>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}

export default Home