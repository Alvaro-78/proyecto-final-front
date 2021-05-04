import React, {useState} from 'react';
import axios from 'axios'

import './Register.css';
import Navbar from '../../components/Navbar/Navbar';

const Register = () => {

    const [dataRegister, setRegister] = useState({
    
        name        : '',
        surName     : '',
        email       : '',
        password    : '', 
        suscription : '',
        address     : '',
        city        : '',
        zip_code    : '',
        province    : '',
        country     : '',
        phone       : '',
    });

    const handleState = (event, props) => {
        setRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };
    
    const sendData = async () => {
        console.log("Me han clickado")
        
        let body = {
            name        : dataRegister.name,
            surName     : dataRegister.surName,
            email       : dataRegister.email,
            password    : dataRegister.password, 
            suscription : dataRegister.suscription,
            address     : dataRegister.address,
            city        : dataRegister.city,
            zip_code    : dataRegister.zip_code,
            province    : dataRegister.province,
            country     : dataRegister.country,
            phone       : dataRegister.phone,
        }
        console.log(body)
        
        let result = await axios.post('http://localhost:3001/customers', body);

        console.log(result)
    }


    return (
        <div className="registerBody">
            <div className="header">
                <Navbar/>              
            <div className="spaceUnderHeader"></div>
            </div>
            <div className="registerContainer"> 
                <form className="registerForm">
                    <div className="name">Name
                        <input type="name" maxLength="30" name="name" onChange={handleState}/>
                    </div>
                    <div className="surName">SurName
                        <input type="text" maxLength="30" name="surName" onChange={handleState}/>
                    </div>
                    <div className="email">Email
                        <input type="email" maxLength="30" name="email" onChange={handleState}/>
                    </div>
                    <div className="password">Password
                        <input type="password" maxLength="30" name="password" onChange={handleState}/>
                    </div>
                    <div className="suscription">Suscription
                        <input type="text" maxLength="30" name="suscription" onChange={handleState}/>
                    </div>
                    <div className="address">Address
                        <input type="address" maxLength="30" name="address" onChange={handleState}/>
                    </div>
                    <div className="city">City
                        <input type="text" maxLength="30" name="city" onChange={handleState}/>
                    </div>
                    <div className="zipCode">Zip Code
                        <input type="number" maxLength="30" name="zip_code" onChange={handleState}/>
                    </div>                    
                    <div className="province">Province
                        <input type="txt" maxLength="30" name="province" onChange={handleState}/>
                    </div>
                    <div className="country">Country
                        <input type="text" maxLength="30" name="country" onChange={handleState}/>
                    </div>
                    <div className="phone">Phone
                        <input type="number" maxLength="30" name="phone" onChange={handleState}/>
                    </div>
                </form>          
            </div>
        </div>
    )
}

export default Register
