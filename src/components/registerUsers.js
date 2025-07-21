import React, { useContext } from "react";
import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import { useState, useEffect, useRef } from "react";
import { CardGroup, CardHeader, Row, Card, CardBody, CardText, CardTitle, Button, Col, FormGroup, Form, Label, Input } from 'reactstrap';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import axios from 'axios';
import { SERVER_DOMAIN } from "../scripts/constants";
import { DonatePageContext } from "../context/donatePageContext";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RECAPTCHA from 'react-google-recaptcha';
import { isUnitless } from "@mui/material/styles/cssUtils";

const RegisterUsers = () => {
    const recaptcha = useRef();

    useEffect(() => {
        document.title = "Register";
    }, []);
    
    const navigate = useNavigate();
    
    const [register, setRegister] = useState({}); 
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    
    const [formValue, setformValue] = React.useState({
        firstName: '',
        lastName:'',
        mobile: '',
        email: '',
        address: ''
      });

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
          });
    }
   
    const handleSubmit = async(e) => {
        e.preventDefault();    
        setMessage(''); // Clear previous messages
        setIsError(false); // Reset error state

        const register = {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            email: formValue.email, 
            mobile: formValue.mobile, 
            address: formValue.address
        };

        
        if (!register.mobile.match(/^(\d{10})$/)) {
            setError('Please enter a valid mobile number.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(register.email)) {
            setError("Invalid email address");
            return;
        }

        // if (isNaN(register.address) || register.address <= 1) {
        //     setError('Please enter a valid address.');
        //     return;
        // }
        
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
            setError('Please verify the reCAPTCHA!');
            return;
        }
        console.log("Registration = "+register.firstName + " "+register.lastName);
        console.log("Registration = "+register.email);
        console.log("Registration = "+register.mobile);
        console.log("Registration = "+register.address);

        try {
          // make axios post request
          toast.info("Initializing registration, please do not click back button!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            theme: "dark",
          });


            // const res = await fetch('/api/v1/recaptcha-verify', {
            //     method: 'POST',
            //     body: JSON.stringify({ captchaValue }),
            //     headers: {
            //         'content-type': 'application/json',
            //     },
            // })
            // const data = await res.json()
            // if (data.success) {
            // // make form submission

            const response = await axios({
                method: "post",
                url: "/api/v1/users",
                data: register
                // headers: { "Content-Type": "multipart/form-data" },
              }).then(res=>{
                    console.log(res);
                    console.log(res.data);
                    setTimeout(() => {
                        toast.success("Successfuly initiated regisration", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: true,
                          theme: "light",
                        });
                      }, 1);
                    navigate("/registration-result", {state : {
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email, 
                        mobile: res.data.mobile, 
                        address: res.data.address                        
                    }}) 
                })
               

            // alert('Form submission successful!')
            // } else {
            // alert('reCAPTCHA validation failed!')
            // }

        } catch(error) {
          console.log(error);
          setError("");
          if (error.response.status === 409) {
            toast.error("User with same email and mobile already exists!, please try again!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: true,
                theme: "dark",
            });
          } else {
                toast.error("Something went wrong, please try again!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: true,
                    theme: "dark",
                });
          }
          if (error.response.status === 409) {
            // This is our specific 409 Conflict error
            setIsError(true);
            // Assuming the backend sends a JSON with a 'message' field
            setMessage(error.response.data.message || 'A user with this email and mobile already exists.');
          }
        }
      }


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
            <Navigation/>
            <Heading/>
            <hr/>
            
            <Row>
                <Col sm="4"/>{/* <Button type="" className="btn btn-warning" onClick={gotToNextPage}>Checkout</Button></Col> */}
                <Col sm="4">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <CardGiftcardIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Register Users</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">                  
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    {error && <p style={{color: 'red'}}>{error}</p>}
                                    <Label>First Name *</Label>
                                    <Input 
                                        id="firstName"
                                        type="text" 
                                        placeholder="Enter first Name"
                                        name="firstName" 
                                        className="form-control" 
                                        value={formValue.firstName}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, firstName: e.target.value})
                                        // }}
                                    />
                                    <Label>Last Name *</Label>
                                    <Input 
                                        id="lastName"
                                        type="text" 
                                        placeholder="Enter last Name"
                                        name="lastName" 
                                        className="form-control" 
                                        value={formValue.lastName}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, lastName: e.target.value})
                                        // }}
                                    />
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Mobile *</Label>
                                    <Input 
                                        id="mobile"
                                        type="text" 
                                        placeholder="Enter Mobile"
                                        name="mobile" 
                                        className="form-control" 
                                        value={formValue.mobile}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, mobile: e.target.value})
                                        // }}
                                    />
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Email *</Label>
                                    <Input 
                                        id="email"
                                        type="text" 
                                        placeholder="Enter Email"
                                        name="email" 
                                        className="form-control" 
                                        value={formValue.email}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, email: e.target.value})
                                        // }}
                                    />
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Address *</Label>
                                    <textarea
                                            id="address"
                                            type="text" 
                                            placeholder="Enter Address"
                                            name="address" 
                                            className="form-control" 
                                            value={formValue.address}
                                            onChange={handleChange}
                                            required
                                    />
                                    
                                    <RECAPTCHA sitekey="6LdjDi4rAAAAAK9W5bKYdmNxvZwzaumvU1ZIZ_Db" ref={recaptcha}
                                    id="recaptcha"
                                    type="checkbox" 
                                    placeholder="recaptcha"
                                    name="recaptcha" 
                                    className="form-control" 
                                    value={formValue.recaptcha}
                                    onChange={handleChange}
                                    required/>
                                    <Button type="submit" className="btn btn-success" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}}>Donate</Button>
                                    <Button type="reset" className="btn btn-warning" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}} onClick={()=>setformValue({})}>Reset</Button>
                                    <br></br>
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}></Label>
                                    <ul>
                                        <li>
                                            <small>
                                                Register now to receive the latest updates on spiritual discourses, events, and activities directly from Shree Kudli Aarya Akshobhya Teerth Math. 
                                            </small>
                                        </li>
                                        <li>
                                            <small>
                                                Don't miss out on important announcements and opportunities for spiritual growth!
                                            </small>
                                        </li>
                                        
                                    </ul>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default RegisterUsers;