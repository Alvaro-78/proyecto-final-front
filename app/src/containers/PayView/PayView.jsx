import React from 'react';
import {REMOVE, BUY} from '../../redux/Types/productType';
import Navbar from '../../components/Navbar/Navbar';
import {connect} from 'react-redux';

import './PayView.css'

const PayView = (props) => {

    console.log("dentro de pay", props.cart)

    return (
        <div className="payContainer">
            <div className="boyContainer">
                <Navbar/>
                <div className="spaceUnderNav"></div>
                <div className="buyContainer">
                {
                    props.cart.map((productData, index) => {
                        return(
                            <div>
                                <div className="productsData"  key={productData._id}>
                                    <div className="insideCart">
                                        <img className="imgBuy" src={productData.product?.product.picture}></img>
                                        <div className="imgTitle">Nombre: {productData.product?.product.name}</div>
                                        <div className="imgTitle">Stock: {productData.product?.product.stok}</div>
                                        <div className="imgTitle">Size: {productData.product?.product.size}</div>
                                        <div className="imgTitle">Price: {productData.product?.product.price} Euros</div>
                                        <div className="imgTitle">Category: {productData.product?.product.category}</div>
                                        <div className="imgTitle">{productData.product?.product.description}</div>
                                        <div>
                                            {productData.product?.product.price} Euros + 4.95 gastos de envío 
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
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

export default connect(mapStateToProps)(PayView)
