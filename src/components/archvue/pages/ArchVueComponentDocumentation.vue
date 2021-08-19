<template>
  <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
    <ul class="flex flex-col border col-span-1 sm:col-span-2 p-4">
      <li>
        <router-link :to="{ name: 'components', params: { name: 'av-button' }}">
          Button
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'components', params: { name: 'av-card' }}">
          Card
        </router-link>
      </li>
    </ul>
    <div class="border col-span-1 sm:col-span-10 p-4">
      <component :is="`${$route.params.name}Docs`" />
    </div>
  </div>
</template>

<script>

import AvCardDocs from './component-docs/AvCardDocs.vue';

export default {
  name: 'ArchVueComponentDocumentation',
  components: {
    AvCardDocs,
  },
};
</script>
