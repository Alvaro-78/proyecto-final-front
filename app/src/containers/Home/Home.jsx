import React from 'react';

import portadamuñecas from '../../assets/portadamuñecas.jpg';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="headerHome">
                <Navbar/>
            </div>
            <div className="imageDiv">
                <img className="imgMovie" alt="dolls" src={portadamuñecas}></img>
            </div>
        </div>
    )
}

export default Home