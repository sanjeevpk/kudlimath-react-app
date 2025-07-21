import React from 'react';
import Navigation from './navigation';
import Heading from './heading';
import Footer from './footer';
import Typography from '@mui/material/Typography';
import Chaturmasa202501 from '../images/chaturmasa/2025/Chaturmasa2025.jpg';
import Chaturmasa20251 from '../images/chaturmasa/2025/Chaturmasa-2025-1.PNG';
import Chaturmasa20252 from '../images/chaturmasa/2025/Chaturmasa-2025-2.PNG';
import Chaturmasa20253 from '../images/chaturmasa/2025/Chaturmasa-2025-3.PNG';
import Chaturmasa20254 from '../images/chaturmasa/2025/Chaturmasa-2025-4.PNG';
import Chaturmasa20255 from '../images/chaturmasa/2025/Chaturmasa-2025-5.PNG';

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
            <h2 style={{textAlign:'center'}}>Chaturmasya 2025 @ Belgaum</h2>
            <Row>
                <Col sm="1"></Col>
                <Col sm="6">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning" style={{textAlign:'center'}}>           
                            <CardText style={{paddingTop:5}}>
                            </CardText>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa202501}
                              style={{height:'auto', width:'450px'}}
                            />
                            <br/>
                            <br/>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa20251}
                              style={{height:'auto', width:'450px'}}
                            />
                            <br/>
                            <br/>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa20252}
                              style={{height:'auto', width:'450px'}}
                            />
                            <br/>
                            <br/>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa20253}
                              style={{height:'auto', width:'450px'}}
                            />
                            <br/>
                            <br/>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa20254}
                              style={{height:'auto', width:'450px'}}
                            />
                            <br/>
                            <br/>
                            <img className='rounded'
                              alt="Chaturmasya 2025 Page Main Page"
                              src={Chaturmasa20255}
                              style={{height:'auto', width:'450px'}}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="5">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
                              || Shree Vaikunta Seeta Raamchandro Vijayate ||
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              The 23rd Chaturmasya of Shree Shree 1008 Shree RaghuVijaya Teertha Swamiji 
                              will be held at Shree Satya Pramod Sabhagraha, Rani Chennamma Nagar, 
                              Belgaum from 20th July to 07th Sep 2025.
                              <br/><br/>
                              <b>Venue:</b><br/>
                              Shree Satya Pramod Sabhagraha<br/>
                              Rani Chennamma Nagar<br/>
                              Belagaum<br/>
                              <br/>

                              <b>Key Dates:</b><br/>
                              <ul>
                                <li><p>Pura pravesha (welcome procession): 19th July (evening)</p></li>
                                <li><p>Chaturmasya Sankalpa: 20 July</p></li>
                                <li><p>Samaropa samarambha : 06 September</p></li>
                                <li><p>Seemollanghana : 07 September </p></li>
                              </ul>
                              
                            </Typography>
                            <p>
                              Each day, the Kudlimath resonates with spiritual activities such as parayana, patha, pravachana, bhajane, 
                              paada puje, samsthana pooje, teertha prasada, and sangeeta seva, culminating in the divine 
                              amrutopadesha from Sripadangalavaru. Weekends and special days are further enriched with 
                              jnana satra, workshops, dasa vaani, and other enriching programs.
                            </p>
                            <p>
                              Please visit, <a href="https://www.kudlimath.in">https://www.kudlimath.in</a> for the more information, invitation, location and to offer online seva.
                            </p>
                            <p>
                              We extend a heartfelt welcome to all devotees, encouraging their participation in our 
                              various programs to cultivate Jnana, Bhakti, and Vairagya.
                            </p>
                            <p>Regards,<br/>
                              Divanaru, <br/>Shree Kudli Arya Akshobhyateerth Math.
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

export default Mission;