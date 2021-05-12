import React from 'react';
import './Carousel.css';
import portadamuñecas from '../../assets/pictures/portadamuñecas.jpg';
import cuello from '../../assets/pictures/cuello.jpg';
import wickerbasket from '../../assets/pictures/wickerbasket.jpeg';


const Carousel = () => {
    return (
        <div className="carouselContainer">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={portadamuñecas} className=" imgSize" alt="muñecas"/>
                    </div>
                    <div className="carousel-item">
                        <img src={cuello} className=" imgSize" alt="cuello"/>
                    </div>
                    <div className="carousel-item">
                        <img src={wickerbasket} className=" imgSize" alt="manta"/>
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
        </div>
    )
}

export default Carousel
