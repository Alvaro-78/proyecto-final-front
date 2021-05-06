import React from 'react';
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/Types/customerType.js';
import { ADMINLOGOUT } from '../../redux/Types/adminType.js';
import {useHistory} from 'react-router-dom';
import './Navbar.css'



const Navbar = (props) => {

    let history = useHistory();

    const logOut =  () => {

        /*eslint no-restricted-globals: ["error", "event"]*/

        props.dispatch({ 
            type: LOGOUT, payload : {}, 
            type: ADMINLOGOUT, palyload : {}
        });
    
        setTimeout(()=> {
            history.push('/');
        },2000);
    };

    console.log(props.admin?.id)

    if(props.customer?.id || props.admin?.id) {

        return(
            <div className="headerNavbar">
                <nav className="navbar navbar-expand-lg navbar-grey bg-grey">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DOLLMINATRIX</a>
                        <button className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">                        
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <a className="nav-link active" 
                                    aria-current="page" href="/cart">Cart</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" 
                                    href="/categories" id="navbarDropdown" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/categories/boy">Boy</a></li>
                                        <li><a className="dropdown-item" href="/categories/girl">Girl</a></li>
                                        <li><a className="dropdown-item" href="/categories/accesories">Accesories</a></li>
                                        <li><a className="dropdown-item" href="/categories/Jewelry">Jewelry</a></li>
                                        <li><a className="dropdown-item" href="/categories/">Shoes</a></li>
                                        <li><a className="dropdown-item" href="/categories/">Discount</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="/size">Size</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    <a className="nav-link active logOut"  
                        aria-current="page" 
                        onClick={() => logOut()}
                        >
                        Salir
                        </a>
                    </div>
                    <div className="customerName">
                        ¡Hola {props.customer?.name}  {props.admin?.name}!
                        
                    </div>
                </nav>
            </div>    
        )    
    } else {

        return (
            <div className="headerNavbar">
                <nav className="navbar navbar-expand-lg navbar-grey bg-grey">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DOLLMINATRIX</a>
                        <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">                        
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" 
                                    aria-current="page" 
                                    href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" 
                                    href="/register">Register</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" 
                                    href="/categories" id="navbarDropdown" 
                                    role="button" data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/categories/boy">Boy</a></li>
                                        <li><a className="dropdown-item" href="/categories/girl">Girl</a></li>
                                        <li><a className="dropdown-item" href="/categories/accesories">Accesories</a></li>
                                        <li><a className="dropdown-item" href="/categories/Jewelry">Jewelry</a></li>
                                        <li><a className="dropdown-item" href="/categories/">Shoes</a></li>
                                        <li><a className="dropdown-item" href="/categories/">Discount</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="/size">Size</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>    
        )
    }

}

const mapStateToProps = state => {
   
    return {
        customer : state.customerReducer.customer,
        token    : state.customerReducer.token,
        admin    : state.adminReducer.admin
    }
 };

export default connect(mapStateToProps)(Navbar);
