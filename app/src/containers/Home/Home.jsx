import React from 'react';

import portadamuñecas from '../../assets/portadamuñecas.jpg';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="header">
                <Navbar/>
                {/* <a className="logoName" href="/">DOLLMINATRIX</a>
                <a className="loginName" href="/login">Login</a>
                <a className="registerName" href="/register">Register</a>
                <div className="dropdown">
                <button className="dropdownButton dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </button>
                <ul className="dropdown-menu">
                    <li><a  href="#">Action</a></li>
                    <li><a  href="#">Another action</a></li>
                    <li><a  href="#">Something else here</a></li>
                </ul>
                </div> */}
            </div>
            <div className="imageDiv">
                <img className="imgMovie" alt="dolls" src={portadamuñecas}></img>
            </div>
        </div>
    )
}

export default Home