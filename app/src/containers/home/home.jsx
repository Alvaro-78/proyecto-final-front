import React from 'react';

import Navbar from '../../components/navbar/navbar' 
import portadamuñecas from '../../assets/portadamuñecas.jpg';
import './home.css'
import './normalized.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar/>
            <div className="imageDiv">
                <img className="imgMovie" alt="dolls" src={portadamuñecas}></img>
            </div>
        </div>
    )
}

export default Home


