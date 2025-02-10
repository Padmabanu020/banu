<script setup lang="ts">
import Button from './Button.vue';
import { ref, onMounted } from 'vue';
const customButton = ref({
  text: 'Book Appointment',
  buttonStyle: 'bg-teal-500 text-white px-6 py-4 mt-8 rounded-lg font-semibold inline-block text-center max-w-xs w-48'
});
const handleClick = () => {
  console.log('Button clicked');
}
const isVisible = ref(false);
type THeroSection = {
  title: string;
  heading: string;
  description: string;
};
defineProps<{ herosection: THeroSection[] }>();
onMounted(() => {

  setTimeout(() => {
    isVisible.value = true;
  }, 100); // Delay for animation
});
</script>
<template>
  <section class="cover bg-blue-teal-gradient relative bg-white-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-100 rounded-br-[35%]"></div>
      <img src="https://tailwindcss-templates.netlify.app/dentalpro/images/cover-bg.jpeg" alt="Dental Office"
        class="relative w-full h-full object-cover opacity-50 rounded-br-[35%]" ;>
      <div class="bg-white h-16 rounded-br-[50%]"></div>
    </div>
    <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
      <div>
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-wide "
          style="line-height: 1.3;"
          :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          :style="{ transition: 'all 1s ease-out' }">
          <span v-if="herosection.length > 0">
            {{ herosection[0].title }}
          </span>
          <span v-else class="block w-100 h-6 bg-gray-300 rounded animate-pulse"></span>
        </h1>
        <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4"
          :class="{ 'opacity-0 translate-y-10': !isVisible, 'opacity-100 translate-y-0': isVisible }"
          :style="{ transition: 'all 1s ease-out' }">
          <span v-if="herosection.length > 0">
            {{ herosection[0].description }}
          </span>
          <span v-else class="block w-150 h-8 bg-gray-300 rounded animate-pulse"></span>
        </p>
        <Button :button-style="customButton.buttonStyle" :text="customButton.text" :action="handleClick" />
      </div>
    </div>
  </section>
</template>
