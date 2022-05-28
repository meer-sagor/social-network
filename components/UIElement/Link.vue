<template>
  <nuxt-link :to="to" class="md:flex md:items-center hover:text-blue-500">
    <Icon v-if="icon" :icon="iconName" class="md:mr-3 text-lg" />
    <slot></slot>
  </nuxt-link>
</template>
<script>
import { Icon } from '@iconify/vue2'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Link',
  components: { Icon },
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
