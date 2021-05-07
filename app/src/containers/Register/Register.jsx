import React, {useState} from 'react';
import axios from 'axios';

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

    const handleState = (event) => {
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
        
        let result = await axios.post('http://localhost:3000/customers', body);

        console.log(result)
    }


    return (
        <div className="registerBody">
            <div className="header">
                <Navbar/>
            </div>
            <div className="spaceUnderHeader"></div>
            <div className="formBody">
                <div className="registerContainer"> 
                    <form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom01" 
                            className="form-label">
                                Name
                            </label>
                            <input type="name" 
                            className="form-control" 
                            id="validationCustom01" 
                            name="name" 
                            required 
                            onChange={handleState}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" 
                            className="form-label">
                                SurName
                            </label>
                            <input type="surname" 
                            className="form-control" 
                            id="validationCustom02" 
                            name="surName" 
                            required 
                            onChange={handleState}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom03" 
                            className="form-label">
                                Email
                            </label>
                            <div className="input-group has-validation">
                                <input type="email" 
                                className="form-control" 
                                id="validationCustom03" 
                                name="email" 
                                aria-describedby="inputGroupPrepend" 
                                required 
                                onChange={handleState}
                                />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom04" 
                            className="form-label">
                                Password
                            </label>
                            <input type="password" 
                            className="form-control" 
                            id="validationCustom04" 
                            name="password" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="validationCustom06" 
                            className="form-label">
                                Address
                            </label>
                            <input type="text" 
                            className="form-control" 
                            id="validationCustom06" 
                            name="address" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom07" 
                            className="form-label">
                                City
                            </label>
                            <input type="text" 
                            className="form-control" 
                            id="validationCustom07" 
                            name="city" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom08" 
                            className="form-label">
                                Province
                            </label>
                            <input type="text" 
                            className="form-control" 
                            id="validationCustom08" 
                            name="province" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="validationCustom09" 
                            className="form-label">
                                Zip Code
                            </label>
                            <input type="number" 
                            className="form-control" 
                            id="validationCustom09" 
                            name="zip_code" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom10" 
                            className="form-label">
                                Country
                            </label>
                            <input type="text" 
                            className="form-control" 
                            id="validationCustom10" 
                            name="country" 
                            required 
                            onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom11" 
                            className="form-label">
                                Phone
                            </label>
                            <input type="number" 
                            className="form-control" 
                            id="validationCustom11" 
                            name="phone" 
                            required 
                            onChange={handleState}/>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="slideButtonStyle">
                            <div className="form-check form-switch">
                                <input className="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault"
                                />
                                <label className="form-check-label" 
                                htmlFor="flexSwitchCheckDefault" 
                                name="suscription" 
                                required 
                                onChange={handleState}>
                                    Suscription
                                </label>
                            </div>
                        </div>                    

                        <div className="col-12">
                            <button className="btn btn-primary" 
                            type="button" 
                            onClick={() => sendData()}>
                                Submit form
                            </button>
                        </div>
                    </form>            
                </div>
            </div>
        </div>
    )
}

export default Register
