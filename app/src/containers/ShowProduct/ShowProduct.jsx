import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowProduct.css';
import Footer from '../../components/Footer/Footer';
import ordermessage from '../../assets/pictures/ordermessage.jpeg'
import { useHistory } from 'react-router-dom';


const ShowProduct = () => {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {history.push('/')}, 1000);
    }, [])

    return (
        <div className="boyContainer">
            <Navbar/>
            <div>
                <img className="orderMessage" src={ordermessage} alt="ordermessage"></img>
            </div>
            <Footer/>
        </div>
    )
}



export default ShowProduct;
