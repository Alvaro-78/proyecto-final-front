import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home-Admin.css';
import {connect} from 'react-redux';
import axios from 'axios';



const HomeAdmin = (props) => {


    const [product, setProduct] = useState ({
        stock : '',
        category : '',
        name : '',
        size : '',
        description : '',
        price : '',
        picture : '',
        creation_date : '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
    }
    const handleState = (event) => {
        setProduct({...product, [event.target.name]: event.target.tyoe === 'number' ? + event.target.value : event.target.value})
    };


    const [showProduct, setShowProduct] = useState({
        product : []
    })

    const sendProduct = async () => {
        console.log("clickado")
        let body = {
            
            stock : product.stock,
            category : product.category,
            name : product.name,
            size : product.size,
            description : product.description,
            price : product.price,
            picture : product.picture,
            creation_date : product.creation_date,
        }
        console.log(body)
        
        let saveProduct = await axios.post('http://localhost:3000/admins/create-product', body);

        setShowProduct({
            ...showProduct,product: saveProduct.data.result
        })
        
    }

    if(props.admin?.id) {
        return (
            <div className="adminContainer">
                <Navbar/>  
                <div className="spaceUnderH1">
                    <h1>Crea Productos para tu Web Fácilmente</h1>
                </div>
                <div className="homeAdminBody">
                    <div className="homeAdminForm">
                        <form className="column g-1"
                            onSubmit={onSubmit}>
                            <div className="col-md-2 ml-2">
                                <label htmlFor="inputEmail1" 
                                className="form-label">
                                    Stock
                                </label>
                                <input type="number" 
                                className="form-control" 
                                id="inputEmail4"
                                name="stock"
                                onChange={handleState}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputState" 
                                className="form-label">
                                    Category
                                </label>
                                <select id="inputState" 
                                className="form-select"
                                name="category"
                                onChange={handleState}
                                defaultValue={'DEFAULT'}
                                >
                                    <option selected>Choose...</option>
                                    <option>Boy</option>
                                    <option>Girl</option>
                                    <option>Accesories</option>
                                    <option>Jewelry</option>
                                    <option>Shoes</option>
                                    <option>Discount</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputAddress" 
                                className="form-label">
                                    Product Name
                                </label>
                                <input type="text" 
                                className="form-control" 
                                id="inputAddress" 
                                placeholder="write name"
                                name="name"
                                onChange={handleState}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCity" 
                                className="form-label">
                                    Price
                                </label>
                                <input type="text" 
                                className="form-control" 
                                id="inputCity"
                                name="price"                                
                                onChange={handleState}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputState" 
                                className="form-label">
                                    Size
                                </label>
                                <select id="inputState" 
                                className="form-select"
                                name="size"
                                onChange={handleState}
                                >
                                <option selected>Choose...</option>
                                <option>Blythe</option>
                                <option>Tiny 1/8</option>
                                <option>Yosd 1/6</option>
                                <option>Msd/Mdd 1/4</option>
                                <option>Msd Slim (MiniFee)</option>
                                <option>Sd 1/3 (60+)</option>
                                <option>Sd 1/7 (63-65)</option>
                                <option>Sd Uncle (70+)</option>
                                </select>
                            </div>
                            <div className="uploadContainer">
                                <div class="col md-5">
                                    <label htmlFor="formFileMultiple" 
                                    className="form-label">
                                        Picture
                                    </label>
                                    <input className="form-control" 
                                    type="text" 
                                    id="formFileMultiple" 
                                    multiple
                                    name="picture"
                                    onChange={handleState}
                                    />
                                </div>
                            </div>                        
                            <div className="col-md-4">
                                <label htmlFor="inputZip" 
                                className="form-label">
                                    Date
                                </label>
                                <input type="date" 
                                className="form-control" 
                                id="inputZip"
                                name="creation_date"
                                onChange={handleState}
                                />
                            </div>
                            <div class="form-floating">
                                <div>
                                    <label htmlFor="floatingTextarea2">Description</label>
                                    <textarea class="form-control" 
                                        placeholder="Leave a comment here" 
                                        id="floatingTextarea2" 
                                        style={{height: '15em', width: '20em'}}
                                        name="description"
                                        onChange={handleState}
                                        >
                                    </textarea>
                                </div>
                            </div>                         
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" onClick={() => sendProduct()}>Create Product</button>
                            </div>
                        </form>
                    </div>
                    <div className="dataContainer">
                        Producto
                        <div>Stock: {product.stock}</div>
                        <div>Category: {product.category}</div>
                        <div>Product Name: {product.name}</div>
                        <div>Price: {product.price} Euros</div>
                        <div>Size: {product.size}</div>
                        <div><img scr={product.picture} alt="pic"></img></div>
                        <div>Date: {product.creation_date}</div>
                        <div>Description: {product.description}</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return(
            <div>
                <h1>you are not admin sry....</h1>
            </div>
        )
    }
};

const mapsStateToProps = state => {

    return {
        admin : state.adminReducer.admin,
    }
}


export default connect(mapsStateToProps)(HomeAdmin);


