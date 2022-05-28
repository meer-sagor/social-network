<template lang="">
  <div class="form-group">
    <label v-if="label" :id="id">
      {{ label }}
      <span v-if="required" :class="required && 'text-red-500'">*</span>
    </label>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
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
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang=""></style>
