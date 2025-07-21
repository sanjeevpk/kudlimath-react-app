import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navigation from './components/navigation';
import Heading from './components/heading';
import {BrowserRouter, HashRouter, Route, Router, Routes} from 'react-router-dom';
import Mission from './components/mission';
import Origin from './components/origin';
import News from './components/news';
import Contributions from './components/contributions';
import Home from './components/home';
import KnowledgeCenter from './components/knowledgeCenter';
import Donations from './components/donations';
import Contact from './components/contact';
import SocialMediaFeeds from './components/socialMediaFeeds';
import Pratimas from './components/pratimas';
import RaghuVijayTeerthruProfile from './components/raghuVijayTeerthruProfile';
import Guruparampare from './components/guruparampare';
import PageNotFound from './components/pageNotFound';
import CreateDonation from './components/createDonation';
import CheckoutDonation from './components/checkOutDonation';
import DonationResponse from './components/donationResponse';
import CreateNews from './components/admin/createNews';
import PrivacyPolicy from './components/privacyPolicy';
import TermsAndConditions from './components/termsAndConditions';
import Chaturmasa from './components/chaturmasa';
import RegisterUsers from './components/registerUsers';
import RegistrationSuccess from './components/registrationSuccess';

function App(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HashRouter >
        <Routes>
          <Route path="/" Component={Home} excact></Route>
          <Route path="/mission" Component={Mission} excact></Route>
          <Route path="/origin" Component={Origin} excact></Route>
          <Route path="/news" Component={News} excact></Route>
          <Route path="/contributions" Component={Contributions} excact></Route>
          <Route path="/knowledge-center" Component={KnowledgeCenter} excact></Route>
          <Route path="/donations" Component={Donations} excact></Route>
          <Route path="/contact" Component={Contact} excact></Route>
          <Route path="/social-media-feeds" Component={SocialMediaFeeds} excact></Route>
          <Route path="/pratimas" Component={Pratimas} excact></Route>
          <Route path="/raghu-vijay-teertharu" Component={RaghuVijayTeerthruProfile} excact></Route>
          <Route path="/parampare" Component={Guruparampare} excact></Route>
          <Route path="/create-donation" Component={CreateDonation} excact></Route>
          <Route path="/checkout" Component={CheckoutDonation} excact></Route>
          <Route path="/donation-response" Component={DonationResponse}></Route>
          <Route path="/privacy-policy" Component={PrivacyPolicy}></Route>
          <Route path="/terms-condtions" Component={TermsAndConditions}></Route>
          <Route path="/chaturmasya" Component={Chaturmasa} exact></Route>
          <Route path="/admin/news" Component={CreateNews} exact></Route>
          <Route path="/register" Component={RegisterUsers} exact></Route>
          <Route path="/registration-result" Component={RegistrationSuccess} exact></Route>
          <Route path="*" Component={PageNotFound} excact></Route>
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
