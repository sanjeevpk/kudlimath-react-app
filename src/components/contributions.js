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

function Contributions(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Contributions</h2>          
            <Row>
                <Col sm="3">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <PeopleIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Community</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">                  
                            <CardText style={{paddingTop:5}}>
                            <p>
                                Community health ranks high in the list of priorities of the Swamiji, 
                            he having organised health camps, eye camps, medical aid for the poor and 
                            needy, donated funds for poor. 
                            </p>
                            <p>
                            He also helping the young talents in getting the right jobs. 
                            Swamiji says, "The role of the Pontiff's has always remained 
                            the same - to spread dharma and eliminating adharma. Perhaps the methodology 
                            keeps changing with the times. Well-being of the society is essential so that 
                            energies can then be properly channelized."
                            </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <AutoStoriesIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Gurukulas</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">
                            <CardText style={{paddingTop:5}}>
                                <p>
                                Recently Swamiji has started gurukula for ensuring and preaching young generation 
                                towards spiritual path.
                                </p>
                                <p>
                                The Swamiji, through his innovative methods has been the guiding spirit at 
                                various conventions, conferences, seminars, debates, lectures, Gnana Satras, 
                                workshops and classes in Indian Philosophical Schools in different cities. 
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <PetsIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Goushala</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">
                            <CardText style={{paddingTop:5}}>
                                <p>
                                    Goushala is being created to take care of Goumathas. 
                                    Many homeless Goumathas were provided shelter and food. We are trying our best to 
                                    maintain more number of cows and planning for further expansions.
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <RecordVoiceOverIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Guruvaani</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">
                            <CardText style={{paddingTop:5}}>
                                <p>
                                    Regular pravachanas are being conducted in which Swamiji try to inspire people to 
                                    choose the dharma maarga and while blessing the devotes with his amrutha hasta 
                                    and phala mantrakshate. Please tune in and subscribe to 
                                    <a href='https://www.youtube.com/channel/UCt-EN0jUV5Z65aUdIl-AUcA' target='_blank' rel='noopener noreferrer'> Sri Kudli Arya Akshobhyateerth Math youtube channel.</a>
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

export default Contributions;