<script setup>

</script>

<template>
  <main class="h-screen flex items-center justify-center bg-background sm:bg-muted">
    <div class="relative">
      <div class="hidden sm:block absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-3xl animate-in opacity-40"></div>
      <div class="relative bg-background sm:border sm:border-border sm:rounded-2xl p-10 w-screen max-w-lg">
        <slot/>
      </div>
    </div>
  </main>
</template>