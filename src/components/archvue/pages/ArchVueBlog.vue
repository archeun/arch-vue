<template>
  ArchVueBlog
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'ArchVueBlog',
  setup() {
    const route = useRoute();
    // console.log(route.name);
  },
};
</script>
