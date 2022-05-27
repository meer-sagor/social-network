<template lang="">
  <div class="md:rounded-md bg-white">
    <div class="short-profile__cover--photo" />
    <ShortProfile />
    <AsideNav />
    <!-- <AsideFooter /> -->
  </div>
</template>
<script>
import ShortProfile from '~/components/LeftAside/ShortProfile/ShortProfile.vue'
import AsideNav from '~/components/LeftAside/AsideNav/AsideNav.vue'
// import AsideFooter from '~/components/LeftAside/AsideFooter/AsideFooter.vue'
export default {
  name: 'LeftAside',
  components: {
    ShortProfile,
    AsideNav,
    // AsideFooter,
  },
}
</script>
<style lang=""></style>
