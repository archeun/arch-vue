<template>
  <section class="mb-10 mt-5">
    <h3 class="border-b mb-3">
      <i class="bi bi-arrow-down-right-square-fill" /> {{ title }}
    </h3>

    <p>
      <slot name="description" />
    </p>

    <div>
      <h4><i class="bi bi-arrow-right-short" /> Visualization</h4>
      <div class="p-5 border border-archTeal border-dotted my-5">
        <slot name="visualization" />
      </div>
    </div>

    <div>
      <h4><i class="bi bi-arrow-right-short" /> Code</h4>
      <ArchVueCodeSnippet class="my-5">
        <slot name="code" />
      </ArchVueCodeSnippet>
    </div>
  </section>
</template>

<script>
import ArchVueCodeSnippet from './ArchVueCodeSnippet.vue';

export default {
  name: 'ArchVueComponentDocSection',
  components: {
    ArchVueCodeSnippet,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

h3 {
  @apply text-gray-600 py-2 font-bold text-2xl;
}

h4 {
  @apply text-gray-600 py-2 font-semibold;
}

p {
  @apply py-6;
}

</style>
