import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="loginBody">
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DollMinatrix</a>
                    </div>
                </nav>
                <div className="spaceUnderHeader"></div>
            </div>
            <div className="loginContainer">
                <form className="formControl">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">Nos preocupa tu intimidad, tus datos nunca serán compartidos o vendidos.</div>
                    </div>
                    <div className="mb-3">
                        <label for="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
                        <div id="passwordHelpBlock" className="form-text">
                        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Login
