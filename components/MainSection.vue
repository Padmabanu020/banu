<template>
<section class="cover bg-blue-teal-gradient relative bg-white-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center">
      <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-100 rounded-br-[35%]"></div>
    <img 
      src="https://tailwindcss-templates.netlify.app/dentalpro/images/cover-bg.jpeg" 
      alt="Dental Office"
      class="relative w-full h-full object-cover opacity-50 rounded-br-[35%]";
    >
    <div class="bg-white h-16 rounded-br-[50%]"></div>
  </div>
      <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-wide " style="line-height: 1.3;" 
            :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
            :style="{ transition: 'all 1s ease-out' }">
              
              A better life <br>starts with a beautiful smile.</h1>
              
            <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4"
            :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
            :style="{ transition: 'all 1s ease-out' }"
            >Welcome to the Dentist Office of Dr. Thomas
              Dooley,
              where
              trust
              and comfort are priorities.</p>
              
            <a href="#" class="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">Book
              Appointment</a>
              
          </div>
        </div>
      </section>
    </template>
    <script>
    export default {
      data() {
        return {
          isVisible: false,
        };
      },
      mounted() {
        setTimeout(() => {
          this.isVisible = true;
        }, 100); // Delay for animation
      },
    };
    </script>