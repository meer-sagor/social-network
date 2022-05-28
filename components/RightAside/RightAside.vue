<template lang="">
  <div class="">
    <h3 class="font-bold mb-3">Who Follow You</h3>
    <ul>
      <li class="md:flex md:justify-between md:items-center md:py-1">
        <Link>
          <Avatar size="sm" alt="user name" />
        </Link>
        <p>
          <Link class="text-black">Billy Vasquez</Link>
          <span class="text-sm">News anchor</span>
        </p>
        <Button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition-all"
          >+</Button
        >
      </li>
      <li class="md:flex md:justify-between md:items-center md:py-1">
        <Link>
          <Avatar size="sm" alt="user name" />
        </Link>
        <p>
          <Link class="text-black">Billy Vasquez</Link>
          <span class="text-sm">News anchor</span>
        </p>
        <Button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition-all"
          >+</Button
        >
      </li>
      <li class="md:flex md:justify-between md:items-center md:py-1">
        <Link>
          <Avatar size="sm" alt="user name" />
        </Link>
        <p>
          <Link class="text-black">Billy Vasquez</Link>
          <span class="text-sm">News anchor</span>
        </p>
        <Button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition-all"
          >+</Button
        >
      </li>
      <li class="md:flex md:justify-between md:items-center md:py-1">
        <Link>
          <Avatar size="sm" alt="user name" />
        </Link>
        <p>
          <Link class="text-black">Billy Vasquez</Link>
          <span class="text-sm">News anchor</span>
        </p>
        <Button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition-all"
          >+</Button
        >
      </li>
      <li class="md:flex md:justify-between md:items-center md:py-1">
        <Link>
          <Avatar size="sm" alt="user name" />
        </Link>
        <p>
          <Link class="text-black">Billy Vasquez</Link>
          <span class="text-sm">News anchor</span>
        </p>
        <Button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-500 hover:text-white transition-all"
          >+</Button
        >
      </li>
    </ul>
    <Link class="mt-4">
      <Button
        class="w-full flex items-center justify-center"
        :background="true"
        background-type="primary-outline"
      >
        View more
      </Button>
    </Link>
  </div>
</template>
<script>
import Avatar from '~/components/UIElement/Avatar.vue'
import Link from '~/components/UIElement/Link.vue'
import Button from '~/components/UIElement/Button.vue'
export default {
  name: 'RightAside',
  components: {
    Link,
    Button,
    Avatar,
  },
}
</script>
<style lang=""></style>
