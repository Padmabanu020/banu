<script setup lang="ts">
type IButton = {
  text: string;
  buttonStyle: string;
  action: () => void;
};
const props = defineProps<IButton>();
</script>
<template>
  <div class="flex flex-col space-y-4">
    <button :class="`${buttonStyle}`" @click="action">
      {{ text }}
    </button>
  </div>
</template>
