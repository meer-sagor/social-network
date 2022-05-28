<template lang="">
  <button
    class="button"
    :class="
      backgroundType === 'gray'
        ? 'button-gray'
        : null || backgroundType === 'lightBlue'
        ? 'button-light-blue'
        : null || backgroundType === 'primary'
        ? 'button-primary'
        : null || backgroundType === 'danger'
        ? 'button-danger'
        : null || backgroundType === 'primary-outline'
        ? 'button-primary__outline'
        : null
    "
  >
    <Icon v-if="icon" :icon="iconName" class="mr-2 text-lg" />
    <slot></slot>
  </button>
</template>
<script>
import { Icon } from '@iconify/vue2'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  components: { Icon },
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: null,
    },
    background: {
      type: Boolean,
      default: false,
    },
    backgroundType: {
      type: String,
      default: 'gray',
    },
  },
}
</script>
<style lang=""></style>
