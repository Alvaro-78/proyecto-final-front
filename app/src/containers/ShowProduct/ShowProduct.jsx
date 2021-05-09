import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowProduct.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {SHOW} from '../../redux/Types/productType';



const ShowProduct = (props) => {

    
   
    
    console.log(props.getProduct.boy)


    return (
        <div className="boyContainer">
            <Navbar/>
            <div className="spaceUnderNav"></div>
                <div className="imgBoyContainer">
                <div>
                        Category: {props.getProduct.boy.category}
                    </div>
                    <div>
                        Name: {props.getProduct.boy.name}
                    </div>
                    <div>
                        Price: {props.getProduct.boy.price}
                    </div>
                    <div>
                        Size: {props.getProduct.boy.size}
                    </div>
                    <div>
                        Stock: {props.getProduct.boy.stock}
                    </div>
                    <div>
                        Creation date: {props.getProduct.boy.creation_date}
                    </div>
                    <div>
                        <img src={props.getProduct.boy.picture}></img>
                    </div>
                    <div>
                        Category: {props.getProduct.boy.description}
                    </div>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getProduct : state.productReducer.getProduct
    }
};


export default connect(mapStateToProps)(ShowProduct);
