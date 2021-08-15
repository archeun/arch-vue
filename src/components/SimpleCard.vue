<template>
  <div
    class="shadow w-64 p-8 font-bold text-center"
    :class="{
      'bg-gray-700 text-gray-200': theme === 'dark',
      'bg-gray-200 text-gray-700': theme === 'light',
    }"
  >
    {{ title }}
  </div>
</template>

<script>

export default {
  name: 'SimpleCard',
  props: {
    title: { type: String, required: true },
    theme: {
      type: String,
      validator(value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      },
      default: 'light',
    },
  },
  setup() {
    return {

    };
  },
};
</script>
