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
import PratimaMoolaVaikuntaRamadevaru from '../images/pratimas/pratima-moola-vaikunta-ramadevaru.jpg';
import PratimaMoolaSeetaDevi from '../images/pratimas/pratima-moola-seeta-devi.jpg';
import PratimaMoolaDattaLakshmanadevaru from '../images/pratimas/pratima-moola-datta-lakshmanadevaru.jpg';
import PratimaVijayaVittaladevaru from '../images/pratimas/pratima-vijaya-vittaladevaru.jpg';
import PratimaJayaramdevaru from '../images/pratimas/pratima-jayaramdevaru.jpg';
import PratimaVenugopaldevaru from '../images/pratimas/pratima-venugopaldevaru.jpg';
import PratimaBhoovarahadevaru from '../images/pratimas/pratima-bhoovarahadevaru.jpg';
import PratimaVedavyasadevaru from '../images/pratimas/pratima-vedavyasadevaru.jpg';
import PratimaLakshiNarasimhadevaru from '../images/pratimas/pratima-lakshi-narasimhadevaru.jpg';

function Pratimas(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Pratimas</h2>          
            <Row>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Moola Vaikunth Raamchandra Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Moola Vaikunth Raamchandra Devaru"
                                src={PratimaMoolaVaikuntaRamadevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                            
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Vaikunta Seeta Devi</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Vaikunta Seeta Devi"
                                src={PratimaMoolaSeetaDevi}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                               
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Datta Laxmana Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Datta Laxmana Devaru"
                                src={PratimaMoolaDattaLakshmanadevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Vijaya Vitthala Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Vijaya Vitthala Devaru"
                                src={PratimaVijayaVittaladevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Jayaram Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Jayaram Devaru"
                                src={PratimaJayaramdevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Venugopal Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Venugopal Devaru"
                                src={PratimaVenugopaldevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Bhoovarah Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Bhoovarah Devaru"
                                src={PratimaBhoovarahadevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Vedavyasa Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Vedavyasa Devaru"
                                src={PratimaVedavyasadevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <span style={{textAlign:'center'}}> Shree Lakshmi Narasimha Devaru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Shree Lakshmi Narasimha Devaru"
                                src={PratimaLakshiNarasimhadevaru}
                                style={{height:'auto', width:'350px'}}
                            />          
                            <CardText style={{paddingTop:5}}>
                            <p>
                                
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

export default Pratimas;