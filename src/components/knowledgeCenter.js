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
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PetsIcon from '@mui/icons-material/Pets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function KnowledgeCenter(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Knowledge Center</h2>          
            <Row>
                <Col sm="2">
                    
                </Col>
                <Col sm="8">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <MenuBookIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Publications/Articles</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <p>
                                Various books and articles were written by Peethadhipatis and pandits 
                                of Shree Kudli Aarya Akshobhya Teerth Math related to Madhva Siddhanta, Tatva Vaada, 
                                Yati Parampare etc to make common people understand the things easily. 
                            </p>
                            </CardText>
                            <ListGroup flush>
                                <ListGroupItem>
                                    <strong>Akshobhya Vijaya Vaibhava</strong> by Shree Raghu Vijay Teertharu
                                </ListGroupItem>  
                                <ListGroupItem>
                                    Moksha Maarg Saupana
                                </ListGroupItem>    
                                <ListGroupItem>
                                    Sutra Bhashya
                                </ListGroupItem>    
                                <ListGroupItem>
                                    Madhva Ramayana
                                </ListGroupItem>    
                            </ListGroup>
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

export default KnowledgeCenter;