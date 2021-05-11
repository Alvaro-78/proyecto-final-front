import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom';
 
import portadamuñecas from '../../assets/pictures/portadamuñecas.jpg';
import cuello from '../../assets/pictures/cuello.jpg';
import manta from '../../assets/pictures/manta.jpg';
import redshoes from '../../assets/pictures/redshoes.jpeg';
import vestido from '../../assets/pictures/vestido.jpeg';
import chico1 from '../../assets/pictures/chico1.jpeg';
import colgante2 from '../../assets/pictures/colgante2.jpeg';


import './Home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="headerHome">
                <Navbar/>
            </div>
            <div className="spaceUnderNav"></div>
            <div id="carouselExampleIndicators" className="carousel slide carouselContainer" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={portadamuñecas} className="d-block w-100 imgSize" alt="muñecas"/>
                    </div>
                    <div className="carousel-item">
                        <img src={cuello} className="d-block w-100 imgSize" alt="cuello"/>
                    </div>
                    <div className="carousel-item">
                        <img src={manta} className="d-block w-100 imgSize" alt="manta"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="spaceUnderCaroulse"></div>
            <div className="cardContainer">
                <div class="row row-cols-2 row-cols-md-4 g-6">
                    <div className="col">
                        <div className="card">
                            <img className="imgCard" src={redshoes} alt="shoes"/>
                        <div className="card-body">
                        <Link to='/categories/shoes'><h5 className="card-title">Shoes for the whole family</h5></Link>
                            <p className="card-text">Ideal models and super warm to be personalized for the whole family</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="imgCard" src={vestido}  alt="dress"/>
                        <div className="card-body">
                        <Link to='/categories/shoes'><h5 className="card-title">Handmade dresses</h5></Link>
                            <p className="card-text">Dresses of many sizes both for people and for your dolls</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="imgCard" src={chico1}  alt="doll"/>
                        <div className="card-body">
                        <Link to='/categories/boys'><h5 className="card-title">Crochet dolls</h5></Link>
                            <p className="card-text">If you have any own design we can do it, ask prices xD !!</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="imgCard" src={colgante2}  alt="jewelry"/>
                        <div className="card-body">
                        <Link to='/categories/jewelry'><h5 className="card-title">Beauty accessories</h5></Link>
                            <p className="card-text">Pendants, earrings, bracelets all handmade and with a lot of love !!!</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="spaceUnderCaroulse"></div>            
            <Footer/>
        </div>
    )
}

export default Home
