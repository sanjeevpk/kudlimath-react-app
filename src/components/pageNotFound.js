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

function PageNotFound(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Page Not Found!</h2>

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
                                    <strong>Oops its 404!!</strong> <br/>
                                    Sorry we couldn't find the page that you were looking for. 
                                    This issue might have been caused by user entering wrong url.<br/> 
                                    Go back to home page.
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

export default PageNotFound;