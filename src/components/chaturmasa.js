import React from 'react';
import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import Typography from '@mui/material/Typography';
import Chaturmasa12Photo from '../images/chaturmasa/pageImage12.png';
import Chaturmasa1Photo from '../images/chaturmasa/page1.png';
import Chaturmasa2Photo from '../images/chaturmasa/page2.png';
import Chaturmasa3Photo from '../images/chaturmasa/page3.png';
import Chaturmasa4Photo from '../images/chaturmasa/page4.png';
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
            <h2 style={{textAlign:'center'}}>Chaturmasya 2024 @ Ranebennuru</h2>
            <Row>
                <Col sm="1"></Col>
                <Col sm="6">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
                              ||Shree Vaikunta Seeta Raamchandro Vijayate||
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              The 22nd Chaturmasya of Shree Shree 1008 Shree RaghuVijaya Teertha Swamiji 
                              will be held at Ranebennuru from 30th July to 18th Sep 2024
                              <br/><br/>
                              <b>Venue:</b><br/>
                              Shree Vidyadhishateertha Matha<br/>
                              Shree Satyabhijyateertha Sannidhana<br/>
                              Uttaradhi Math, Kote Ranebennuru<br/>
                              <br/>

                              <b>Key Dates:</b><br/>
                              <p>Pura pravesha (welcome procession): 29 July (evening)</p>
                              <p>Chaturmasya Sankalpa: 30 July</p>
                              <p>Samaropa samarambha : 17 September</p>
                              <p>Seemollanghana : 18 September </p>
                            </Typography>
                            <p>
                              Every day there will be Parayana, Patha, Pravachana, Bhajane, Pada puja, Samsthana Pooja, Teertha Prasada, Sangeeta Seva and Amrutopadesha from Sripadangalavaru.
                              On weekends and special days, there will be Jnana satra, Workshops, Dasa vani and such.
                            </p>
                            <p>
                              Please visit, <a href="https://www.kudlimath.in">https://www.kudlimath.in</a> for the more information, invitation, location and to offer online seva.
                            </p>
                            <p>
                              We welcome all devotees to participate in the programmes and gain Jnana, Bhakti and Vairagya.
                            </p>
                            <p>Regards,<br/>
                              Divan, <br/>Shree Kudli Arya Akshobhyateerth Math.
                            </p>
                          </CardText>
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="5">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning" style={{textAlign:'center'}}>           
                            <CardText style={{paddingTop:5}}>
                            </CardText>
                            <img className='rounded'
                              alt="Chaturmasya 2024 Page Main Page"
                              src={Chaturmasa12Photo}
                              style={{height:'auto', width:'350px'}}
                            />
                            <img className='rounded'
                                alt="Chaturmasya 2024 Page 1"
                                src={Chaturmasa1Photo}
                                style={{height:'400px', width:'350px'}}
                            /> 
                            <img className='rounded'
                                alt="Chaturmasya 2024 Page 2"
                                src={Chaturmasa2Photo}
                                style={{height:'400px', width:'350px'}}
                            />
                            <img className='rounded'
                              alt="Chaturmasya 2024 Page 3"
                              src={Chaturmasa3Photo}
                              style={{height:'auto', width:'350px'}}
                            /> 
                            <img className='rounded'
                              alt="Chaturmasya 2024 Page 4"
                              src={Chaturmasa4Photo}
                              style={{height:'auto', width:'350px'}}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Footer/>
        </div>
    );
}

export default Mission;