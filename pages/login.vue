<script setup>
import { Loader2Icon } from 'lucide-vue-next'

definePageMeta({
  layout: 'authentication',
})

const supabase = useSupabaseClient()

const email = ref('')
const loading = ref(false)
const error = ref('')
const emailSent = ref(false)

const onSubmit = async () => {
  try {
    loading.value = true

    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: 'http://localhost:3000/confirm',
      }
    })
    if (error) {
      error.value = error.message
      throw error
    }
    emailSent.value = true
  } catch (error) {
    throw new Error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col justify-between items-center gap-y-5 mb-12">
      <img src="../assets/images/logomark.svg" alt="Logo" class="h-8"/>
      <h1 class="text-3xl font-bold">Welcome to Nebula</h1>
    </div>
    <form v-if="!emailSent" @submit.prevent="onSubmit" class="space-y-6">
      <div class="space-y-1.5">
        <Label for="email">Email</Label>
        <Input v-model="email" id="email" type="email" placeholder="example@domain.com" required />
      </div>
      <Button :disabled="loading" class="w-full">
        Send link
        <Loader2Icon v-if="loading" class="animate-spin h-4 w-4 ml-2"/>
      </Button>
    </form>
    <template v-else>
      <p class="text-xl font-semibold mb-6">E-mail sent to {{ email }}.</p>
      <p class="text-sm">Didn't receive an email?
        <Button variant="link" size="sm" @click="onSubmit">
          Resend
          <Loader2Icon v-if="loading" class="animate-spin h-4 w-4 ml-2"/>
        </Button>
      </p>
    </template>
  </div>
</template>