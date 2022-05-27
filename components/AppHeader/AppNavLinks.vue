<template lang="">
  <ul class="flex items-center">
    <Link class="mr-5"> my netWork </Link>
    <Link class="mr-5"> my netWork two </Link>
    <Link>
      <Avatar
        src="https://avatars.githubusercontent.com/u/78520766?v=4"
        size="sm"
        class="rounded"
      />
    </Link>
    <Button>
       icon
    </Button>
    <Link>
    <span class="mdi mdi-car-lifted-pickup"> </span>
    </Link>
  </ul>
</template>
<script>
import Link from '~/components/UIElement/Link.vue'
import Avatar from '~/components/UIElement/Avatar.vue'
import Button from '~/components/UIElement/Button.vue'
export default {
  name: 'AppNavLinks',
  components: {
    Link,
    Avatar,
    Button,
  },
}
</script>
<style lang=""></style>
