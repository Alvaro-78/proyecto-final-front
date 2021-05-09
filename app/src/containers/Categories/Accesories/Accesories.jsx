import React, {useState , useEffect } from 'react';
import './Accesories.css';
import Navbar from '../../../components/Navbar/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import {SHOW} from '../../../redux/Types/productType'


const Accesories = (props) => {

    useEffect(()=>{
        
        getImg();
        // eslint-disable-next-line
    },[])

    const [products, setProducts] = useState ({

        listProducts : []
    })

    const getImg = async () => {

        const imgCollection = await axios.get('http://localhost:3000/products')

        setProducts({
            ...products, listProducts: imgCollection.data
        })
    }

    const accesories = products.listProducts.filter(objecProduct => objecProduct.category.includes('Accesories'));

    const saveProduct = () => {
        props.dispatch({type: SHOW,  saveProduct})
    }

    console.log(accesories)

    return (
        <div>
           <Navbar/>
           <div className="spaceUnderNav"></div>
           <div className="boyContainer">
                <div className="imgAccsContainer" onClick={() => saveProduct()}>
                    {
                        accesories.map(productTitle => {
                            return(
                                <div className="productsData" key={products._id}>
                                    <div>
                                            <img className="imgBoy" src={productTitle.picture}></img>
                                            <div className="imgTitle">{productTitle.name}</div>
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
        showProduct : state.productReducer.showProduct
    }
};

export default connect(mapStateToProps)(Accesories)
