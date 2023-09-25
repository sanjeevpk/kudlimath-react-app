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
import AkshobhyaTeertha from '../images/guruparampare/akshobhyateertharu.jpg';
import ThrailokyaTeertha from '../images/guruparampare/trailokya_1.png';
import LokavandithaTeertha from '../images/guruparampare/lokavandita_1.png';
import SulabhaTeertha from '../images/guruparampare/sulabha_1.png';
import RaghupungavaTeertha from '../images/guruparampare/raghupungava_1.png';
import RaghunathaTeertha from '../images/guruparampare/raghunatha_1.png';
import RaghupathiTeertha from '../images/guruparampare/raghupati_1_1.png';
import RaghuttamaTeertha from '../images/guruparampare/raghuttama_1.png';
import RaghurajaTeertha from '../images/guruparampare/raghuraja_1.png';
import RaghuvaryaTeertha from '../images/guruparampare/raghuvarya_1.png';
import RaghuvallabhaTeertha from '../images/guruparampare/raghuvallabha_1.png';
import RaghupriyaTeertha from '../images/guruparampare/raghupriya_1_1.png';
import RaghuvaraTeertha from '../images/guruparampare/raghuvara_1.png';
import RaghushanthaTeertha from '../images/guruparampare/raghushant_1.png';
import RaghudaanthTeertha from '../images/guruparampare/raghudhanta_1.png';
import RaghupremaTeertha from '../images/guruparampare/1_raghuprem.png';
import RamadhyanTeertha from '../images/guruparampare/ramadhyana_1.png';
import RaghupriyaTeertha2 from '../images/guruparampare/1_raghupriya.png';
import Raghuvijayateertha from '../images/guruparampare/1_raghuvijaya.png';
import Default_Image from '../images/guruparampare/1_1.png';

function Guruparampare(){

    const GuruparampareList = [
        {
          "id": "1",
          "aaradhane": "Margashirsha Maasa, Krishna Paksha, Panchami",
          "brindavana_place": "Mallkhed",
          "details": "Shree Shree 1008 Shree Akshobhya Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Akshobhya Teertha Shreepadangalavaru",
          "period_from": "1350",
          "period_to": "1365",
          "img":AkshobhyaTeertha
        },
        {
          "id": "2",
          "aaradhane": "Chaitra Maasa, Shukla Paksha, Pratipada",
          "brindavana_place": "Kudli",
          "details":
            "Shree Shree 1008 Shree Thrailokya Bhushana Teertha Shreepadangalavaru",
          "peethadhipati":
            "Shree Shree 1008 Shree Thrailokya Bhushana Teertha Shreepadangalavaru",
          "period_from": "1365",
          "period_to": "1366",
          "img":ThrailokyaTeertha
        },
        {
          "id": "3",
          "aaradhane": "Vaishaka Maasa, Shukla Paksha, Tritiya",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Lokavanditha Teertha Sripadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Lokavanditha Teertha Sripadangalavaru",
          "period_from": "1366",
          "period_to": "1374",
          "img":LokavandithaTeertha
        },
        {
          "id": "4",
          "aaradhane": "Jyeshta Maasa, Krishna Paksha, Amavasye",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Sulabha Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Sulabha Teertha Shreepadangalavaru",
          "period_from": "1374",
          "period_to": "1376",
          "img":SulabhaTeertha
        },
        {
          "id": "5",
          "aaradhane": "Aashada Maasa, Krishna Paksha, Panchami",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghupungava Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupungava Teertha Shreepadangalavaru",
          "period_from": "1376",
          "period_to": "1385",
          "img":RaghupungavaTeertha
        },
        {
          "id": "6",
          "aaradhane": "Shravana Maasa, Shukla Paksha, Pournima",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghunatha Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghunatha Teertha Shreepadangalavaru",
          "period_from": "1385",
          "period_to": "1395",
          "img":RaghunathaTeertha
        },
        {
          "id": "7",
          "aaradhane": "Bhadrapada Maasa, Shukla Paksha, Pournima",
          "brindavana_place": "Ramasagar",
          "details": "Shree Shree 1008 Shree Raghuvandya Teeertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuvandya Teeertha Shreepadangalavaru",
          "period_from": "1395",
          "period_to": "1417",
        },
        {
          "id": "8",
          "aaradhane": "Aashwina Maasa, Shukla Paksha, Pratipada",
          "brindavana_place": "Hampi",
          "details": "Shree Shree 1008 Shree Raghunandana Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghunandana Teertha Shreepadangalavaru",
          "period_from": "1417",
          "period_to": "1439",
        },
        {
          "id": "9",
          "aaradhane": "Vaishaka Maasa, Shukla Paksha, Dvadashi",
          "brindavana_place": "Hampi",
          "details": "Shree Shree 1008 Shree Vidyanidhi Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Vidyanidhi Teertha Shreepadangalavaru",
          "period_from": "1439",
          "period_to": "1451",
        },
        {
          "id": "10",
          "aaradhane": "Pushya Maasa, Krishna Paksha, Shashthi",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "period_from": "1451",
          "period_to": "1481",
          "img":RaghupathiTeertha
        },
        {
          "id": "11",
          "aaradhane": "Maagha Maasa, Shukla Paksha, Dwitiya",
          "brindavana_place": "Maayagunde, Kangu",
          "details": "Shree Shree 1008 Shree Narayana Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Narayana Teertha Shreepadangalavaru",
          "period_from": "1481",
          "period_to": "1542",
        },
        {
          "id": "12",
          "aaradhane": "Aashwina Maasa, Shukla Paksha, Sapthami",
          "brindavana_place": "Unknown",
          "details": "Shree Shree 1008 Shree Mukunda Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Mukunda Teertha Shreepadangalavaru",
          "period_from": "1542",
          "period_to": "1562",
        },
        {
          "id": "13",
          "aaradhane": "Margashirsha Maasa, Shukla Paksha, Dashami",
          "brindavana_place": "Unknown",
          "details": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "period_from": "1562",
          "period_to": "1572",
        },
        {
          "id": "14",
          "aaradhane": "Chaitra Maasa, Shukla Paksha, Sapthami",
          "brindavana_place": "Unknown",
          "details": "Shree Shree 1008 Shree Ramachandra Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Ramachandra Teertha Shreepadangalavaru",
          "period_from": "1572",
          "period_to": "1599",
        },
        {
          "id": "15",
          "aaradhane": "Shravana Maasa, Krishna Paksha, Ashthami",
          "brindavana_place": "Unknown",
          "details": "Shree Shree 1008 Shree Raghuttama Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuttama Teertha Shreepadangalavaru",
          "period_from": "1599",
          "period_to": "1622",
          "img":RaghuttamaTeertha
        },
        {
          "id": "16",
          "aaradhane": "Phalguna Maasa, Shukla Paksha, Pournima",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuraja Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuraja Teertha Shreepadangalavaru",
          "period_from": "1622",
          "period_to": "1670",
          "img":RaghurajaTeertha
        },
        {
          "id": "17",
          "aaradhane": "Jeshtha Maasa, Shukla Paksha, Dvadashi",
          "brindavana_place": "Unknown",
          "details": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupathi Teertha Shreepadangalavaru",
          "period_from": "1670",
          "period_to": "1727",
        },
        {
          "id": "18",
          "aaradhane": "Aashadha Maasa, Krishna Paksha, Tritiya",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Ramachandra Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Ramachandra Teertha Shreepadangalavaru",
          "period_from": "1727",
          "period_to": "1772",
        },
        {
          "id": "19",
          "aaradhane": "Margashirsha Maasa, Krishna Paksha, Tritiya",
          "brindavana_place": "Naavuru Agrahara",
          "details": "Shree Shree 1008 Shree Rama Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Rama Teertha Shreepadangalavaru",
          "period_from": "1772",
          "period_to": "1832",
        },
        {
          "id": "20",
          "aaradhane": "Margashirsha Maasa, Krishna Paksha, Pratipada",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuvarya Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuvarya Teertha Shreepadangalavaru",
          "period_from": "1832",
          "period_to": "1842",
          "img":RaghuvaryaTeertha
        },
        {
          "id": "21",
          "aaradhane": "Vaishaka Maasa, Krishna Paksha, Chaouti",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuvallabha Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuvallabha Teertha Shreepadangalavaru",
          "period_from": "1842",
          "period_to": "1856",
          "img":RaghuvallabhaTeertha
        },
        {
          "id": "22",
          "aaradhane": "Aashvina Maasa, Shukla Paksha, Tritiya",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghupriya Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupriya Teertha Shreepadangalavaru",
          "period_from": "1856",
          "period_to": "1890",
          "img":RaghupriyaTeertha
        },
        {
          "id": "23",
          "aaradhane": "Vaishakha Maasa, Krishna Paksha, Tritiya",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuvara Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuvara Teertha Shreepadangalavaru",
          "period_from": "1890",
          "period_to": "1899",
          "img":RaghuvaraTeertha
        },
        {
          "id": "24",
          "aaradhane": "Bhadrapada Maasa, Krishna Paksha, Pratipada",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuthama Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuthama Teertha Shreepadangalavaru",
          "period_from": "1899",
          "period_to": "1901",
        },
        {
          "id": "25",
          "aaradhane": "Pushya Maasa, Krishna Paksha, Chaturdhashi",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghushantha Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghushantha Teertha Shreepadangalavaru",
          "period_from": "1901",
          "period_to": "1911",
          "img":RaghushanthaTeertha
        },
        {
          "id": "26",
          "aaradhane": "Jeshtha Maasa, Krishna Paksha, Shashti",
          "brindavana_place": "Malakhed",
          "details": "Shree Shree 1008 Shree Raghukantha Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghukantha Teertha Shreepadangalavaru",
          "period_from": "1911",
          "period_to": "1923",
        },
        {
          "id": "27",
          "aaradhane": "Bhadrapada Maasa, Shukla Paksha, Sapthami",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghudaanth Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghudaanth Teertha Shreepadangalavaru",
          "period_from": "1923",
          "period_to": "1943",
          "img":RaghudaanthTeertha
        },
        {
          "id": "28",
          "aaradhane": "Bhadrapada Maasa, Shukla Paksha, Sapthami",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghudaanth Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghudaanth Teertha Shreepadangalavaru",
          "period_from": "1923",
          "period_to": "1943",
          "img":RaghudaanthTeertha
        },
        {
          "id": "29",
          "aaradhane": "",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghuprema Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuprema Teertha Shreepadangalavaru",
          "period_from": "",
          "period_to": "",
          "img":RaghupremaTeertha
        },
        {
          "id": "30",
          "aaradhane": "Bhadrapada Maasa, Krishna Paksha, Dvadashi",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Ramadhyan Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Ramadhyan Teertha Shreepadangalavaru",
          "period_from": "1962",
          "period_to": "1969",
          "img":RamadhyanTeertha
        },
        {
          "id": "31",
          "aaradhane": "Pushya Maasa, Shukla Paksha, Shashthi",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghupramathi Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupramathi Teertha Shreepadangalavaru",
          "period_from": "1972",
          "period_to": "1982",
        },
        {
          "id": "32",
          "aaradhane": "Pushya Maasa, Shukla Paksha, Trayodashi",
          "brindavana_place": "Kudli",
          "details": "Shree Shree 1008 Shree Raghupriya Teertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghupriya Teertha Shreepadangalavaru",
          "period_from": "1982",
          "period_to": "2009",
          "img":RaghupriyaTeertha2
        },
        {
          "id": "33",
          "aaradhane":
            "Present Peetadhipathigalu. Aashrama Sweekara on 07/04/2003 Chaitra Maasa Shukla Paksha Panchami",
          "brindavana_place": "Present Peetadhipathigalu",
          "details": "Shree Shree 1008 Shree Raghuvijayateertha Shreepadangalavaru",
          "peethadhipati": "Shree Shree 1008 Shree Raghuvijayateertha Shreepadangalavaru",
          "period_from": "2009",
          "period_to": "Present",
          "img":Raghuvijayateertha
        },
    ];

    return(
        <div>
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>Guruparampare</h2> 
            <Row>
                {GuruparampareList && GuruparampareList.map((item, index) => (
                    <Col sm="4" style={{padding:10, marginBottom:'10px'}}>
                        <Card style={{height:'100%', margin:'10px'}} color="warning" outline> 
                            <CardHeader style={{fontWeight:'bold', display:"flex"}}>
                                <span style={{textAlign:'center'}}>{item.details} - {item.brindavana_place}</span>
                            </CardHeader> 
                            <CardBody className="my-2" color="warning" style={{display:"flex", justifyContent:'center', alignItems:"center"}}>      
                                <CardText style={{paddingTop:5}}>
                                    <div style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
                                        {typeof item.img !== 'undefined' ?
                                            <img src={item.img}/>
                                            :
                                            <img src={Default_Image}/>
                                        }
                                    </div>
                                    <p style={{textAlign:'center', paddingTop:'5px'}}>{item.period_from} - {item.period_to}</p>
                                    <p style={{textAlign:'center'}}>
                                        {index === GuruparampareList.length - 1 ?
                                            <></>   : <strong>Aradhane : </strong>
                                        }
                                        {item.aaradhane}
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Footer/>
        </div>
    )
}

export default Guruparampare;