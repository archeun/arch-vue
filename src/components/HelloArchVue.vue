<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  msg: { type: String, default: '' },
});

</script>
