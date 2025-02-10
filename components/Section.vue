<script setup lang="ts">
type ISection = {
    title?: string;
    description?: string;
};
defineProps<ISection>();
</script>
<template>
    <div class="flex sm:flex-row items-center gap-5 sm:items-start mt-2">
        <div class=" w-16 h-16 p-8 bg-blue-600 rounded-full mb-10"></div>
        <div class=" ">
            <h4 class=" text-xl font-bold ">
                <span v-if="!title" class="inline-block h-6 w-32 bg-gray-300 rounded-full animate-pulse"></span>
                <span v-else>{{ title }}</span>
            </h4>
            <p class="mt-2 leading-relaxed font-medium">
                <span v-if="!description" class="inline-block h-4 w-48 bg-gray-300 rounded animate-pulse"></span>
                <span v-else>{{ description }}</span>
            </p>
        </div>
    </div>
</template>
