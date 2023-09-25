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
                                <span style={{textAlign:'center'}}> Arogya Vijaya</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid0wnuqtZiYo6oDVYBmwiHMTPhTwb6J2agwhnQA6U8YgC2x73FhLfMD547LAan5sW51l&show_text=false&width=500" 
                            width="350px" height="200px" style={{border:0,overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
                            
                            <CardText style={{paddingTop:5}}>
                            
                                On the occasion of 21st Charturmasa, we are conducting free health checkup camps,
                                we encourage followers to make use of such benefits.
                                
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Sangeet Utsava</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid02o8sZ6uwXV6v8tEcxfjjeZjC6pCieyon86WbSsehD4gtXbTVvPKTb7zJzEQdCVjivl&show_text=false&width=500" 
                            width="350px" height="200px" style={{border:0,overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
                            
                            <CardText style={{paddingTop:5}}>
                                On the occasion of 21st Charturmasa, Sangeeta Utsava is been conducted. 
                                Bhakti pradana songs will be sung by Shiraksha Mundagod 
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Sangeet Utsava</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid0DGBaUuX3i6m2bxJMVMhJGwekozw6Fm9tHZTeVAj9cVpcXPTeooTNxYVJZmTZXUBZl&show_text=false&width=500" 
                            width="350px" height="200px" style={{border:0,overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>        
                            
                            <CardText style={{paddingTop:5}}>
                                On the occasion of 21st Charturmasa, Sangeeta Utsava is been conducted. 
                                Bhakti pradana songs will be sung by Sameer Ghambir
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Anugraha Sandesha</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid0zb67MXVsRW3yy3erTJ2HiM2V4xcomMSBcrSmXkxpvDoZtUzbeDmae16M6YiEmu96l&show_text=false&width=500" 
                            width="350px" height="200px" style={{border:0, overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>         
                            <CardText style={{paddingTop:5}}>
                                On the occasion of 21st Charturmasa, augraha sandesha from 
                                Shree Raghu Vijaya Teerth Swamiji on Shree Maha Bharat Tatparya Nirnaya 
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Chaturmasa Sankalpa</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid0ayp5kUdbXV446aLhuyABqSzSwRCpcP8otPWdmxCmxrwQ2nfnJWVwZ1mFt8tAPEE1l&show_text=false&width=500" 
                            width="350px" height="250px" style={{border:0, overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>       
                        
                            <CardText style={{paddingTop:5}}>
                               21st Chaturmasa Invitation 
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card className="my-2" color="warning" outline> 
                        <CardHeader style={{fontWeight:'bold'}}>
                                <NewspaperIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}> Mahasamaradhane</span>
                            </CardHeader> 
                        <CardBody className="my-2" color="warning">      
                            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriraghuvijayateertharu%2Fposts%2Fpfbid01QpD7KDYYu6PKYrAx1EztgyC8odUuacBnVrZnTQ3122qjYgRTCHCSen49L52QLxVl&show_text=false&width=500" 
                            width="350px" height="225px" style={{border:0, overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>          
                            
                            <CardText style={{paddingTop:5}}>
                               Shree 1008 Shree Raghupriya Teertha swamiji's 15th Mahasamaradhane invite.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        <Footer/>
    </div>
    );
}

export default News;