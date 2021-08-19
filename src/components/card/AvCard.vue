<template>
  <div class="shadow">
    <av-card-title
      v-if="hasTitleAsProp"
      class="px-4 pt-4 text-2xl font-bold"
    >
      {{ title }}
    </av-card-title>
    <av-card-content
      v-if="hasContentAsProp"
      class="p-4"
    >
      {{ content }}
    </av-card-content>
    <slot />
  </div>
</template>

<script>
import AvCardTitle from './AvCardTitle.vue';
import AvCardContent from './AvCardContent.vue';

export default {
  name: 'AvCard',
  components: { AvCardTitle, AvCardContent },
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
  },
  computed: {
    hasContentAsProp() {
      return this.content.length > 0;
    },
    hasTitleAsProp() {
      return this.title.length > 0;
    },
  },
};
</script>
