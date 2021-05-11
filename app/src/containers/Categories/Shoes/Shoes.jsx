import React, {useState , useEffect } from 'react';
import './Shoes.css';
import Navbar from '../../../components/Navbar/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import {SHOW} from '../../../redux/Types/cartType'
import { useHistory } from 'react-router-dom';



const Shoes = (props) => {

    useEffect(()=>{
        
        getImg();
        // eslint-disable-next-line
    },[])

    const [products, setProducts] = useState ({

        listProducts : []
    })

    const history = useHistory();


    const getImg = async () => {

        const imgCollection = await axios.get('http://localhost:3000/products')

        setProducts({
            ...products, listProducts: imgCollection.data
        })
    }

    const shoes = products.listProducts.filter(objecProduct => objecProduct.category.includes('Shoes'));

    const saveProduct = (product) => {
        props.dispatch({type: SHOW, payload: product})
        setTimeout(() => {history.push('/cart')}, 100);
    }

    console.log(products)

    return (
        <div>
           <Navbar/>
           <div className="spaceUnderNav"></div>
           <div className="imgBoyContainer">
                {
                    shoes.map(product => {
                        return(
                            <div className="productsData"  key={product._id}>
                                <div className="cartContainer">
                                    <div className="insideCart">
                                        <img className="imgBoy" src={product.picture}></img>
                                        <div className="imgTitle">{product.name}</div>
                                        <div className="addToCartButton" 
                                        onClick={() => saveProduct({product})} 
                                        className="btn btn-primary">
                                            Add to Cart
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
        cartProduct : state.cartReducer.cartProduct
    }
};


export default connect(mapStateToProps)(Shoes);
