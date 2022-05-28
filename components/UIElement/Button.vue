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
    <span v-if="icon" :class="iconName" />
    <slot></slot>
  </button>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
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
