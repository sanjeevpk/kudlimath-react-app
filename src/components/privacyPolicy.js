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

function PrivacyPolicy(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Privacy Policy</h2>          
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
                            <span style={{textAlign:'center'}}>Disclaimer</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <p>
                                This website is owned and operated by Shree Kudli Aarya Akshobhya Teerth Math. 
                                In this Privacy Policy, “we”, “us” and “our” refer to Shree Kudli Aarya Akshobhya Teerth Math.
                            </p>
                            <p>
                                We recognize that you may be concerned about the information we collect from you 
                                through our website and how we treat that information. We are committed to ensuring 
                                that your privacy is protected.
                            </p>
                            <p>
                                This Privacy Policy is effective from Nov 14, 2023. This policy describes what 
                                information we collect from you, why we collect it, how it is used, protected and 
                                retained as well as your choices regarding this information.
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
                                <span style={{textAlign:'center'}}>Donor’s Personal Data</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                We retain your personal information that we collect at the time of your online donation, 
                                as long as it is required for statutory or legal purposes.
                            </p>
                            <p>
                                We use your personal information only for the purposes for which it is meant. 
                                However, you can also opt to receive our communications related to our math events, 
                                special offers and various other opportunities for volunteering in our math, 
                                and we use your personal data for these communications.
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
                                <span style={{textAlign:'center'}}>Enquiries (Contact Us)</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                When you send us an enquiry through the ‘Contact Us’ page, we collect your name and 
                                email id along with your enquiry to communicate with you and answer your questions.
                            </p>
                            <p>
                                We use your personal information only for the purposes for which it is meant. 
                                However, you can also opt to receive our communications related to our math events, 
                                special offers and various other opportunities for volunteering in our math, 
                                and we use your personal data for these communications.
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
                                <span style={{textAlign:'center'}}>Payment Gateways</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Payment Gateways allow you to make a payment electronically using your credit card, 
                                debit card, net banking, or other payment methods.
                            </p>
                            <p>
                                The payment gateways collect data that may include your contact details, 
                                your card details, and the transaction details which facilitate your online payment. 
                                We don't collect or store any of these personal details and we don't have any control 
                                over them. This data is completely managed by the Payment Gateway tools according to 
                                their own privacy policies.
                            </p>
                            <p>
                                We use the NTT Data's Atom payment gateway for accepting donations.
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
                                For any donations, transaction fees charged would be borne by cardholder for any payment (if applicable).
                                Once payment made are nonrefundable or noncancellable for any reason. 
                                We take utmost care about processing donations as per the 
                                mandates signed by our donors in the donor forms, both offline and online. 
                                But in case of an unlikely event of an erroneous deduction or if the donor wants 
                                to cancel/deduct the donation, we will respond within 7 working days from the date 
                                of receiving the complaint from donor. The timely refund of the wrongly deduced 
                                amount will depend on type of card used during the transaction. We would require a 
                                proof of deduction of the donation amount and a written communication for refund 
                                from the donor within two days after donation.
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
                                <span style={{textAlign:'center'}}>Cookies</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                The third party tools that we use in our website as mentioned above may use cookies 
                                to automatically collect your non-personal information. Cookies are small text files 
                                a website can use to recognize repeat visitors, facilitate the visitor's ongoing 
                                access to and use of the site, and allow a site to track usage behavior and 
                                compile aggregate data that will allow content improvements. Cookies are not programs 
                                that come onto visitor's system and damage files. Generally, cookies work by assigning 
                                a unique number to the visitor that has no meaning outside the assigning site. 
                                If you don't want information to be collected through the use of cookies, 
                                there is a simple procedure in most browsers that allows you to deny or accept the 
                                cookie feature. Blocking cookies will have a negative impact on the performance of 
                                the third party tools and consequently you may not be able to use some of the features 
                                of our website.
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
                                <span style={{textAlign:'center'}}>External Links</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Our website may contain links to other websites of interest. The fact that we have 
                                provided a link to a site is not a representation, endorsement, authorization, 
                                sponsorship, or affiliation with respect to such site, its contents, its owners, or 
                                its providers unless we expressly state otherwise. There are risks associated with 
                                using any information, software, or products found on the internet, and we caution 
                                you to make sure that you understand these risks before retrieving, using, relying 
                                upon, or purchasing anything via the internet. These other sites may collect or 
                                solicit personal data or send their own cookies to your computer. Please be aware 
                                that we are not responsible for the privacy practices of those sites regarding the 
                                collection and use of your personal information.
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
                                <span style={{textAlign:'center'}}>Amendments to this Policy</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                If we decide to change our privacy policy, we will post those changes to this 
                                privacy statement so you are always aware of what information we collect, 
                                how we use it, and under what circumstances, if any, we disclose it. 
                                We will use information in accordance with the privacy policy under which the 
                                information was collected. We encourage you to periodically review this policy 
                                for the latest information on our privacy practices.
                            </p>
                            <p>
                                If we decide to use your personally identifiable information in a manner significantly 
                                different from that stated at the time of collection, we will notify you through 
                                e-mail and will not use your information in the new manner unless your express 
                                permission is granted. However, if you have opted out of all communication with the site, 
                                or deleted/deactivated your account, then you will not be contacted, nor will your 
                                personal information be used in this new manner.
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
                                <span style={{textAlign:'center'}}>Data Retention</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                We seek to retain your personal information only as long as necessary to fulfil 
                                the purposes described in this policy unless a longer retention period is required 
                                by law or regulations. For example, tax laws in India may require us to keep 
                                contact information and contribution level of donors on a file.
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
                                <span style={{textAlign:'center'}}>Sharing</span>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Though we make a good faith effort to preserve your privacy, we may need to disclose 
                                your personal information when required by law wherein we have a good faith belief 
                                that such action is necessary to comply with a current judicial proceeding, 
                                a court order or legal process served on our website or when needed to protect our 
                                rights, privacy, safety, property, donors, or users and when necessary to enforce 
                                our terms of service. 
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

export default PrivacyPolicy;