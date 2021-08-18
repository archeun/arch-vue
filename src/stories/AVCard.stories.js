import AvCard from '../components/AvCard.vue';

export default {
  title: 'archeun/Card',
  component: AvCard,
  argTypes: {
    theme: { control: { type: 'select', options: ['light', 'dark'] } },
  },
};

const Template = (args) => ({
  components: { AvCard },
  setup() {
    return { args };
  },
  template: '<av-card v-bind="args" />',
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
