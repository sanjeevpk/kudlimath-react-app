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
import MadhvacharyaruPhoto from '../images/madhvacharyaru.jpg';
import AkshobhyaTeertharuPhoto from '../images/akshobhyateertharu.jpg';
import VijayastambhaPhoto from '../images/akshobhyateertharu_vijayastambha.jpg';

function Origin(){
    return (
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Origin</h2>

            <Row>
                <Col sm="1"></Col>
                <Col sm="8">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardBody className="my-2" color="warning">           
                            <CardText style={{paddingTop:5}}>
                            <p>
                                Shree Kudli Aarya Akshobhya Teerth Math was established by His Holiness 
                                Shree Akshobhya Thirtha Swamiji (a prominent disciple of Shree Madhvacharyaru) 
                                around the 13th or 14th Century. Shree Akshobhya Teertha Swamiji is one of the 
                                famous saints who took sanyasa directly from Shree Madhvacharyaru. 
                                And also he was the last of Madhvacharya's direct disciples to sit on the 
                                Vedanta Pitha. The Math has a rich tradition and is famed for its knowledge of 
                                Sanskrit & Madhvacharya's philosophy. There have been 32 Peetadhipathis till 
                                date(as per the data available). The current Peetadhipathi of the math is 
                                His.Holiness. Shree Raghu Vijaya Thirta Swamiji.
                            </p>
                            <p>
                                After initiating Shree Akshobhya Teertharu into sanyasa Shree Madhvacharyaru 
                                handed over three idols namely - VAIKUNTA RAMA, VAIKUNTA SEETHA & LAKSHMANA. 
                                The heavenly idols (sculptures) of Vaikunta Rama & Seetha were made by 
                                Vishwakarma and were given to Lava & Kusha, sons of Lord Shree Ramadevaru, 
                                who went to heavenly abode.
                            </p>
                            <p>
                                Shree Akshobhya Teertharu who initiated Shree Jaya Teertharu (author of Shreeman Nyaya Sudha) 
                                was a contemporary of the great "Advaitin" Shree Vidyaranya and also of a celebrated 
                                "Visistha-Advaitin" scholar Shree Vedanta Desika.
                            </p>
                            <p>
                                Shree Akshobhya Teertharu had a scholarly debate with Shree Vidyaranya on the interpretation 
                                of the scriptural passage <strong>"Tatvamasi"</strong>. Extensive and elaborate arguments 
                                were exchanged in the presence of Shree Vedantha Deshika who was chosen by both as an 
                                arbitrator. Another tradition says that all the arguments were literally written down and 
                                then sent to Shree Vedantha Deshika whose verdict was in favour of Shree Akshobhya Teertharu. 
                                The epigraphic evidence of this historic victory is on a commemorative pillar of victory on a 
                                hill near Mulabagilu that can be seen even today.
                            </p> 
                            <p>
                                Shree Kumara Kemparaya, made the shilaashaasana as a monument for the debate held 
                                between Akshobhya Tirtharu and Vidyaranyaru and he got it written the judgement poem 
                                (nirnaayaka poem) from Vedanta Deshikacharya and did the staapane at Mulabagilu.
                            </p> 
                            <p>
                                यो विद्यारण्य विपिनं तत्त्वमस्यसिनाचिनत् । <br/>
                                श्रीमदक्षोभ्यतीर्थार्य हंसेन तं नमाम्यहम् । <br/>
                                ಯೋ ವಿದ್ಯಾರಣ್ಯ ವಿಪಿನಂ ತತ್ತ್ವಮಸ್ಯಸಿನಾಚಿನತ್ | <br/>
                                ಶ್ರೀಮದಕ್ಷೋಭ್ಯತೀರ್ಥಾರ್ಯ ಹಂಸೇನ ತಂ ನಮಾಮ್ಯಹಮ್| <br/>
                                yo vidyaaranya vipinam tattvamasyachinath | <br/>
                                shreemadakshObhyatIrthaarya hamsEna tam namaamyaham | <br/>
                                – charamashloka by Shree Jayatirtharu
                            </p> 
                            <p>
                                असिना तत्त्वमसिना परजीवप्रभेधिना । <br/>
                                विद्यारण्मं महारण्यं अक्षोभ्यमुनिरच्चिनत् । <br/>
                                ಅಸಿನಾ ತತ್ತ್ವಮಸಿನಾ ಪರಜೀವಪ್ರಭೇಧಿನಾ | <br/>
                                ವಿದ್ಯಾರಣ್ಮಂ ಮಹಾರಣ್ಯಂ ಅಕ್ಷೋಭ್ಯಮುನಿರಚ್ಚಿನತ್ | <br/>
                                asinaa tattvamasinaa parajIvaprabhEdhinaa | <br/>
                                vidyaaraNmam mahaaraNyam akShObykamunirachchinat |<br/>                            
                                – by Shree Vedanta Deshikaacharya (of Vishishtadvaitha) <br/><br/>
                                Meaning – Akshobhya Munigalu defeated through Vakyartha named 
                                sword Vidyaranya's jungle forest in the  <strong>"Tatvamasi"("ತತ್ವಮಸಿ") </strong>  
                                vakyartha, wherein Tatvamasi clearly says that there is a broad difference 
                                between Paramathma and Jeeva.
                            </p>
                            <p>
                                Shree Akshobhya Teertharu moved after this a little north to Pandharapur on the banks of 
                                the Bhima-rathi River, which is where he met his future disciple Shree Jaya Teertharu. 
                                In the years to follow, Shree Akshobhya Teertharu dedicated most of his time training 
                                Shree Jaya Teertharu in <strong>"Dwaita"</strong> philosophy. The relationship was so 
                                nice that Shree Akshobhya Teertharu gave his every breath to make Shree Jaya Teertharu 
                                the most proficient and dynamic preacher since Madhva, hence Jaya Teertharu was called 
                                the second moon of Madhwa and Tikacharya, for his many small commentaries. 
                                Shreepad Akshobhya Teertharu taught him how to search out hidden significance's in the words 
                                of Madhwa which others missed.
                            </p>
                            <p>
                                Shree Akshobhya Teertha Moola Vrindavana is at Malkhed. Malkhed comes under Gulbarga 
                                District. It is 40 kms away from Gulbarga. There is sufficient bus facilitiy to Malkhed 
                                from Gulbarga. It is situated in between Gulbarga and Sedam, 12 kms from Sedam.
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
                        <CardBody className="my-2" color="warning" style={{textAlign:'center'}}>           
                            <CardText style={{paddingTop:5}}>
                            </CardText>
                            <strong>Shree Madhvacharyaru</strong>
                            <img className='rounded'
                                alt="Card cap"
                                src={MadhvacharyaruPhoto}
                                style={{height:'auto', width:'auto'}}
                            /> 
                            <br/><br/>
                            <strong>Shree Akshobhya Teertharu</strong>
                            <img className='rounded'
                                alt="Card cap"
                                src={AkshobhyaTeertharuPhoto}
                                style={{height:'auto', width:'auto'}}
                            /> 
                            <br/><br/>
                            <strong>Akshobhya Tirtha Vijaya stambha</strong>
                            <img className='rounded'
                                alt="Card cap"
                                src={VijayastambhaPhoto}
                                style={{height:'auto', width:'250px'}}
                            /> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Footer/>
        </div>
    );
}

export default Origin;