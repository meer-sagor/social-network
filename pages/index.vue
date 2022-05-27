<template>
  <section class="flex justify-between items-start">
    <aside class="md:w-1/3 sticky top-0">
      <LeftAside/>
    </aside>
    <div class="md:w-full md:mr-7 md:ml-7 bg-gray-600">
      story
    </div>
    <div class="md:w-1/3  md:rounded-md md:p-4 bg-gray-800">
      right aside
    </div>

  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
