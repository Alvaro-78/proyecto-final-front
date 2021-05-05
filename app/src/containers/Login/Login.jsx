import React,{ useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/Types/customerType";
import { useHistory } from 'react-router-dom';

import './Login.css';


const Login = (props) => {

    const history = useHistory();

    const [dataLogin, setLogin] = useState({
    
        email       : '',
        password    : '', 
    });

    const handleState = (event, props) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
      };

    const showPassword = () => {

        let type = document.getElementById("myInput");
            if (type.type === "password") {
            type.type = "text";
            } else {
            type.type = "password";
            }
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    const sendData = async () => {

        let body = {
            email       : dataLogin.email,
            password    : dataLogin.password
        }
        console.log(body)

       let result = await  axios.post('http://localhost:3000/customers/login', body);
       console.log(props.dispatch)
       props.dispatch({type: LOGIN, payload: result.data});
       return setTimeout(() => {history.push('/')}, 100);
    }
  
    return (
        <div className="loginBody">
            <div className="header">
                <a className="logoName" href="/">DOLLMINATRIX</a>
            </div>
            <div className="formBody">
                <div className="formContainer">
                <form action="" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleState}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 password">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="myInput" name="password" onChange={handleState}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => showPassword()}>show password</button>
                    <button type="submit" className="btn btn-primary" onClick={() => sendData()}>Send</button>
                </form>               
             </div>
            </div>
        </div>
    );
};



export default connect()(Login);