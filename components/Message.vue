<script setup lang="ts">
import {BotIcon} from "lucide-vue-next";

defineProps<{
  message: {
    role: string
    content: string
  }
}>()
</script>

<template>
  <div v-if="message.role === 'user'" class="flex justify-end ml-[52px]">
    <div class="max-w-2xl border border-border rounded-lg leading-relaxed px-4 py-3">
      {{ message.content }}
    </div>
    <Avatar src="#" class="shrink-0 ml-3"/>
  </div>
  <div v-else class="flex justify-start mr-[52px]">
    <div class="flex justify-center items-center shrink-0 bg-muted rounded-full h-10 w-10 mr-3">
      <BotIcon class="h-6 w-6 text-primary"/>
    </div>
    <div class="max-w-2xl bg-muted border border-border rounded-lg leading-relaxed px-4 py-3">
      {{ message.content }}
    </div>
  </div>
</template>

<style scoped>

</style>