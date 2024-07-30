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

function TermsAndConditions(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Terms And Conditions</h2>          
            <Row>
                <Col sm="2">
                    
                </Col>
                <Col sm="8">
                <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Disclaimer</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Thank you for visiting www.kudlimath.in, a website of Shree Kudli Aarya Akshobhya Teerth Math. 
                                By viewing this website (the “Site”), you are agreeing to the terms and conditions 
                                specified in this disclaimer and the copyright notice and privacy policy, which are set 
                                out below (the “Terms and Conditions”). The Shree Kudli Aarya Akshobhya Teerth Math, 
                                may update the Terms and Conditions at any time without notice to you. 
                                Please review the Terms and Conditions from time to time, as your continued use of the 
                                Site means you accept any changes. Upon acceptance of the Terms and Conditions, permission 
                                is granted for you to view, copy, print or download material on this site. You may not modify, 
                                license, transfer or sell any information obtained from this website. Any use of information 
                                from this website must credit Shree Kudli Aarya Akshobhya Teerth Math.
                            </p>
                            <p>
                                www.kudlimath.in website is for informational purposes only and its content is subject to 
                                change without notice. The inclusion of information regarding a product or service on 
                                this website does not imply endorsement of it by Shree Kudli Aarya Akshobhya Teerth Math. 
                                Links to websites are provided solely for the convenience of users. The Linked Sites are 
                                not under the control of Shree Kudli Aarya Akshobhya Teerth Math and the 
                                Shree Kudli Aarya Akshobhya Teerth Math is not responsible for the contents of any 
                                Linked Site including, without limitation, any link contained in a Linked Site or any 
                                changes or updates to a Linked Site. The Shree Kudli Aarya Akshobhya Teerth Math does not 
                                offer any guarantee in that regard and is not responsible for the information found 
                                through these links, nor does it endorse the sites and their contents. In no event shall 
                                Shree Kudli Aarya Akshobhya Teerth Math, its members and suppliers be liable for any 
                                direct, indirect, punitive, incidental, special, consequential damages or any damages 
                                whatsoever including, without limitation, damages for loss of use, data or profits, 
                                arising out of or in any way connected with the use or delay or inability to use its web 
                                site or Linked Sites, the provision of or failure to provide services, or for any 
                                information, products or services obtained through the site or Linked Sites or otherwise 
                                arising out of the use of the site or Linked Sites whether based on contract, tort, 
                                negligence, strict liability or otherwise, even if the Shree Kudli Aarya Akshobhya Teerth Math, 
                                its members and suppliers have been advised of the possibility of damages.
                            </p>
                            <p>
                                If you are dissatisfied with any portion of the site or with any of these terms and 
                                conditions, your sole and exclusive remedy is to discontinue using the site. 
                                While Shree Kudli Aarya Akshobhya Teerth Math follows specific procedures to ensure 
                                the accuracy and reliability of its website content, your use of it is at your sole risk. 
                                Shree Kudli Aarya Akshobhya Teerth Math does not assume any liability deemed to have 
                                been caused directly or indirectly by any content or use of a tool on its website. 
                                You agree to abide by these Terms and Conditions, and also to comply with all local rules, 
                                regulations and laws regarding online conduct and acceptable content.
                            </p>
                        </CardBody>
                    </Card> 
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <MenuBookIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}>Copyright</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <p>
                                This website is owned and operated by Shree Kudli Aarya Akshobhya Teerth Math. 
                                In this Privacy Policy, “we”, “us” and “our” refer to Shree Kudli Aarya Akshobhya Teerth Math.
                                This website is Copyright by Shree Kudli Aarya Akshobhya Teerth Math. All Rights Reserved. 
                                The Shree Kudli Aarya Akshobhya Teerth Math appreciates your feedback. Any information 
                                including suggestions, questions, comments, creative ideas, graphics or other materials 
                                submitted to the Shree Kudli Aarya Akshobhya Teerth Math shall be treated as non-confidential 
                                unless otherwise stated. You agree that you will not send any copyrighted information 
                                to us. Physical reprints of material from the site are permitted if you reference the URL 
                                for each original web page and the page title.
                                
                            </p>
                            <p>
                                Website content is subject to change without notice and at the sole editorial 
                                discretion of Shree Kudli Aarya Akshobhya Teerth Math. Other websites may not copy pages or articles. 
                                Instead, please use a hyperlink to the original article on www.kudlimath.in. 
                                No artwork or images may be copied to another website without prior written permission. 
                                Websites wishing to link to this site may do so. However, we reserve the right to have 
                                any website remove a link to our site for any reason whatsoever.
                            </p>
                            <p>
                                If you have any questions, comments and concerns about this Privacy Policy, 
                                or any requests concerning your personal data, you may contact us at:
                            </p>

                            </CardText>
                            <ListGroup flush>
                                <ListGroupItem>
                                    <strong>Shree Kudli Aarya Akshobhya Teerth Math</strong> 
                                </ListGroupItem>  
                                <ListGroupItem>
                                    Near Tunga-Bhadra Sangama,
                                </ListGroupItem>    
                                <ListGroupItem>
                                    Kudli, Karanataka - 577 227
                                </ListGroupItem>    
                                <ListGroupItem>
                                    Contact Person : Vadiraj Achar Huilgol
                                </ListGroupItem>    
                                <ListGroupItem>
                                    Mobile : +91-9449959350
                                </ListGroupItem>
                                <ListGroupItem>
                                    Website : https://www.kudlimath.in/#/contact
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Personal Information</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                We respect your privacy when you visit our website. 
                                At our site, we do not collect personally identifiable information unless you 
                                provide it to us voluntarily. To access the content of the website you need not 
                                register or provide your personal information.
                            </p>
                            <p>
                                However, we gather certain personally identifiable data under specific circumstances. 
                                We do not sell or trade such information collected to third parties. Also we do not 
                                share such information with third parties unless authorized by the person submitting 
                                the information or when required by law.
                            </p>
                        </CardBody>
                    </Card>
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Donations</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                When you make a donation through our online donation page, we collect your name, 
                                mobile number, e-mail address, postal address and zip/postal code. 
                                We use this information to acknowledge the receipt of your donation and / or to send prasadam.
                            </p>
                            <p>
                                However, we gather certain personally identifiable data under specific circumstances. 
                                We do not sell or trade such information collected to third parties. Also we do not 
                                share such information with third parties unless authorized by the person submitting 
                                the information or when required by law.
                            </p>
                        </CardBody>
                    </Card>     
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Donation Refund Policy</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Transactions successfully debited by the payment gateway but not confirmed back to 
                                Shree Aarya Akshobhya Trust, System will be deemed failed transactions. 
                                All such transactions are eligible for refund post reconciliation. 
                                Such transactions will be refunded in 10-15 working days.
                            </p>
                            <p>
                                All donations are FINAL. Cancellation is not allowed. 
                                Transaction fee charges would never be refunded/reversed under any circumstances for 
                                any refund/reversal/chargeback and any other reasons (if applicable).
                            </p>
                            
                        </CardBody>
                    </Card>        
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Security</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                We are committed to ensure that the information you share with us is secure. 
                                In order to protect your data from unauthorized access or disclosure, or unlawful 
                                processing and against accidental loss, destruction or damage we have put in place 
                                suitable physical, electronic and managerial procedures.
                            </p>
                            <p>
                                Transaction fee charges would not be refunded/reversed under any circumstances for 
                                any refund/reversal/chargeback and any other reasons (if applicable).
                            </p>
                            
                        </CardBody>
                    </Card> 
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Rights</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                You have certain rights with respect to the personal information we collect about you. 
                                Upon your request, we tell you what information we hold about you, we rectify any 
                                incomplete or inaccurate information and also restrict the use of your information. 
                                We will make reasonable efforts to delete your information if you ask us to do so, 
                                unless we are otherwise required to keep it.
                            </p>
                        </CardBody>
                    </Card>
                    <Card 
                        className="my-2"
                        color="warning"
                        outline
                        style={{
                        
                        }}>
                        <CardHeader style={{fontWeight:'bold'}}>
                                <MenuBookIcon style={{textAlign:'left'}}/>
                                <span style={{textAlign:'center'}}>Personal Data</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                We retain the personal information that we collect at the time of your online donation, 
                                as long as it is required for statutory or legal purposes.
                            </p>
                            <p>
                                We use your personal information only for the purposes for which it is meant. 
                                However, you can also opt to receive our communications related to our math festivals, 
                                events, special offers and various other opportunities for volunteering in our math, 
                                and we use your personal data for these communications.
                            </p>
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

export default TermsAndConditions;