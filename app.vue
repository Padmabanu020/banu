<template>
    <div id="app">
      <Header />
      <MainSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import MainSection from './components/MainSection.vue';
  import About from './components/About.vue';
  import Testimonials from './components/Testimonials.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
      MainSection,
      About,
      Testimonials,
      Contact,
      Footer,
    },
  };
  </script>
  
  <style>
  /* Global styles */
  </style>
  