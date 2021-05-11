import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './CartComponent.css';
import cart from '../../assets/Icons/cart.png'


const CartComponent = (props) => {

    let totalElementCart 
    return (
        <div className="cartContainer">
            <Link to='/cart'><img className="imgCart" src={cart}/></Link>
            <div className="cartQuantity">{totalElementCart}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.productReducer.cart
    }
}

export default connect(mapStateToProps)(CartComponent);
