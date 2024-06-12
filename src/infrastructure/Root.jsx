import { Route, Routes } from "react-router-dom";

import React from 'react'
import HomePage from '../app/HomePage/Index';
import AboutUs from '../app/AboutUs/Index';
import ContactUs from '../app/ContactUs/Index';
import OurServices from  '../app/OurServices/Index';
import Pricing from '../app/Pricing/Index';
import PrivacyPolicy from '../app/PrivacyPolicy/Index';


function Root() {
  return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about_us" element={<AboutUs/>} />
            <Route path="/contact_us" element={<ContactUs/>} />
            <Route path="/our_services" element={<OurServices/>} />
            <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
            <Route path="/pricing" element={<Pricing/>} />
        </Routes>
  )
}

export default Root