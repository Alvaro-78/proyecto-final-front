import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {REMOVE, BUY} from '../../redux/Types/productType'
import {SHOW} from '../../redux/Types/cartType';
import { useHistory } from 'react-router-dom';


import './Cart.css';



const Cart = (props) => {


    const deleteProduct = (index) => {
        props.dispatch({type:REMOVE, payload: index})
    }

        const history = useHistory();


    console.log(props.cartProduct)

    const buyProduct = (product) => {
        props.dispatch({type: BUY, payload: product})
        setTimeout(() => {history.push('/buy')}, 100);
    }



    return (
        <div className="boyContainer">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="imgBoyContainer">
            {
                props.cartProduct.map((productData, index) => {
                    return(
                        <div className="productsData" 
                        key={productData.product.id}>
                            <div className="cartContainer">
                                <div className="insideCart">
                                    <div className="addToCartButton" 
                                        onClick={() => buyProduct({productData})} 
                                        className="btn btn-primary">
                                            Buy Now!!!
                                    </div>                                        
                                    <img className="imgCartProduct" src={productData?.product.picture}></img>
                                    <div className="imgTitle">Name: {productData?.product.name}</div>
                                    <div className="imgTitle">Size: {productData?.product.size}</div>
                                    <div className="imgTitle">Category: {productData?.product.category}</div>
                                    <div className="imgTitle">Size: {productData?.product.size}</div>
                                    <div className="imgTitle">Price: {productData?.product.price} Euros</div>
                                    <div className="imgTitle">{productData?.product.creation_date}</div>
                                    <div className="imgTitle">{productData?.product.description}</div>
                                    <div className="addToCartButton" 
                                        onClick={() => deleteProduct(index)} 
                                        className="btn btn-primary">
                                            Delete From Cart
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

