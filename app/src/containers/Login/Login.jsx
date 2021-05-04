import React,{ useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';


const Login = () => {

    const [dataRegister, setRegister] = useState({
    
        email       : '',
        password    : '', 
    });

    const handleState = (event, props) => {
        setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
      };

    const showPassword = () => {
        var type = document.getElementById("myInput");
            if (type.type === "password") {
            type.type = "text";
            } else {
            type.type = "password";
            }
    }

    const sendData = () => {
        console.log("dtos enviados")
    }
  
    return (
        <div className="loginBody">
            <div className="header">
                <Navbar/>
            </div>
            <div className="formBody">
                <div className="formContainer">
                    <form>
                        <div>Email</div>
                        <div>
                            <input type="email" maxLength="30" name="email" onChange={handleState}/>
                        </div>
                        <div className="formPassword"> Password
                            <div>
                                <input className="passwordInput" type="password" name="password" id="myInput"/>
                            </div>
                            <div className="buttonContainer">
                                <div className="buttonPassword">
                                </div> 
                                <div className="buttonSend">
                                </div>
                            </div>              
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login
