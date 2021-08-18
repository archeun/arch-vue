<template>
  ArchVueComponentDocumentation
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'ArchVueComponentDocumentation',
  setup() {
    const route = useRoute();
    // console.log(route.name);
  },
};
</script>
