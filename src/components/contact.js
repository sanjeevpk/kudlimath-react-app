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
    CardHeader 
} from 'reactstrap';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PetsIcon from '@mui/icons-material/Pets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import HomeOrigin from '../images/home_origin.png';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PlaceIcon from '@mui/icons-material/Place';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

function Contact(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Contact</h2>          
            <Row>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Kudli</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Near Tunga-Bhadra Sangama,<br/>
                                Kudli, Karanataka - 577 227
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Vadiraj Achar Huilgol<br/>
                                Mobile : +91-9449959350
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Shimoga</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Dodd Brahmin Keri St, Gandhi Bazar,<br/>
                                KR Puram, Shivamogga, Karanataka - 577 202
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Vadiraj Achar Huilgol<br/>
                                Mobile : +91-9449959350
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Bangalore</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Raghavendra Colony, Kammagondanahalli Jalahalli West,
                                Bangalore Karanataka - 560 015
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Bhimasen Achar Hachcholli<br/>
                                Mobile : +91-9886533291
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Dharwad</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Pattabhhirama Devastana, Hanumanth Nagar,<br/>
                                Attikolla, Dharwad, Karanataka - 580 001
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Sameer Aachar Huddar<br/>
                                Mobile : +91-9035942912 / +91-9986415290
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Jhamakhandi</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Ganesh Nagar, Hunnur,<br/>
                                Jhamakhandi, Karanataka - 587 119
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Prashant<br/>
                                Mobile : +91-9481877849 
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Hubli</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Arjun Vihaar, Gokul Road,<br/>
                                Hubli, Karanataka - 580 030
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : B Hanumanth Rao<br/>
                                Mobile : +91-9481876325
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <ContactPhoneIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Haveri</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <CardText style={{paddingTop:5}}>
                                <h5>Shree Kudli Aarya Akshobhya Teerth Math</h5>
                            <p>
                                <PlaceIcon style={{textAlign:'left'}}/>
                                Gudi Oni, Kondawad Galli,<br/>
                                Haveri, Karanataka - 581 110
                            </p>
                            <p>
                                <WifiCalling3Icon style={{textAlign:'left'}} />
                                Contact Person : Vasanth Achar Gudi<br/>
                                Mobile : +91-9448861097
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        <Footer/>
    </div>
    );
}

export default Contact;