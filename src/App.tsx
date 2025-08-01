import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurWork from './components/OurWork';
import KeyProjects from './components/KeyProjects';
import Team from './components/Team';
import Innovations from './components/Innovations';
import AppsTools from './components/AppsTools';
import Partnerships from './components/Partnerships';
import Testimonials from './components/Testimonials';
import InternalReference from './components/InternalReference';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <OurWork />
        <KeyProjects />
        <Team />
        <Innovations />
        <AppsTools />
        <Partnerships />
        <Testimonials />
        <InternalReference />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;