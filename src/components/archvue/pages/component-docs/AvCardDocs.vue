<template>
  <h2 class="text-3xl font-bold">
    Card
  </h2>

  <ArchVueComponentDocSection title="A card with a content">
    <template #description>
      This is the simplest form of the component.
      The Card component exposes the <ArchVueInlineCode>content</ArchVueInlineCode> prop.
      We can pass a simple text value to this prop, so that it will be shown inside the card
      with its default styling.
    </template>
    <template #visualization>
      <div class="flex justify-center">
        <av-card
          content="This is a simple card with some content inside it"
          class="w-80"
        />
      </div>
    </template>
    <template #code>
      {{`      <av-card
        content="This is a simple card with some content inside it"
        class="w-80"
      /> `}}
    </template>
  </ArchVueComponentDocSection>

  <ArchVueComponentDocSection title="A card with a title and a content">
    <template #description>
      The next and the only other prop it exposes is the,
      <ArchVueInlineCode>title</ArchVueInlineCode>.
    </template>
    <template #visualization>
      <div class="flex justify-center">
        <av-card
          title="This is the title"
          content="This is the content"
          class="w-80"
        />
      </div>
    </template>
    <template #code>
      {{`      <av-card
        title="This is the title"
        content="This is the content"
        class="w-80"
      />`}}
    </template>
  </ArchVueComponentDocSection>

  <ArchVueComponentDocSection title="Using slots instead of props">
    <template #description>
      It is also possible to use the,
      <ArchVueInlineCode>av-card-title</ArchVueInlineCode>
      and <ArchVueInlineCode>av-card-content</ArchVueInlineCode> components
      to define the title and the content with any DOM structure as you want.
      This enables us to freely style those two components as we wish.
      The Card component will not apply any assumed styles.
    </template>
    <template #visualization>
      <div class="flex justify-center">
        <av-card class="w-80">
          <av-card-title class="font-bold text-archRed px-4 pt-4 text-2xl underline">
            My title with <em>rich styles</em>
          </av-card-title>
          <av-card-content class="p-4">
            <p class="text-center">
              We can provide our own layout for the content
            </p>
            <div class="grid grid-cols-3 gap-4 pb-6">
              <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
              <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
              <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
            </div>
            <div class="mb-4 border-b-2 font-bold">
              Description
            </div>
            <p class="bg-archTealDark text-white p-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis dui,
              tempor habitasse cras leo justo ac aenean et primis, etiam varius
              at conubia feugiat egestas suspendisse litora. Magnis lectus interdum cras leo
            </p>
          </av-card-content>
        </av-card>
      </div>
    </template>
    <template #code>
      {{`      <av-card class="w-80">
        <av-card-title class="font-bold text-archRed px-4 pt-4 text-2xl underline">
          My title with <em>rich styles</em>
        </av-card-title>
        <av-card-content class="p-4">
          <p class="text-center">
            We can provide our own layout for the content
          </p>
          <div class="grid grid-cols-3 gap-4 pb-6">
            <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
            <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
            <div class="boder bg-archTeal text-white justify-evenly font-bold w-full h-16" />
          </div>
          <div class="mb-4 border-b-2 font-bold">
            Description
          </div>
          <p class="bg-archTealDark text-white p-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis dui,
            tempor habitasse cras leo justo ac aenean et primis, etiam varius
            at conubia feugiat egestas suspendisse litora. Magnis lectus interdum cras leo
          </p>
        </av-card-content>
      </av-card>`}}
    </template>
  </ArchVueComponentDocSection>
</template>

<script>

import AvCard from '../../../card/AvCard.vue';
import AvCardTitle from '../../../card/AvCardTitle.vue';
import ArchVueInlineCode from '../../utils/common/ArchVueInlineCode.vue';
import ArchVueComponentDocSection from '../../utils/common/ArchVueComponentDocSection.vue';
import AvCardContent from '../../../card/AvCardContent.vue';

export default {
  name: 'AvCardDocs',
  components: {
    AvCard,
    AvCardTitle,
    ArchVueInlineCode,
    ArchVueComponentDocSection,
    AvCardContent,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    hljs.highlightAll();
  },
};
</script>
