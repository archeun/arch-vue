import AvCard from '../components/card/AvCard.vue';

export default {
  title: 'archeun/Card',
  component: AvCard,
};

const Template = (args) => ({
  components: { AvCard },
  setup() {
    return { args };
  },
  template: '<av-card v-bind="args"/>',
});

export const ContentOnly = Template.bind({});
ContentOnly.args = {
  content: 'This is a simple card with some plain text content',
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title: 'This is the title',
};

export const ContentAndTitle = Template.bind({});
ContentAndTitle.args = {
  title: 'My Title',
  content: 'This is the content of the card',
};

const ContentLayoutTemplate = (args) => ({
  components: { AvCard },
  setup() {
    return { args };
  },
  template: `<av-card class="w-80 p-5" :title="args.title"><av-card-content class="p-4">
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
</av-card-content></av-card>`,
});
export const ContentLayout = ContentLayoutTemplate.bind({});
ContentLayout.args = {
  title: 'My Title',
  content: 'This is the content of the cardsasas',
};
