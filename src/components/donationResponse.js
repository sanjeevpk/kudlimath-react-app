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
import {useSearchParams} from 'react-router-dom';

function DonationResponse(){

    const [searchParams, setSearchParams] = useSearchParams();
    console.warn("searchParams = "+searchParams);
    const merchantId = searchParams.get('merchantId');
    const atomTokenId = searchParams.get('atomTokenId');
    const merchantTnxId = searchParams.get('merchantTnxId');
    const merchantTnxDate = searchParams.get('merchantTnxDate');
    const bankTnxId = searchParams.get('bankTnxId');
    const responseStatusCode = searchParams.get('responseStatusCode');
    const responseStatusMessage = searchParams.get('responseStatusMessage');
    const responseStatusDescription = searchParams.get('responseStatusDescription');

    // useEffect(() => {
    //     try {
            
    //         // make axios post request
    //         const response = axios({
    //           method: "get",
    //           url: "/api/v1/donation-data",
    //           data : formData,
    //         //   headers: { "Content-Type": "application/x-www-form-urlencoded" },

    //         }).then(res=>{
    //                 console.log(res);
    //                 console.log(res.data);
                    
    //           })
    //       } catch(error) {
    //         console.log(error)
    //       }
    // }, []);
    
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Donation Status </h2>
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
                                    <Label>Merchant Id</Label>
                                    <Input 
                                        id="merchantId"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="merchantId" 
                                        className="form-control" 
                                        value={merchantId}
                                        
                                    />
                                    <Label>AtomTokenId</Label>
                                    <Input 
                                        id="atomTnxId"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="atomTnxId" 
                                        className="form-control" 
                                        value={atomTokenId}
                                        
                                    />
                                    <Label>MerchantTnxId</Label>
                                    <Input 
                                        id="merchantTnxId"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="merchantTnxId" 
                                        className="form-control" 
                                        value={merchantTnxId}
                                        
                                    />
                                    <Label>merchantTnxDate</Label>
                                    <Input 
                                        id="merchantTnxDate"
                                        type="text"
                                        readOnly 
                                        disabled
                                        name="merchantTnxDate" 
                                        className="form-control" 
                                        value={merchantTnxDate}
                                        
                                    />
                                    <Label>BankTnxId</Label>
                                    <Input 
                                        id="bankTnxId"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="bankTnxId" 
                                        className="form-control" 
                                        value={bankTnxId}
                                        
                                    />
                                    <Label>Response Status Code</Label>
                                    <Input 
                                        id="responseStatusCode"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="responseStatusCode" 
                                        className="form-control" 
                                        value={responseStatusCode}
                                        
                                    />
                                    <Label>Response Status Message</Label>
                                    <Input 
                                        id="responseStatusMessage"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="responseStatusMessage" 
                                        className="form-control" 
                                        value={responseStatusMessage}
                                        
                                        
                                    />
                                    <Label>Response Status Description</Label>
                                    <Input 
                                        id="responseStatusDescription"
                                        type="text" 
                                        readOnly
                                        disabled
                                        name="responseStatusDescription" 
                                        className="form-control" 
                                        value={responseStatusDescription}
                                        
                                    />
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

export default DonationResponse;