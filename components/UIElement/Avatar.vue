<template lang="">
  <img
    :src="src"
    :alt="alt"
    class="avatar"
    :class="
      size === 'md'
        ? 'avatar-md'
        : '' || size === 'lg'
        ? 'avatar-lg'
        : '' || size === 'sm'
        ? 'avatar-sm'
        : ''
    "
  />
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Avatar',
  props: {
    src: {
      type: String,
      require: false,
      default: null,
    },
    alt: {
      type: String,
      require: false,
      default: null,
    },
    // there are three type of size: sm, lg, md
    size: {
      type: String,
      require: false,
      default: null,
    },
  },
}
</script>
