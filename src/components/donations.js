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
    ListGroupItem,
    List
} from 'reactstrap';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PetsIcon from '@mui/icons-material/Pets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {useNavigate} from 'react-router-dom';

function Donations(){
    const navigate = useNavigate();

    const navigateToDonationsPage = () => {
        navigate('/create-donation');
    }

    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Donations</h2>          
            <Row>
                <Col sm="2">
                    
                </Col>
                <Col sm="8">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <MenuBookIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Seva Towards Society</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <h4>Shree Aarya Akshobhya Teertha Trust</h4>
                            <p>
                                This is the donation page of Shree Aarya Akshobhya Teertha Trust. Donations made through 
                                this page are utilized purely towards various activities of trust as mentioned below.
                                Shree Aarya Akshobhya Teerth Trust is headed by Shree Raghu Vijaya Teerth swamiji with the 
                                below objectives
                            </p>
                            <p>
                                <List>
                                    <li>
                                        Supporting underprivileged students by offering financial aid for tuition fees, textbooks, and other educational resources
                                    </li>
                                    <li>
                                        Empower underprivileged girls with the gift of love and stability through supporting their marriages
                                    </li>
                                    <li>
                                        Lending a helping hand to the less fortunate by providing essential resources for their basic needs.
                                    </li>
                                </List>
                                 
                            </p>
                            <p>
                                We invite you to be a part of this devine cause by contributing generously, 
                                your wholehearted support will help us scale this to greater heights and make it a huge success. 
                                To support for the above noble causes, please donate to Shree Aarya Akshobhya Teerth Trust 
                                by clicking the Donate button!
                            </p>
                            </CardText>
                            <Button onClick={navigateToDonationsPage}>
                                Donate Now
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="2">
                </Col>
            </Row>
        <Footer/>
    </div>
    );
}

export default Donations;