import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">DollMinatrix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item" href="/categories/accesories">Accesorios</a></li>
                            <li><a class="dropdown-item" href="/categories/boy">Chicos</a></li>
                            <li><a class="dropdown-item" href="/categories/girl">Chicas</a></li>
                            <li><a class="dropdown-item" href="/categories/unisex">Unisex</a></li>
                            <li><a class="dropdown-item" href="/categories/shoes">Calzado</a></li>
                            <li><a class="dropdown-item" href="/categories/discount">Descuentos</a></li>
                            <li><a class="dropdown-item" href="/size">Tallas</a></li>
                        </ul>
                        </li>
                    </ul>
                    <div className="login"><Link to="/login">Login</Link></div>
                    <div className="registro"><Link to="/register">Registro</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
