import React from 'react';
import Navigation from './navigation';
import Heading from './heading';
import { CardGroup, Row, Card, CardBody, CardText, CardTitle, Button, Col } from 'reactstrap';
import Footer from './footer';
import ProfilePhoto from '../images/profile.png';
import HomeOrigin from '../images/home_origin.png';
import {useNavigate} from 'react-router-dom';

function Home(){

    const navigate = useNavigate();

    const navigateToOrigin = () => {
        navigate('/origin');
    }

    const navigateToProfile = () => {
        navigate('/raghu-vijay-teertharu');
    }



    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr></hr>
            <Row>
                <Col sm="1"></Col>
                <Col sm="5">
                    
                    <Card body className="my-2" style={{background:'linear-gradient(0deg, rgb(244, 196, 48) 0%, rgb(255, 87, 51) 100%)'}}>
                        <CardTitle tag="h5" style={{textAlign:'center'}}>
                            WELCOME TO SHREE KUDLI AARYA AKSHOBHYA TEERTH MATH
                        </CardTitle>
                        <img className='rounded'
                            alt="Card cap"
                            src={HomeOrigin}
                            style={{height:'400px', width:'auto'}}
                        />
                        <CardText style={{paddingTop:5}}>
                            Shree Kudali Aarya Akshobhya Teerth Math was established by His Holiness Shree Akshobhya Thirtha Swamiji around the 13th or 14th Century. 
                            Shree Akshobhya Teertha Swamiji is one of the famous saints who took sanyasa directly from Shree Madhvacharyaru. 
                            And also he was the last of Madhvacharya's direct disciples to sit on the Vedanta Pitha. 
                            The Math has a rich tradition and is famed for its knowledge of Sanskrit and Madhvacharya's philosophy. 
                        <br/><br/>
                        </CardText>
                        <Button onClick={navigateToOrigin}>
                            Read more..
                        </Button>
                    </Card>
                </Col>
                <Col sm="5">
                    <Card body className="my-2" style={{background:'linear-gradient(0deg, rgb(244, 196, 48) 0%, rgb(255, 87, 51) 100%)'}}>
                        <CardTitle tag="h5" style={{textAlign:'center'}}>
                            SHREE 1008 SHREE RAGHUVIJAYA TIRTHA SWAMIJI - A PROFILE
                        </CardTitle>
                        <img className='rounded'
                            alt="Card cap"
                            src={ProfilePhoto}
                            style={{height:'400px', width:'auto', paddingTop:5}}
                        />
                        <CardText style={{paddingTop:5}}>
                            Shree 1008 Raghuvijaya Theertharu, in his poorvashrama was known as Shree Ananthaacharya Gudi. 
                            He was the fifth son of Shree Ramacharya Gudi and Smt. Rangu Bai of Haveri. 
                            Having completed his B.E.(Specialization in Electrical Branch), further continued his studies and did his M.B.A. 
                            He worked in various private organizations in the managerial capacity for about 16 years.
                            In the year 2003, Shree Ananthaacharya Gudi responded to the summons of his Guru Shree Raghupriya Theertharu and was given the sanyaasashrama to become his successor.
                        </CardText>
                        <Button onClick={navigateToProfile}>
                            Read more..
                        </Button>
                    </Card>
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Footer/>
        </div>
    );
}

export default Home;