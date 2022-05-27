<template lang="">
  <nav class="md:px-4 md:pb-4">
    <ul class="mb-4">
      <li class="py-1"><Link to="/">Feed</Link></li>
      <li class="py-1">
        <Link to="/">Connections</Link>
      </li>
      <li class="py-1"><Link to="/">Latest News</Link></li>
      <li class="py-1"><Link to="/">Events</Link></li>
      <li class="py-1"><Link to="/">Group</Link></li>
      <li class="py-1"><Link to="/">Notifications</Link></li>
      <li class="py-1"><Link to="/">Settings</Link></li>
    </ul>
    <Link class="text-blue-500 md:border-t md:pt-3 md:flex md:justify-center">View Profile</Link>
  </nav>
</template>
<script>
import Link from '~/components/UIElement/Link.vue'
export default {
  name: 'AsideNav',
  components: {
    Link,
  },
}
</script>
<style lang=""></style>
