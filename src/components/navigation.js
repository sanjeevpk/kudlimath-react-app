import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


import HeadingLogo from '../images/heading_logo.png';
import { Link } from 'react-router-dom';
import Mission from './mission';
import Chaturmasya from './chaturmasa';
import Home from './home';
import KnowledgeCenter from './knowledgeCenter';
import News from './news';
import Donations from './donations';
import Contact from './contact';
import SocialMediaFeeds from './socialMediaFeeds';
import Pratimas from './pratimas';
import RaghuVijayTeerthruProfile from './raghuVijayTeerthruProfile';
import Guruparampare from './guruparampare';

function Navigation(args){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        
        <div>
            
        {/* <Navbar {...args} light style={{background:'linear-gradient(0deg, rgb(244, 196, 48) 0%, rgb(255, 87, 51) 100%)'}} > */}
        <Navbar {...args} style={{width:'80%',overflow:'scroll' }} expand={window.innerWidth >= 768 ? true : false} light style={{background:'linear-gradient(0deg, rgb(244, 196, 48) 0%, rgb(255, 87, 51) 100%)'}} > 
          <NavbarBrand href="/" >
          <img
              alt="logo"
              src={HeadingLogo}
              style={{
              height: 40,
              width: 40
              }}
          />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link className='list-group-item listgroup-item-action' tag="a" to="/" action={Home}>
                  Home
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About Us
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                  <Link className='list-group-item listgroup-item-action' tag="a" to="/mission" action={Mission}>
                      Mission
                  </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link className='list-group-item listgroup-item-action' tag="a" to="/origin" action={Mission}>
                      Origin
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link className='list-group-item listgroup-item-action' tag="a" to="/parampare" action={Guruparampare}>
                      Guru Parampare
                    </Link>    
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link className='list-group-item listgroup-item-action' tag="a" to="/pratimas" action={Pratimas}>
                      Samstana Pratimas
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/chaturmasya" action={Mission}>
                  Chaturmasya
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/contributions" action={Mission}>
                  Social Contributions
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/knowledge-center" action={KnowledgeCenter}>
                  Knowledge Center
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/news" action={News}>
                  News
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/social-media-feeds" action={SocialMediaFeeds}>
                  Social Media Feeds
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/donations" action={Donations}>
                  Donations
                </Link>
              </NavItem>
              <NavItem>
                <Link className='list-group-item list-group-item-action' tag="a" to="/contact" action={Contact}>
                  Contact & Centers 
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    );
}

export default Navigation;