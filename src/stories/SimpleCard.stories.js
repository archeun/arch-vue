import SimpleCard from '../components/SimpleCard.vue';

export default {
  title: 'archeun/SimpleCard',
  component: SimpleCard,
  argTypes: {
    theme: { control: { type: 'select', options: ['light', 'dark'] } },
  },
};

const Template = (args) => ({
  components: { SimpleCard },
  setup() {
    return { args };
  },
  template: '<simple-card v-bind="args" />',
});

export const LightTheme = Template.bind({});
LightTheme.args = {
  title: 'This is the light theme',
  theme: 'light',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  title: 'This is the dark theme',
  theme: 'dark',
};
