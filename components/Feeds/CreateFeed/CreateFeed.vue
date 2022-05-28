<template lang="">
  <div class="bg-white rounded-lg p-4">
    <div class="flex items-center">
      <Avatar size="md" class="mr-4 mb-5 rounded-full" />
      <TextArea placeholder="What's on your mind?"/>
    </div>
    <div class="flex items-center justify-between">
      <Button icon-name="akar-icons:image" :icon="true">Image</Button>
      <Button icon-name="akar-icons:video" :icon="true">Video</Button>
      <Button icon-name="bi:calendar2-event-fill" :icon="true">Event</Button>
      <Button icon-name="ri:article-line" :icon="true">Write a article</Button>
    </div>
  </div>
</template>
<script>
import Avatar from '~/components/UIElement/Avatar.vue'
import TextArea from '~/components/UIElement/Form/TextArea.vue'
import Button from '~/components/UIElement/Button.vue'
export default {
  name: 'CreateFeed',
  components: {
    Avatar,
    TextArea,
    Button,
  },
}
</script>
