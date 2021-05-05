import React from 'react';
import './Girl.css';
import Navbar from '../../../components/Navbar/Navbar';
import girl1 from '../../../assets/Girl-Pics/girl1.jpeg'
import girl2 from '../../../assets/Girl-Pics/girl2.jpeg'
import girl3 from '../../../assets/Girl-Pics/girl3.jpeg'
import girl4 from '../../../assets/Girl-Pics/girl4.jpeg'

const Girl = () => {
    return (
        <div className="girlBody">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="imgGirlContainer">
                <img className="girlPic" alt="chico1" src={girl1}></img>
                <img className="girlPic" alt="chico1" src={girl2}></img>
                <img className="girlPic" alt="chico1" src={girl3}></img>
                <img className="girlPic" alt="chico1" src={girl4}></img>
            </div>
        </div>
    )
}

export default Girl
