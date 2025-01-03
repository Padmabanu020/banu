<!-- Header.vue -->
<template>
    <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  rel="stylesheet"/>
      <div class="flex justify-between items-center px-6 py-2 text-sm border-b border-white/20 hidden md:flex">
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-4">
            <img src="public/assets/location-pin-svgrepo-com.svg" alt="Location Pin" class="w-4 h-4">
            <span>1985 Kerry Way, Whittier, CA, USA!</span>
          </div>
          <div class="flex items-center space-x-4">
            <img src="public/assets/phone-call-svgrepo-com.svg" alt="Phone Icon" class="w-4 h-4">
            <span>+1 562-789-1935</span>
          </div>
        </div>
        <div class="flex space-x-6">
            <a href="#" class="hover:text-gray-200"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fa-brands fa-youtube"></i></a>

        </div>
      </div>
      <div class="flex justify-between items-center px-6 py-4">
    <a href="#" class="text-2xl font-bold">DentalPro</a>
    <!-- Hamburger Button (Visible only on mobile) -->
    <div>
    <button
      @click="toggleMenu"
      aria-expanded="isMenuOpen.toString()"
      aria-controls="menu"
      class="md:hidden block p-2"
    >
      <svg
        v-if="!isMenuOpen"
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
      <svg
        v-if="isMenuOpen"
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <title>close</title>
        <path d="M10 8.586L13.707 5 15 6.414 11.293 10 15 13.586 13.707 15 10 11.414 6.414 15 5 13.586 8.707 10 5 6.414 6.414 5 10 8.586z"></path>
      </svg>
    </button>

    <!-- Menu Toggle (Hidden by default) -->
    <input type="checkbox" class="hidden" :checked="isMenuOpen" id="menu-toggle" />

    <!-- Centered Dropdown Menu -->
    <div
      v-show="isMenuOpen"
      class="fixed inset-0 flex flex-col items-center  z-20 bg-opacity-75 bg-black"
      id="menu"
      role="navigation"
      aria-label="Main navigation"
      @click="closeMenu"  
    >
      <div
        class="bg-white shadow-lg p-6  w-full max-w-sm mx-auto mt-20 rounded-lg"
        @click.stop  
      >
        <nav class="flex flex-col text-center space-y-4">
          <a href="#" class="hover:text-gray-200 font-semibold">About Us</a>
          <a href="#" class="hover:text-gray-200 font-semibold">Treatments</a>
          <a href="#" class="hover:text-gray-200 font-semibold">Testimonials</a>
          <a href="#" class="hover:text-gray-200 font-semibold">Blog</a>
          <a href="#" class="hover:text-gray-200 font-semibold">Contact Us</a>
          <div class="flex justify-center items-center">

          <a href="#" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-blue-700">
      Book Appointment
    </a></div>
        </nav>
      </div>
    </div>
  </div>

    <!-- Desktop Navigation (Visible only on medium and larger screens) -->
    <nav class="hidden md:flex space-x-6">
      <a href="#" class="hover:text-gray-200 font-semibold">About Us</a>
      <a href="#" class="hover:text-gray-200 font-semibold">Treatments</a>
      <a href="#" class="hover:text-gray-200 font-semibold">Testimonials</a>
      <a href="#" class="hover:text-gray-200 font-semibold">Blog</a>
      <a href="#" class="hover:text-gray-200 font-semibold">Contact Us</a>
      <a href="#" class="hidden md:block bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100">
      Book Appointment
    </a>
    </nav>
  </div>

  
    </header>
  </template>
  
  <script>
  export default {
    name: "ContactBar",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        // Toggle the menu open/close state
        this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close state
       },
       closeMenu() {
       this.isMenuOpen = false; // Close the menu when clicked outside
     },
   },
 };
</script>
<style scoped>
  
</style>
  