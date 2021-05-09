import React, {useState , useEffect } from 'react';
import './Girl.css';
import Navbar from '../../../components/Navbar/Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import {SHOW} from '../../../redux/Types/productType'


const Girl = (props) => {

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

    const girl = products.listProducts.filter(objecProduct => objecProduct.category.includes('Girl'));

    const saveProduct = () => {
        props.dispatch({type: SHOW,  saveProduct})
    }

    

    return (
        <div className="girlBody">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="boyContainer">
                <div className="imgBoyContainer">
                {
                    girl.map(productTitle => {
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

export default Girl
