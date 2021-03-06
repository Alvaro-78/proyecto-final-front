import React,{ useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/Types/customerType";
import { ADMINLOGIN } from "../../redux/Types/adminType";
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import handmade3 from '../../assets/pictures/handmade3.jpg';
import Footer from '../../components/Footer/Footer'


import './Login.css';


const Login = (props) => {

    const history = useHistory();

    const [dataLogin, setLogin] = useState({
    
        email     : '',
        password  : '', 
        userType   : 'Client'
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

     const handleSubmit = (e) => { 
        e.preventDefault();
        e.target.reset(); 
    }

    
    const sendData = async () => {

        try {

            let body = {
                email     : dataLogin.email,
                password  : dataLogin.password
            }
            
            if(dataLogin.userType === 'Client') {
                let resultLogin = await  axios.post('http://localhost:3000/customers/login', body);
                props.dispatch({type: LOGIN, payload: resultLogin.data})
                return setTimeout(() => {history.push('/')}, 100);

            } else {
                const resultAdmin = await axios.post('http://localhost:3000/admins/login', body)
                props.dispatch({type: ADMINLOGIN, payload: resultAdmin.data});
                return setTimeout(() => {history.push('/home-admin')}, 100);
            }

        }catch (error) {

            console.log(error, 'Email or password not found')

        }
    }
  
    return (
        <div className="loginBody">
            <div className="header">
                <Navbar/>
            </div>
            <div className="formBody">
                <div className="formContainer">
                <form  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" 
                        className="form-label">Email address</label>
                        <input type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email" 
                        onChange={handleState}
                        />
                        <div id="emailHelp" 
                        className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-2 password">
                        <label htmlFor="exampleInputPassword1" 
                        className="form-label">
                            Password
                        </label>
                        <input type="password" 
                        className="form-control" 
                        id="myInput" 
                        name="password" 
                        onChange={handleState}
                        />
                    </div>
                    <select className="select" 
                        name="userType" 
                        defaultValue={'DEFAULT'} 
                        onChange={handleState}>
                        <option value="Client">Client</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button type="submit" 
                        className="btn btn-primary" 
                        onClick={() => showPassword()}>show password</button>
                        <button type="submit" 
                        className="btn btn-primary" 
                        onClick={() => sendData()}>
                            Send
                    </button>
                </form>               
             </div>
            </div>
            <div>
                <img className="handMade2" src={handmade3} alt="handmade3"></img>
            </div>
            <Footer/>
        </div>
    );
};



export default connect()(Login);