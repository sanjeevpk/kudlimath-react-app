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

function Mission(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Mission</h2>

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
                                Protect the Dharma, it will protect you. Proclaims our ancient lore. 
                                Shree Kudli Aarya Akshobhya Teerth Math, abides by this dictum in all circumstances. 
                            </p>
                            <p>
                                Our chief mission is to practice, protect, preach and propagate the ancient sanatana 
                                vedic dharma through the lences of Madhva philosophy. Shree Kudli Aarya Akshobhya Teerth Math 
                                enriches the practice and knowledge of Madhva Siddanta and Dvaita philosophy, 
                                widens public access to it, and strengthens it's capacities in the day to day life of Madhvas, 
                                by innovative patha, pravachana's, commissioning research and creating public platforms using 
                                the framework of Vedic Knowledge.
                            </p>
                            <p>
                                Since the time of its origin, till to date, Shree Kudli Aarya Akshobhya Teerth Math, 
                                has been and continuing to be the strong propounder of the true Vedic Dharma.
                            </p>
                            </CardText>
                            <ListGroup flush>
                                <ListGroupItem>
                                    <strong>धर्मो रक्षाति रक्षिताहा - Dharmo Rakshati Rakshitahaa</strong> 
                                </ListGroupItem>  
                                <ListGroupItem>
                                    <strong>नाना जनस्य शूसरुष कार्तव्य करवनमितेः - Nana Janasya Shusrusha Kartavya Karavanmiteh</strong>
                                </ListGroupItem>    
                                <ListGroupItem>
                                    <strong>नहं कर्ता हरि कार्थ - Naham Karta Hari Kartha</strong>
                                </ListGroupItem>    
                                <ListGroupItem>
                                    <strong>प्रचारं कृत्वा माध्वसिद्धान्तं प्रचारयन्तु - Propoate and preach Madhva Siddantha</strong>
                                </ListGroupItem>    
                                <ListGroupItem>
                                    <strong>राम रामेति रामेति रमे रामे मनोरमे । सहस्रनाम तत्तुल्यं रामनाम वरानने</strong> - By meditating on "Raama Raama Raama", 
                                        ones mind gets absorbed in the divine consciousness of Prabhu Shree Raama, 
                                        which is transcendental. The Name of Raama is as great as the thousand names of God (Vishnu Sahasranamas).
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="2"></Col>
            </Row>

            <Footer/>
        </div>
    );
}

export default Mission;