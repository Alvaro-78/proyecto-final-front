import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './Boy.css';
import chico1 from '../../../assets/Boy-Pics/chico1.jpeg';
import chico2 from '../../../assets/Boy-Pics/chico2.jpg'

const boy = () => {
    return (
        <div className="boyContainer">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="imgBoyContainer">
                <img className="boyPic" alt="chico1" src={chico1}></img>
                <img className="boyPic" alt="chico2" src={chico2}></img>
            </div>
        </div>
    )
}

export default boy
