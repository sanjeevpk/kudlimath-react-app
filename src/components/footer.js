import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, IconButton } from '@mui/material';
import { useRef } from 'react';

function Footer(){

    const buttonRef = useRef();
    let currentYear = new Date().getFullYear();

    const footerContents = [{'title':'Twitter', 'icon':<TwitterIcon className='footer_icon_styles'/>, 'url':'https://twitter.com/kudalimath'},
                            {'title':'Facebook', 'icon':<FacebookIcon className='footer_icon_styles'/>, 'url':'https://www.facebook.com/sriraghuvijayateertharu'},
                            {'title':'Instagram', 'icon':<InstagramIcon className='footer_icon_styles'/>, 'url':'https://www.instagram.com/sri_aryaakshobhyateerthamath/'},
                            {'title':'Youtube','icon':<YouTubeIcon className='footer_icon_styles'/>, 'url':'https://www.youtube.com/@srikudliaryaakshobhyateertmath'}
                            ];

    const handleFooterIconClick = (e) => {
        console.log(e);
        window.open(e, "_blank")
    }

    return(
        <div className="" style={{textAlign:'center', background:'#f40000'}} id="footer">
            <h3>Shree Kudli Aarya Akshobhya Teerth Matha</h3>
            <a href='#privacy-policy'><h8>Privacy Policy</h8></a> | <a href='#terms-condtions'><h8>Terms And Conditions</h8></a>
            <p>Get in touch with us via below social links</p>
            <div className="social-links">
                {footerContents && footerContents.map((item, index) => (
                    <Button key={index} value={item.url} onClick={(url) => handleFooterIconClick(item.url)}>{item.icon}</Button>
                ))}
            </div>
            <div className="copyright">
                &copy; Copyright <span> {currentYear} <strong>Shree Kudli Aarya Akshobhya Teerth Matha</strong></span>. All Rights Reserved
            </div>
        </div>
    )
};

export default Footer;
