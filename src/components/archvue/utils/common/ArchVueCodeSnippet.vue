<template>
  <pre><code :class="`language-${language}`"><slot /></code></pre>
</template>

<script>

export default {
  name: 'ArchVueCodeSnippet',
  props: {
    language: {
      type: String,
      default: 'html',
    },
  },
};
</script>
