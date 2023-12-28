import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import {useLocation} from 'react-router-dom';

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { CardGroup, CardHeader, Row, Card, CardBody, CardText, CardTitle, Button, Col, FormGroup, Form, Label, Input } from 'reactstrap';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import axios from 'axios';
import { SERVER_DOMAIN } from "../scripts/constants";
import { DonatePageContext } from "../context/donatePageContext";
import {useNavigate} from 'react-router-dom';
import {Helmet} from "react-helmet";
import External from './externalScriptLoad';


function CheckoutDonation(){

    // useEffect(() => {
    //     const script = document.createElement('script');
    
    //     script.src = "https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []); 
    

    const location = useLocation();
    // console.log(location.state);
    // console.log(location.state.name);

    function handleChange(){

    }

    function openPay(){
        console.log("clicked on pay! atomTokenId = "+location.state.atomTokenId);
        console.log("clicked on pay! returnUrl = "+location.state.returnUrl);
        const options = {
            "atomTokenId": location.state.atomTokenId,
            "merchId": location.state.merchantId,
            "custEmail": location.state.email,
            "custMobile": location.state.mobile,
            // "returnUrl":"https://testing-atom.000webhostapp.com/uat/response.php"
            // "returnUrl":location.state.returnUrl
            "returnUrl":"https://www.kudlimath.in/api/v1/donation/response"
            // "returnUrl":"http://localhost:8080/api/v1/donation/response"
          } 
        
        // let atom = window.AtomPaynetz(options);
        let atom = new window.AtomPaynetz(options);
       
    } 

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title using Helmet</title>
                {/*<script type="text/javascript" src="https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js" />*/}
                <script type="text/javascript" src="https://psa.atomtech.in/staticdata/ots/js/atomcheckout.js"/> 
            </Helmet>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Checkout Donations </h2>
            <Row>
                <Col sm="4"></Col>
                <Col sm="4">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <CardGiftcardIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Shree Aarya Akshobhya Trust</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">                  
                            <Form>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input 
                                        id="name"
                                        type="text" 
                                        readOnly
                                        placeholder="Enter Name"
                                        disabled
                                        name="name" 
                                        className="form-control" 
                                        value={location.state.name}
                                        onChange={handleChange}
                                        
                                        // onChange={(e) => {
                                        //     setDonation({...donation, name: e.target.value})
                                        // }}
                                    />
                                    <Label>Mobile</Label>
                                    <Input 
                                        id="mobile"
                                        type="text" 
                                        readOnly
                                        placeholder="Enter Mobile"
                                        disabled
                                        name="mobile" 
                                        className="form-control" 
                                        value={location.state.mobile}
                                        onChange={handleChange}
                                        // onChange={(e) => {
                                        //     setDonation({...donation, mobile: e.target.value})
                                        // }}
                                    />
                                    <Label>Email</Label>
                                    <Input 
                                        id="email"
                                        type="text"
                                        readOnly 
                                        placeholder="Enter Email"
                                        disabled
                                        name="email" 
                                        className="form-control" 
                                        value={location.state.email}
                                        onChange={handleChange}
                                        // onChange={(e) => {
                                        //     setDonation({...donation, email: e.target.value})
                                        // }}
                                    />
                                    <Label>Amount</Label>
                                    <Input 
                                        id="amount"
                                        type="text" 
                                        readOnly
                                        placeholder="Enter Amount"
                                        disabled
                                        name="amount" 
                                        className="form-control" 
                                        value={location.state.amount}
                                        onChange={handleChange}
                                        // onChange={(e) => {
                                        //     setDonation({...donation, amount: e.target.value})
                                        // }}
                                    />
                                    <Label>Atom Token Id</Label>
                                    <Input 
                                        id="atomTokenId"
                                        type="text" 
                                        readOnly
                                        placeholder="Enter atomTokenId"
                                        disabled
                                        name="atomTokenId" 
                                        className="form-control" 
                                        value={location.state.atomTokenId}
                                        onChange={handleChange}
                                        // onChange={(e) => {
                                        //     setDonation({...donation, amount: e.target.value})
                                        // }}
                                    />
                                    <Label>Merchant Id</Label>
                                    <Input 
                                        id="merchantId"
                                        type="text" 
                                        readOnly
                                        placeholder="Enter merchantId"
                                        disabled
                                        name="merchantId" 
                                        className="form-control" 
                                        value={location.state.merchantId}
                                        onChange={handleChange}
                                        // onChange={(e) => {
                                        //     setDonation({...donation, amount: e.target.value})
                                        // }}
                                    />
                                    <Button type="button" onClick={openPay} className="btn btn-success" style={{marginRight:'5px',marginTop:'5px'}}>Donate</Button>
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

export default CheckoutDonation;