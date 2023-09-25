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
import ProfilePhoto from '../images/profile.png';
import ProfilePhoto1 from '../images/profile1.jpg';

function RaghuVijayTeerthruProfile(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Shree Raghu Vijay Teerthru - Profile</h2>

            <Row>
                <Col sm="1"></Col>
                <Col sm="7">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                                <p>
                                    Shree Shree 1008 Raghuvijaya Theertharu, in his poorvashrama was known as Shree Ananthaacharya Gudi. 
                                    He was the fifth son of Shree Ramacharya Gudi and Smt. Rangu Bai of Haveri. 
                                    Having completed his B.E.(Specialization in Electrical Branch), further continued his studies and did his M.B.A. 
                                    He worked in various private organizations in the managerial capacity for about 16 years.
                                </p>
                                <p>
                                    Shree Ananthaacharyaru was deeply influenced by Shree Raghupriya Theertharu. 
                                    He resigned from the job on hand and studied tenaciously under him for five years i.e. 
                                    from 1990-1995. Later he even studied LLB for three years and practiced in Law court for 
                                    another five years.
                                </p>
                                <p>
                                    In the year 2003, Shree Ananthaacharya Gudi responded to the summons of his Guru Shree Raghupriya Theertharu 
                                    and was given the sanyaasashrama to become his successor.He was named Shree Raghuvijaya Theertha Swamiji. 
                                    Right from the day of his sanyaashrama till the last day of his gurugalu, 
                                    he never parted the company of Shree Raghupriya Theertha Swamiji and thus followed him 
                                    like a shadow.
                                </p>
                                <p>
                                    Shree Raghu Vijaya Theertha Swamiji is of the firm belief that the grace of his Guruji 
                                    is always behind him. He is of the strong belief that whatever he has accomplished 
                                    till date like the annadaana scheme at Kudli and Shimoga math, or it may be the goshaala, 
                                    his first chaaturmaasya at Kudli, beginning of new math at Hubli and last but not 
                                    the least, the gift of new math at K.G. Halli in Bangalore by his holiness 
                                    Shree Shree 1008 Sathyaathma Theertha Swamiji is all due to the grace of 
                                    Shree Lord Vaikunta Seetha Rama devaru through Shree Raghupriya Theertha.
                                </p>
                                <p>
                                    Shree Shree Raghu Vijaya Theertha Swamiji intends to take up schemes like traditional 
                                    as well as modern education in due course of time. He seeks the backing of all the 
                                    devotees, followers and his disciples. 
                                </p>
                                <p>
                                    Shree Raghu Vijaya Teertha Swamiji has sought to redefine the role and functioning of 
                                    the math's in present day society. Recognizing the role of math's and religious heads 
                                    in society, Swamiji has initiated serious efforts to rid the society of various ills.
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning" style={{textAlign:'center'}}>           
                            <CardText style={{paddingTop:5}}>
                            </CardText>
                            <strong>Shree Raghu Vijaya Teertha Swamiji</strong>
                            <img className='rounded'
                                alt="Card cap"
                                src={ProfilePhoto1}
                                style={{height:'500px', width:'auto'}}
                            /> 
                            <br/><br/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Footer/>
        </div>
    );
}

export default RaghuVijayTeerthruProfile;