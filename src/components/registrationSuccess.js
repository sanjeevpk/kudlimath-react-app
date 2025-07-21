import React from 'react';
import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import { 
    CardGroup, 
    Row, 
    Card, 
    CardBody, 
    CardText, 
    CardTitle, 
    Button, 
    Col, 
    CardHeader,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

function RegistrationSuccess(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Registration Result</h2>

            <Row>
                <Col sm="1"></Col>
                <Col sm="10">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <p>
                                Thank you. Your regisration was successful!. We will send future communications related to Shree Kudli Aarya Akshobhya Teerth Math's activities. 
                            </p>
                           </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="2"></Col>
            </Row>

            <Footer/>
        </div>
    );
}

export default RegistrationSuccess;