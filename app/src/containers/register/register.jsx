import React from 'react';
import './register.css';
import '../home/normalized.css';

const register = () => {
    return (
        <div className="registerBody">
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DollMinatrix</a>
                    </div>
                </nav>
                <div className="spaceUnderHeader"></div>
            </div>
            <div className="registerContainer">
                <div className="registerForm">
                    <form className="row g-3 formContainer">
                        <div className="col-md-6">
                            <label for="inputName4" className="form-label">Nombre</label>
                            <input type="email" className="form-control" id="inputName4"></input>
                        </div>                    <div className="col-md-6">
                            <label for="inputSurName4" className="form-label">Primer Apellido</label>
                            <input type="email" className="form-control" id="inputSurName4"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputLastName4" className="form-label">Segundo Apellido</label>
                            <input type="email" className="form-control" id="inputLastName4"></input>
                        </div>                    <div className="col-md-6">
                            <label for="inputSuscription4" className="form-label">Suscripción</label>
                            <input type="email" className="form-control" id="inputSuscription4"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4"></input>
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="inputAddress"></input>
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">CP</label>
                            <input type="text" className="form-control" id="inputZip"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputProvince" className="form-label">Provincia</label>
                            <input type="text" className="form-control" id="inputProvince"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputCountry" className="form-label">País</label>
                            <input type="text" className="form-control" id="inputCountry"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPhone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="inputPhone"></input>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default register
