<template>
  <arch-vue-brand-text class="sm:text-9xl text-6xl mb-10" />

  <p class="sm:flex justify-center mb-2 text-lg text-gray-600 text-center">
    <ArchVueBrandText class="mr-1 block" />
    <span>is a collection of UI components designed for the web.</span>
  </p>

  <p class="flex justify-center mb-10 text-lg text-gray-600 text-center">
    These components are crafted using Vue and beutified with TailwindCSS
  </p>

  <div class="flex justify-center mb-10">
    <img
      class="h-12"
      src="img/vue-logo.png"
      alt="vue logo"
    >
    <span class="text-4xl mx-4 text-gray-600">+</span>
    <img
      class="h-12"
      src="img/tailwindcss-logo.svg"
      alt="tailwindcss logo"
    >
  </div>
</template>

<script>

import ArchVueBrandText from '../utils/common/ArchVueBrandText.vue';

export default {
  name: 'ArchVueHome',
  components: {
    ArchVueBrandText,
  },
};
</script>
