<template>
  <section class="flex justify-between items-start">
    <aside class="md:w-1/3">
      <LeftAside/>
    </aside>
    <div class="md:w-full md:mx-7">
      <Feeds/>
    </div>
    <div class="md:w-1/3  md:rounded-md md:p-4 bg-white">
      <RightAside/>
    </div>

  </section>
</template> 

<script>
export default {
  name: 'IndexPage',
}
</script>
