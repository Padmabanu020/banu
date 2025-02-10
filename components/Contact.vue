<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
const customButton = ref({
  text: 'Book Appointment',
  buttonStyle: 'px-6 py-4 bg-white text-blue-600 rounded font-semibold w-full sm:w-auto text-center sm:inline-block' 
});
const handleClick = () => {
  console.log('Button clicked');
}
type THeroSection = {
  title: string;
  heading: string;
  description: string
};
defineProps<{ herosection: THeroSection[] }>();
</script>
<template>
  <section
    class="bg-gradient-to-r from-blue-500 to-teal-500 h-auto sm:h-32 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-4 sm:mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left w-full sm:mt-2">
      <!-- Left-aligned Text -->
      <h2 v-if="herosection.length === 0" class="text-lg sm:text-xl font-bold text-white">
        <span class="inline-block h-6 w-40 bg-gray-300 rounded animate-pulse"></span>
      </h2>
      <h2 v-else class="text-lg sm:text-xl font-bold text-white mt-4">
        {{ herosection.length > 0 ? herosection[11].description : '' }}
      </h2>
      <!-- Right-aligned Button -->
      <div class="mt-4 sm:mt-2 sm:ml-8">
        <Button :button-style="customButton.buttonStyle" :text="customButton.text" :action="handleClick" />
      </div>
    </div>
  </section>
</template>
