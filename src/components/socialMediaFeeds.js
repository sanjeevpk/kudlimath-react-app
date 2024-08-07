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
import HomeOrigin from '../images/home_origin.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function SocialMediaFeeds(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Social Media Feeds</h2>          
            <Row>
                <Col sm="2"></Col>
                <Col sm="4" style={{paddingLeft:10}}>
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <FacebookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Facebook Posts</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="350" height="500" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <YouTubeIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Youtube Videos</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe width="350" height="300" src="https://www.youtube-nocookie.com/embed/videoseries?si=0mgnmvYkNrVmCBQE&amp;list=PLJifZWnEmXt5pRPL4zD4-iJDZ3Cz-YAZr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
        <Footer/>
    </div>
    );
}

export default SocialMediaFeeds;