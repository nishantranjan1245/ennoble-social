import Layout from "./Layout.jsx";

import Home from "./Home";

import AboutUs from "./AboutUs";

import Programs from "./Programs";

import Research from "./Research";

import GetInvolved from "./GetInvolved";

import Updates from "./Updates";

import Contact from "./Contact";

import Donate from "./Donate";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfUse from "./TermsOfUse";

import Disclaimer from "./Disclaimer";

import RefundPolicy from "./RefundPolicy";

import Sitemap from "./Sitemap";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    AboutUs: AboutUs,
    
    Programs: Programs,
    
    Research: Research,
    
    GetInvolved: GetInvolved,
    
    Updates: Updates,
    
    Contact: Contact,
    
    Donate: Donate,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfUse: TermsOfUse,
    
    Disclaimer: Disclaimer,
    
    RefundPolicy: RefundPolicy,
    
    Sitemap: Sitemap,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/AboutUs" element={<AboutUs />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/Research" element={<Research />} />
                
                <Route path="/GetInvolved" element={<GetInvolved />} />
                
                <Route path="/Updates" element={<Updates />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfUse" element={<TermsOfUse />} />
                
                <Route path="/Disclaimer" element={<Disclaimer />} />
                
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}