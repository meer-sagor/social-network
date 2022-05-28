import Link from './Link.vue';

export default {
  title: 'Link',
  components: Link
}
const Template = (args, { argTypes }) => ({
  components: {Link},
  props:Object.keys(argTypes),
  template: '<Link v-bind="$props"/>'
})

export const Primary = Template.bind({});
Primary.args = {
    color: 'blue',
    label: "Links",
    size:"md, lg, sm"
};
