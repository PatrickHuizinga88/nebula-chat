<script setup>
import { Loader2Icon } from 'lucide-vue-next'

definePageMeta({
  layout: 'authentication',
})

const user = useSupabaseUser()
const error = ref('')

watch(user, () => {
  if (user.value) {
    return navigateTo('/')
  }
  error.value = 'Verification failed, please try again.'
}, { immediate: true })
</script>

<template>
  <div v-if="!error" class="flex items-center justify-center w-full">
    <Loader2Icon class="text-primary animate-spin h-6 w-6"/>
    <span class="sr-only">Waiting to verify...</span>
  </div>
  <div v-else class="flex items-center justify-center w-full">
    <p class="text-muted-foreground">{{ error }}</p>
    <Button as-child>
      <NuxtLink to="/login">Try again</NuxtLink>
    </Button>
  </div>
</template>