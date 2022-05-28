<template lang="">
  <nav class="md:px-4 md:pb-4">
    <ul class="mb-4">
      <li class="py-1">
        <Link to="/" :icon="true" icon-name="ant-design:home-filled">Feed</Link>
      </li>
      <li class="py-1">
        <Link :icon="true" icon-name="fa-solid:people-carry" to="/"
          >Connections</Link
        >
      </li>
      <li class="py-1">
        <Link :icon="true" icon-name="emojione:newspaper" to="/"
          >Latest News</Link
        >
      </li>
      <li class="py-1">
        <Link to="/" :icon="true" icon-name="bi:calendar2-event-fill"
          >Events</Link
        >
      </li>
      <li class="py-1">
        <Link
          to="/"
          :icon="true"
          icon-name="healthicons:i-groups-perspective-crowd"
          >Groups</Link
        >
      </li>
      <li class="py-1">
        <Link to="/" :icon="true" icon-name="ic:baseline-notifications"
          >Notifications</Link
        >
      </li>
      <li class="py-1">
        <Link to="/" :icon="true" icon-name="ci:settings-filled">Settings</Link>
      </li>
    </ul>
    <Link class="text-blue-500 md:border-t md:pt-3 md:flex md:justify-center"
      >View Profile</Link
    >
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
