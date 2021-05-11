import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ShowProduct.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {SHOW} from '../../redux/Types/cartType';


const ShowProduct = (props) => {

    const history = useHistory();

    // const [quantity, setQuantity] = useState ({
        
    //     inputQuantity : ''
    // })
    
    // const handleState = (event) => {
    //     setQuantity({...quantity, [event.target.name]: event.target.tyoe === 'number' ? + event.target.value : event.target.value})
    // };

    // let body = {
    //     productId : props.getProduct.boy
    // }
    

    const sendToCart = async () => {
        props.dispatch({type: SHOW, payload: props.cartProduct})
        return setTimeout(() => {history.push('/cart')}, 100);
    }

    console.log(props.cartProduct.product)

    return (
        <div className="boyContainer">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="showProductContainer">
                <div className="productsToShow">
                        <img className="productImg" src={props.cartProduct.product.picture}></img>
                    <div className="insideContainer">
                        <div className="imgTitle">Name: {props.cartProduct.product.name}</div>
                        <div className="imgTitle">Size: {props.cartProduct.product.size}</div>
                        <div className="imgTitle">Category: {props.cartProduct.product.category}</div>
                        <div className="imgTitle">Stock: {props.cartProduct.product.stock}</div>
                        <div className="imgTitle">Price: {props.cartProduct.product.price}</div>
                        <div className="imgTitle">Date: {props.cartProduct.product.creation_date}</div>
                        <div className="imgTitle">Description: {props.cartProduct.product.description}</div> 
                    <div className="SendToCart">
                        <button type="submit" 
                            className="btn btn-primary " 
                            onClick={() => sendToCart()}>
                                Send
                        </button>
                    </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       cartProduct : state.cartReducer.cartProduct
    }
};


export default connect(mapStateToProps)(ShowProduct);
{/* <label htmlFor="inputEmail1" 
    className="labelQuantity">
        Quantity:
</label>
<input type="number" 
    className="quantityInput" 
    name="quantity"
    onChange={handleState}
/>
<label htmlFor="inputEmail1" 
    className="labelQuantity">
       {/* Total Price: {incrementPrice} */}
// </label> */}
