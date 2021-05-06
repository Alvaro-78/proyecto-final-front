import React from 'react';
import {connect} from 'react-redux';
import './CartComponent.css';
import cart from '../../assets/Icons/cart.png'


const CartComponent = (props) => {

    let totalElementCart = props.cart.length;
    return (
        <div className="cartContainer">
            <img className="imgCart" src={cart}/>
            <div className="cartQuantity">{totalElementCart}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(CartComponent);
