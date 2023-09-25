import React, { useContext } from "react";
import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import { useState, useEffect } from "react";
import { CardGroup, CardHeader, Row, Card, CardBody, CardText, CardTitle, Button, Col, FormGroup, Form, Label, Input } from 'reactstrap';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import axios from 'axios';
import { SERVER_DOMAIN } from "../scripts/constants";
import { DonatePageContext } from "../context/donatePageContext";
import {useNavigate} from 'react-router-dom';


const CreateDonation = () => {

    // const [donateDetailsPage, setDonateDetailsPage] = useContext(DonatePageContext);

    useEffect(() => {
        document.title = "Donate";
    }, []);
    
    const navigate = useNavigate();
    // const id = 5;
    // const name = 'Sanjeev';
    // const email = 'a@b.com'; 
    // const mobile = '9087654321';
    // const amount = '10' 
    // const atomTokenId = '15000000432303';
    // const merchantId = '317157';  
    // const returnUrl = 'http://localhost:8080/donation-response'

    // function gotToNextPage(){
    //     navigate("/checkout", {state : {
    //         name: name,
    //         email: email, 
    //         mobile: mobile, 
    //         amount: amount,
    //         atomTokenId: atomTokenId,
    //         merchantId: merchantId,
    //         returnUrl: returnUrl
            
    //     }}) 
    // }

    const [donation, setDonation] = useState({}); 
    
    const [formValue, setformValue] = React.useState({
        name: '',
        mobile: '',
        email: '',
        amount: ''
      });

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
          });
    }

    const handleSubmit = async(e) => {
        // store the states in the form data
        // const donationFormData = new FormData();
        // donationFormData.append("name", formValue.name)
        // donationFormData.append("email", formValue.email)
        // donationFormData.append("mobile", formValue.mobile)
        // donationFormData.append("amount", formValue.amount)
        e.preventDefault();
      

        const donation = {
            name: formValue.name,
            email: formValue.email, 
            mobile: formValue.mobile, 
            amount: formValue.amount
        };

        console.log("donation = "+donation);
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "/api/v1/donation",
            data: donation
            // headers: { "Content-Type": "multipart/form-data" },
          }).then(res=>{
                console.log(res);
                console.log(res.data);
                navigate("/checkout", {state : {
                    name: res.data.name,
                    email: res.data.email, 
                    mobile: res.data.mobile, 
                    amount: res.data.amount,
                    atomTokenId: res.data.atomTokenId,
                    merchantId: res.data.merchantId,
                    returnUrl: res.data.returnUrl
                    
                }}) 
            })
        } catch(error) {
          console.log(error);
        
        }
      }


    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Donations </h2>
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
                            <span style={{textAlign:'center'}}> Shree Aarya Akshobhya Trust</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">                  
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Name *</Label>
                                    <Input 
                                        id="name"
                                        type="text" 
                                        placeholder="Enter Name"
                                        name="name" 
                                        className="form-control" 
                                        value={formValue.name}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, name: e.target.value})
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
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Amount *</Label>
                                    <Input 
                                        id="amount"
                                        type="text" 
                                        placeholder="Enter Amount"
                                        name="amount" 
                                        className="form-control" 
                                        value={formValue.amount}
                                        onChange={handleChange}
                                        required
                                        // onChange={(e) => {
                                        //     setDonation({...donation, amount: e.target.value})
                                        // }}
                                    />
                                    <Button type="submit" className="btn btn-success" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}}>Donate</Button>
                                    <Button type="reset" className="btn btn-warning" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}} onClick={()=>setformValue({})}>Reset</Button>
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

export default CreateDonation;