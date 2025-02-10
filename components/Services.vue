<script setup lang="ts">
type IServices = {
    title?: string;
    heading?: string;
    description?: string;
    image?: string;
};
defineProps<IServices>();
</script>
<template>
    <div class=" rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
        <img :src="image">
        <h4 class="text-xl font-bold mt-5 ">
            <span v-if="!title" class="inline-block h-4 w-40 bg-gray-300 rounded animate-pulse"></span>
            <span v-else>{{ title }}</span>
        </h4>
        <p class="mt-1 font-light">
            <span v-if="!heading" class="inline-block h-4 w-40 bg-gray-300 rounded animate-pulse"></span>
            <span v-else>{{ heading }}</span>
        </p>
        <a href="#" class="block mt-4">
            <span v-if="!description" class="inline-block h-4 w-40 bg-gray-300 rounded animate-pulse"></span>
            <span v-else>{{ description }}</span>
        </a>
    </div>
</template>
