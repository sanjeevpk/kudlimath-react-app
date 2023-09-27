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
                                Over the years, numerous books and articles have been authored 
                                by the esteemed Peethadhipatis and pandits of Shree Kudli Aarya 
                                Akshobhya Teerth Math. These scholarly works primarily focus on 
                                the core teachings of Madhva Siddhanta, Tatva Vaada, and Yati 
                                Parampare. The primary aim behind these writings is to simplify 
                                complex philosophical concepts and make them accessible to the 
                                common masses.
                            </p>
                            <p>
                                These scholars have exhibited great dedication in examining intricate 
                                aspects of Madhva Siddhanta, a Dvaita (dualist) Vedanta school founded 
                                by the philosopher Madhvacharya. In addition, they have shed light on 
                                Tatva Vaada, a significant discourse in Indian philosophy that addresses 
                                fundamental principles and theories governing reality. Furthermore, their 
                                works have delved into the historical tradition of Yati Parampare, 
                                which traces the lineage of revered ascetics in Hindu monastic orders.
                            </p>
                            <p>
                                By providing accessible explanations to these ancient doctrines and 
                                practices, the Peethadhipatis and pandits have made it possible for 
                                individuals from various backgrounds to grasp these profound concepts. 
                                Undoubtedly, their literary contributions have played an instrumental 
                                role in promoting a deeper understanding of Indian philosophy among laypeople.
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