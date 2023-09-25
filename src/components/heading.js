import React from 'react';
import BannerImage from '../images/Banner.png';
import Chakra from '../images/chakra.png';


function Heading(){
    return (
        <div style={{textAlign:'center',marginTop:'5px'}}>
            <img class="img-fluid" src={BannerImage} style={{height:'100px', width:'auto',marginTop:'5px'}} alt="banner"/>
        </div>
    );
}

export default Heading;