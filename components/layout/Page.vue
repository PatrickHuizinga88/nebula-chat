<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="h-full px-4 sm:px-8 lg:px-12 pt-6 pb-10">
    <h1 class="text-3xl font-bold leading-none">{{ title }}</h1>
    <slot/>
  </div>
</template>

<style scoped>

</style>