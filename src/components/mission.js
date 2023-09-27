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
                                Shree Kudli Aarya Akshobhya Teerth Math is dedicated to preserving and 
                                promoting the ancient Sanatana Vedic Dharma through the lens of 
                                Madhva philosophy. Our chief mission comprises four key aspects: practice, 
                                protect, preach, and propagate this valuable knowledge. 
                            </p>
                            <p>
                                To achieve this, we focus on enriching the understanding and practice of 
                                Madhva Siddanta and Dvaita philosophy. We strive to make these teachings 
                                more accessible to the public while enhancing their practical application 
                                in the daily lives of Madhvas. Our approach includes innovative patha 
                                and pravachanas, sponsoring research initiatives, and creating public 
                                platforms that utilize Vedic Knowledge as a foundation.
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