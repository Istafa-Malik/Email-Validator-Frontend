// src/components/pages/HomePage.js
import React, { useEffect } from 'react';
import Navbar from '../Navbar'; // Import Navbar component
import {Header} from '../Header.js';
import { Feature } from '../Feature';
import { Pricing } from '../Pricing';
import { Content } from '../Content';
import { Faq } from '../Faq';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton'; // Import the ScrollToTopButton
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar /> {/* Include Navbar here */}
      <Header/> {   }
      <section id="features">
        <Feature />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="content">
        <Content />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <Footer />
      <ScrollToTopButton /> {/* Include the ScrollToTopButton */}
    </>
  );
};

export default HomePage;
