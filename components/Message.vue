<script setup lang="ts">
import {BotIcon} from "lucide-vue-next";

defineProps<{
  message: {
    role: string
    content: string
  },
  // loading?: boolean,
}>()
</script>

<template>
  <div v-if="message.role === 'user'" class="flex justify-end ml-[52px]">
    <div class="max-w-2xl border border-border rounded-lg leading-relaxed px-4 py-2">
      {{ message.content }}
    </div>
    <Avatar src="#" class="shrink-0 ml-3"/>
  </div>
  <div v-else class="flex justify-start mr-[52px] pb-8">
    <div class="flex justify-center items-center shrink-0 bg-muted rounded-full h-10 w-10 mr-3">
      <BotIcon class="h-6 w-6 text-primary"/>
    </div>
<!--    <div v-if="loading" class="w-[320px] h-10 bg-muted rounded-lg animate-pulse"></div>-->
    <div class="max-w-2xl bg-muted border border-border rounded-lg leading-relaxed px-4 py-2">
      {{ message.content }}
    </div>
  </div>
</template>

<style scoped>

</style>