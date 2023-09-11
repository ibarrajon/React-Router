import React from 'react';
import './Productos.css';
import {Link} from "react-router-dom"

const Productos = () => {
    return(
        <div>
            <h1>Productos</h1>
            <Link to="/">
                Volver
            </Link>
        </div>
    )
}

export { Productos }