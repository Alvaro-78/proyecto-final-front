import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {REMOVE, BUY} from '../../redux/Types/productType'
import { useHistory } from 'react-router-dom';


import './Cart.css';



const Cart = (props) => {


    const deleteProduct = (index) => {
        props.dispatch({type:REMOVE, payload: index})
    }

        const history = useHistory();



    const buyProduct = (product) => {
        props.dispatch({type: BUY, payload: product})
        setTimeout(() => {history.push('/buy')}, 100);
    }



    return (
        <div className="fondo">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="imgBoyContainer">
            {
                props.cartProduct.map((product, index) => {
                    return(
                        <div className="productsData" 
                        key={product.product.id}>
                            <div className="cartContainer">
                                <div className="insideCart">
                                    <div className="addToCartButton" 
                                        onClick={() => deleteProduct(index)} 
                                        className="btn btn-danger">
                                            Delete From Cart
                                    </div>                                        
                                    <img className="imgCartProduct" src={product?.product.picture}></img>
                                    <div className="imgTitle">Name: {product?.product.name}</div>
                                    <div className="imgTitle">Size: {product?.product.size}</div>
                                    <div className="imgTitle">Category: {product?.product.category}</div>
                                    <div className="imgTitle">Size: {product?.product.size}</div>
                                    <div className="imgTitle">Price: {product?.product.price} Euros</div>
                                    <div className="imgTitle">{product?.product.creation_date}</div>
                                    <div className="imgTitle">{product?.product.description}</div>
                                    <div className="addToCartButton" 
                                        onClick={() => buyProduct({product})} 
                                        className="btn btn-primary">
                                            Buy Now!!!!
                                    </div>                                        
                                </div>   
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        cartProduct : state.cartReducer.cartProduct,
        cart : state.productReducer.cart
    }

};
export default connect(mapStateToProps)(Cart)

