<script setup lang="ts">
import { ref} from 'vue';
import Section from './Section.vue';
import Services from './Services.vue';
import teeth from '@/assets/images/teeth.svg';
import oral from '@/assets/images/oral.svg';
import dentist from '@/assets/images/dentist.svg';
import period from '@/assets/images/period.svg';
const customService = ref<{
  title: string,
  heading: string,
  description: string,
  image?: string
}[]>([]);
const customSection = ref<{
  title: string;
  description: string
}[]>([]);
type THeroSection = {
  title: string;
  heading: string;
  description: string;
};
defineProps<{ herosection: THeroSection[] }>();
</script>
<template>
  <section class="relative  bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-36 2xl:px-52 py-32">
    <div class="flex flex-col md:flex-row lg:-mx-8 justify-between ">
      <div class="w-full lg:w-1/2 lg:px-8">
        <h6 class="text-sm uppercase font-semibold tracking-widest">
          <span v-if="herosection.length > 0">{{ herosection[1].title }}</span>
          <span v-else class="block w-20 h-4 bg-gray-300 rounded animate-pulse"></span>
        </h6>
        <h2 class="text-3xl leading-tight font-bold mt-4">
          <span v-if="herosection.length > 0">{{ herosection[1].heading }}</span>
          <span v-else class="block w-100 h-6 bg-gray-300 rounded animate-pulse"></span>
        </h2>
        <p class="text-lg font-medium mt-4">
          <span v-if="herosection.length > 0">{{ herosection[14].description }}</span>
          <span v-else class="block w-100 h-8 bg-gray-300 rounded animate-pulse"></span>
        </p>
        <p class="mt-2 leading-relaxed font-medium">
          <span v-if="herosection.length > 0">{{ herosection[1].description }}</span>
          <span v-else class="block w-100 h-8 bg-gray-300 rounded animate-pulse"></span>

        </p>
      </div>
      <div class="w-full lg:w-1/2 lg:px-11">
        <div>
          <Section :title="herosection[2]?.title" :description="herosection[2]?.description" />
          <Section :title="herosection[3]?.title" :description="herosection[3]?.description" />
        </div>
      </div>
    </div>
    <!--services-->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Services :title="herosection[4]?.title" :heading="herosection[4]?.heading"
          :description="herosection[4]?.description" :image="teeth" />
        <Services :title="herosection[5]?.title" :heading="herosection[5]?.heading"
          :description="herosection[5]?.description" :image="oral" />
        <Services :title="herosection[6]?.title" :heading="herosection[6]?.heading"
          :description="herosection[6]?.description" :image="dentist" />
        <Services :title="herosection[7]?.title" :heading="herosection[7]?.heading"
          :description="herosection[7]?.description" :image="period" />
      </div>
    </div>
  </section>
</template>