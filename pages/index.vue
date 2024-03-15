<script setup>
import {useChat} from 'ai/vue';

const {messages, input, handleSubmit} = useChat()
</script>

<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      {{ message.role === 'user' ? 'User: ' : 'AI: ' }}
      {{ message.content }}
    </div>

    <form @submit="handleSubmit">
      <input
          v-model="input"
          placeholder="Say something..."
      >
    </form>
  </div>
</template>