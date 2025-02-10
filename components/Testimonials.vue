<script setup lang="ts">
import { ref } from 'vue';
const herosection = ref<THeroSection[]>([]);
type THeroSection = {
  title: string;
  heading: string;
  description: string;
};
</script>
<template>
  <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
    <div class="flex flex-col md:flex-row lg:-mx-8">
      <div class="w-full lg:w-1/2 lg:px-8">
        <h6 class="text-sm uppercase font-semibold tracking-widest">
          <span v-if="herosection.length > 0">{{ herosection[8].title }}</span>
          <span v-else class="block w-20 h-4 bg-gray-300 rounded animate-pulse"></span>
        </h6>
        <h2 class="text-3xl leading-tight font-bold mt-4">
          <span v-if="herosection.length > 0">{{ herosection[8].heading }}</span>
          <span v-else class="block w-100 h-6 bg-gray-300 rounded animate-pulse"></span>
        </h2>
        <p class="mt-2 leading-relaxed">
          <span v-if="herosection.length > 0">{{ herosection[8].description }}</span>
          <span v-else class="block w-100 h-8 bg-gray-300 rounded animate-pulse"></span>
        </p>
      </div>
      <div class="w-full lg:w-1/2 lg:px-8">
        <img src="/assets/images/dental.jpg" alt="Dental Image" class="w-full h-72 rounded-lg object-cover" />
        <p class="italic text-sm mt-2 text-right">
          <span v-if="herosection.length > 0">{{ herosection[10].description }}</span>
          <span v-else class="block w-100 h-4 bg-gray-300 rounded animate-pulse"></span>
        </p>
      </div>
    </div>
  </section>
</template>

