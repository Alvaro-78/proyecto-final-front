import React from 'react';
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/Types/customerType.js';
// import {useHistory} from 'react-router-dom';




const Navbar = (props) => {

    const logOut =  () => {

        props.dispatch({ type: LOGOUT, payload : {}});
    
        // setTimeout(()=> {
        //     history.push('/');
        // },300);
    };
    console.log(props.costumer)

    if(props.costumer?.id) {

        return(

            <nav className="navbar navbar-expand-lg navbar-grey bg-grey">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">DOLLMINATRIX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                        
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/register">Register</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )    
    } else {

    }

    return (
        <div>
        </div>
    )
}

const mapsStateToProps = state => {

    return {
        customer : state.custommerReducer.customer,
        token : state.customerReducer.token
    }
 };

export default connect(mapsStateToProps)(Navbar);
