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

  <ArchVueComponentDocSection
    title="A card with a title, subtitle, content and a footer provided as props"
  >
    <template #description>
      The only other set of props the Card expose is the,
      <ArchVueInlineCode>title</ArchVueInlineCode>,
      <ArchVueInlineCode>subtitle</ArchVueInlineCode>, and the
      <ArchVueInlineCode>footer</ArchVueInlineCode>.
    </template>
    <template #visualization>
      <div class="flex justify-center">
        <av-card
          title="This is the title"
          subtitle="This is the sub title"
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit quam lacus augue ut
          mauris, tincidunt cras rutrum quis ante tempus felis sollicitudin at imperdiet."
          footer="This is the footer"
          class="w-80"
        />
      </div>
    </template>
    <template #code>
      {{`      <av-card
        title="This is the title"
        subtitle="This is the sub title"
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit quam lacus augue ut
          mauris, tincidunt cras rutrum quis ante tempus felis sollicitudin at imperdiet."
        footer="This is the footer"
        class="w-80"
      />`}}
    </template>
  </ArchVueComponentDocSection>

  <ArchVueComponentDocSection title="Using the directives instead of props">
    <template #description>
      It is possible to provide your own html content as the title and the content.
      In this case, the component does not assume and apply any styles. We have the full
      control over its styles.
    </template>
    <template #visualization>
      <div class="flex justify-center">
        <av-card class="w-80">
          <av-card-title class="px-4 pt-4 text-2xl font-bold">
            This is the title
          </av-card-title>
          <av-card-subtitle class="px-4 pt-2 text-sm text-gray-600">
            This is the sub title
          </av-card-subtitle>
          <av-card-content class="p-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quam lacus augue ut
            mauris, tincidunt cras rutrum quis ante tempus felis sollicitudin at imperdiet."
            footer="This is the footer
          </av-card-content>
          <av-card-footer class="border-t p-2 px-4 text-gray-600 text-sm font-semibold">
            This is the footer
          </av-card-footer>
        </av-card>
      </div>
    </template>
    <template #code>
      {{ `      <av-card class="w-80">
        <av-card-title class="px-4 pt-4 text-2xl font-bold">
          This is the title
        </av-card-title>
        <av-card-subtitle class="px-4 pt-2 text-sm text-gray-600">
          This is the sub title
        </av-card-subtitle>
        <av-card-content class="p-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit quam lacus augue ut
          mauris, tincidunt cras rutrum quis ante tempus felis sollicitudin at imperdiet."
          footer="This is the footer
        </av-card-content>
        <av-card-footer class="border-t p-2 px-4 text-gray-600 text-sm font-semibold">
          This is the footer
        </av-card-footer>
      </av-card>` }}
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
import AvCardContent from '../../../card/AvCardContent.vue';
import AvCardSubtitle from '../../../card/AvCardSubtitle.vue';
import AvCardFooter from '../../../card/AvCardFooter.vue';
import ArchVueInlineCode from '../../utils/common/ArchVueInlineCode.vue';
import ArchVueComponentDocSection from '../../utils/common/ArchVueComponentDocSection.vue';

export default {
  name: 'AvCardDocs',
  components: {
    AvCard,
    AvCardTitle,
    AvCardContent,
    AvCardFooter,
    AvCardSubtitle,
    ArchVueInlineCode,
    ArchVueComponentDocSection,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    hljs.highlightAll();
  },
};
</script>
