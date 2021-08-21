<template>
  <div class="shadow">
    <av-card-title
      v-if="isPropProvided('title')"
      class="px-4 pt-4 text-2xl font-bold"
    >
      {{ title }}
    </av-card-title>
    <av-card-subtitle
      v-if="isPropProvided('subtitle')"
      class="px-4 pt-2 text-sm text-gray-600"
    >
      {{ subtitle }}
    </av-card-subtitle>
    <av-card-content
      v-if="isPropProvided('content')"
      class="p-4"
    >
      {{ content }}
    </av-card-content>
    <av-card-footer
      v-if="isPropProvided('footer')"
      class="border-t p-2 px-4 text-gray-600 text-sm font-semibold"
    >
      {{ footer }}
    </av-card-footer>
    <slot />
  </div>
</template>

<script>
import AvCardTitle from './AvCardTitle.vue';
import AvCardContent from './AvCardContent.vue';
import AvCardSubtitle from './AvCardSubtitle.vue';
import AvCardFooter from './AvCardFooter.vue';

export default {
  name: 'AvCard',
  components: {
    AvCardTitle, AvCardSubtitle, AvCardContent, AvCardFooter,
  },
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    content: { type: String, default: '' },
    footer: { type: String, default: '' },
  },
  methods: {
    isPropProvided(prop) {
      return this[prop].length > 0;
    },
  },
};
</script>
