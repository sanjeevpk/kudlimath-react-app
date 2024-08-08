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
import ChaturmasyaEvent1 from '../images/chaturmasa/page1.png';
import ChaturmasyaEvent2 from '../images/chaturmasa/page2.png';
import ChaturmasyaEvent3 from '../images/chaturmasa/page3.png';
import ChaturmasyaEvent4 from '../images/chaturmasa/page4.png';
import ChaturmasyaEvent5 from '../images/chaturmasa/chaturmasa-2024-event-spritual-discussion.jpg';
import ChaturmasyaEvent6 from '../images/chaturmasa/chaturmasa-2024-event-sandyavandana.jpg';

function News(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>News</h2>          
            <Row>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Chaturmasya @ Ranebennuru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">
                            <img className='rounded'
                                alt="Origin"
                                src={ChaturmasyaEvent1}
                                style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                            />    
                           
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Chaturmasya @ Ranebennuru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Origin"
                                src={ChaturmasyaEvent2}
                                style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                            /> 
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Chaturmasya @ Ranebennuru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                    alt="Origin"
                                    src={ChaturmasyaEvent3}
                                    style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                                /> 
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Chaturmasya @ Ranebennuru</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Origin"
                                src={ChaturmasyaEvent4}
                                style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                            />    
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Spritual Journey</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Origin"
                                src={ChaturmasyaEvent5}
                                style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                            />    
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Worskshop on Sandyavandana</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <img className='rounded'
                                alt="Origin"
                                src={ChaturmasyaEvent6}
                                style={{height:'auto', width:'350px', border:0,overflow:"hidden"}}
                            /> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        <Footer/>
    </div>
    );
}

export default News;