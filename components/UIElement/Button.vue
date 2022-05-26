<template lang="">
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Button",
    props:{
        icon:{
            type: String,
            require: false,
            default: null
        },
        background:{
            type: String,
            require: false,
            default: null
        }
    }
}
</script>
<style lang="">
    
</style>