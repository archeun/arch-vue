<template>
  ArchVueHome
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'ArchVueHome',
  setup() {
    const route = useRoute();
    // console.log(route.name);
  },
};
</script>
