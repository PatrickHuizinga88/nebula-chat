<script setup>
import { Loader2Icon } from 'lucide-vue-next'
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

definePageMeta({
  layout: 'authentication',
})

const supabase = useSupabaseClient()

const email = ref('')
const loading = ref(false)
const error = ref('')
const emailSent = ref(false)

const formSchema = toTypedSchema(z.object({
  email: z.string().min(2).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async values => {
  try {
    loading.value = true

    const { error } = await supabase.auth.signInWithOtp({
      email: values.email,
      options: {
        emailRedirectTo: 'http://localhost:3000/confirm',
      }
    })
    if (error) {
      throw new Error(error.message)
    }
    emailSent.value = true
  } catch (error) {
    throw new Error(error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col justify-between items-center gap-y-5 mb-12">
      <img src="../assets/images/logomark.svg" alt="Logo" class="h-8"/>
      <h1 class="text-3xl font-bold">Welcome to Nebula</h1>
    </div>
    <form v-if="!emailSent" @submit="onSubmit" class="flex flex-col space-y-6">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="example@domain.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" :disabled="loading">
        Send link
        <Loader2Icon v-if="loading" class="animate-spin h-4 w-4 ml-2"/>
      </Button>
    </form>
    <template v-else>
      <p class="text-xl font-semibold mb-6">E-mail sent to {{ email }}.</p>
      <p class="text-sm">Didn't receive an email? <Button variant="link" size="sm" @click="handleSubmit">Resend</Button></p>
    </template>
  </div>
</template>