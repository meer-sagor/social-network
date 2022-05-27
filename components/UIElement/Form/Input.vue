<template lang="">
  <div class="form-group">
    <label :id="id"> {{ label }} </label>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :require="require"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Input',
  props: {
    id: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    require: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang=""></style>
