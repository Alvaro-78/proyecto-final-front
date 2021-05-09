import React, {useState , useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './Boy.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {SHOW} from '../../../redux/Types/productType';
import { useHistory } from 'react-router-dom';


const Boy = (props) => {

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

    const boys = products.listProducts.filter(objecProduct => objecProduct.category.includes('Boy'));
    
    const saveProduct = (boy) => {
        props.dispatch({type: SHOW, payload: boy})
        setTimeout(() => {history.push('/show-product')}, 100);
    }

    return (
        <div className="boyContainer">
            <Navbar/>
            <div className="spaceUnderNav"></div>
            <div className="imgBoyContainer">
            {
                   boys.map(boy => {
                       return(
                           <div className="productsData" onClick={() => saveProduct({boy})}  key={products._id}>
                               <div>
                                    <img className="imgBoy" src={boy.picture}></img>
                                    <div className="imgTitle">{boy.name}</div>
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
        getProduct : state.productReducer.getProduct
    }
};


export default connect(mapStateToProps)(Boy)
