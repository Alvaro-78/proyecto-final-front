import React from 'react';
import {connect} from 'react-redux';
import {REMOVE, ORDER} from '../../redux/Types/productType'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import './Buy.css'


const Buy = (props) => {


    let body = {
        order: props.cart
    }
    const history = useHistory();

    const buyProduct = () => {
        let result = axios.post(('http://localhost:3000/orders', body))
        setTimeout(() => {history.push('/')}, 100);
        console.log(result)
    }

     console.log(props.customer)
    if( props.customer.id) {

        return (
            <div className="boyContainer">
                <Navbar/>
                <div className="spaceUnderNav"></div>
                <div className="showProductContainer">
                    <div className="productsToShow">
                            <img className="productImg" src={props.cart.product.product.picture}></img>
                        <div className="insideContainer">
                            <div className="imgTitle">Name: {props.cart.product.product.name}</div>
                            <div className="imgTitle">Size: {props.cart.product.product.size}</div>
                            <div className="imgTitle">Category: {props.cart.product.product.category}</div>
                            <div className="imgTitle">Stock: {props.cart.product.product.stock}</div>
                            <div className="imgTitle">Date: {props.cart.product.product.creation_date}</div>
                            <div className="imgTitle">Description: {props.cart.product.product.description}</div> 
                            <div className="imgTitle">Price: {props.cart.product.product.price} Euros + 4.95 gastos de envio</div>
                        <div className="SendToCart">
                            <button type="submit" 
                                className="btn btn-primary " 
                                onClick={() => buyProduct(props.cart.product.product)}>
                                    Buy Now!!!
                            </button>
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }else {
        return(
            <h1>Sorry you are not register</h1>
        )
    }
} 

const mapStateToProps = state => {
   
    return {
        customer : state.customerReducer.customer,
        token : state.customerReducer.token,
        admin : state.adminReducer.admin,
        cartProduct : state.cartReducer.cartProduct,
        cart : state.productReducer.cart
    
    }
 };

export default connect(mapStateToProps)(Buy)
