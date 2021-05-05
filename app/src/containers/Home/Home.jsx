import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

import portadamuñecas from '../../assets/portadamuñecas.jpg';
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
            <Footer/>
        </div>
    )
}

export default Home