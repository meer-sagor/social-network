<template>
  <nuxt-link :to="to" class="md:flex md:items-center hover:text-blue-500">
    <span v-if="icon" class="md:mr-3" :class="iconName"></span>
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Link',
  props: {
    to: {
      type: [String, Object],
      default: '/',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
  },
}
</script>
