<template lang="">
  <div class="md:rounded">
    <div class="short-profile">
      <div class="short-profile-avatar">
        <Avatar
          alt="profile pic"
          size="md"
        />
      </div>
      <div class="short-profile-info">
        <h2 class="text-black font-bold hover:text-blue-500 hover:cursor-pointer mt-4">
          Meer Sagor
        </h2>
        <p class="md:text-sm">Web Developer at Webestica</p>
        <p class="md:mt-5">
          I'd love to change the world, but they won’t give me the source code.
        </p>
        <div
          class="short-profile-follow flex items-center justify-between text-center"
        >
          <div class="p-2.5">
            <h3 class="md:text-black md:font-normal">230</h3>
            <p class="md:text-sm">posts</p>
          </div>
          <div class="border-x-2 border-slate-200 p-2.5">
            <h3 class="md:text-black md:font-normal">2.5K</h3>
            <p class="md:text-sm">Followers</p>
          </div>
          <div class="p-2.5">
            <h3 class="md:text-black md:font-normal">365</h3>
            <p class="md:text-sm">Following</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from '~/components/UIElement/Avatar.vue'
export default {
  name: 'ShortProfile',
  components: {
    Avatar,
  },
}
</script>
<style lang=""></style>
