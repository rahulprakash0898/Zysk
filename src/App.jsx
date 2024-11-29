import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics.jsx';
import Testimonial from './components/Testimonial.jsx';
import View from './components/View.jsx';
import Delivery from './components/Delivery.jsx';
import Question from './components/Question.jsx';
import ContactForm from './components/ContactForm.jsx';
import BlogPosts from './components/BlogPosts.jsx';
import Footer from './components/Footer.jsx';
import Last from './components/Last.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Dashboard />
      <Analytics />
      <Testimonial />
      <View />
      <Delivery />
      <Question />
      <ContactForm />
      <BlogPosts />
      <Footer />
      <Last />
    </div>
  );
}

export default App;
