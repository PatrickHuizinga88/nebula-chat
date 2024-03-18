<script setup>
import { useChat } from 'ai/vue';
import { BotIcon, Loader2Icon, SendIcon, PlusCircleIcon } from "lucide-vue-next";
import Message from "~/components/Message.vue";

const suggestions = [
  { id: 1, content: 'Vertel mij meer over persoon ...' },
  { id: 2, content: 'Wat is de relatie tussen persoon ... en ...?' },
  { id: 3, content: 'Welke gebeurtenis vond plaats op datum ...?' },
  { id: 4, content: 'Welke gebeurtenis vond plaats op datum ...?' },
  { id: 5, content: 'Welke gebeurtenis vond plaats op datum ...?' },
]

const {messages, input, handleSubmit} = useChat()
const chatInput = ref(null)
const extendSuggestions = ref(false)
const loading = ref(false)

const filteredSuggestions = computed(() => {
  return suggestions.slice(0, 3)
})

const selectSuggestions = (suggestion) => {
  input.value = suggestion

  if (chatInput.value) {
    console.log(chatInput.value)
    chatInput.value.focus()
  }
}
</script>

<template>
    <div class="h-full flex flex-col">
      <div class="flex-1 overflow-auto">
        <div class="w-full sm:max-w-4xl mx-auto h-full pt-6">
          <div v-if="messages.length" class="h-full flex flex-col gap-y-6">
            <Message :message="message" v-for="message in messages" :key="message.id"/>
          </div>
          <div v-else class="h-full flex flex-col justify-center items-center text-center">
            <div class="bg-muted rounded-full p-4 mb-6">
              <BotIcon class="h-12 w-12 text-primary"/>
            </div>
            <h1 class="text-2xl font-bold mb-3">
              Hallo, John!<br />
              Ik ben jouw persoonlijke assistent.
            </h1>
            <p class="text-muted-foreground max-w-sm">
              Stel me een vraag over X, Y of Z en ik zal je proberen zo goed mogelijk te helpen.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full sm:max-w-4xl mx-auto my-6">
        <div class="flex flex-col mb-2 sm:mb-0">
          <div class="text-sm font-semibold text-muted-foreground mb-2">Suggesties</div>
          <div class="flex sm:flex-wrap overflow-x-auto">
            <ScrollArea>
              <div class="flex sm:flex-wrap gap-2 mb-3">
                <Button
                    v-for="suggestion in (extendSuggestions ? suggestions : filteredSuggestions)"
                    @click="selectSuggestions(suggestion.content)"
                    variant="muted"
                    size="sm"
                    class="rounded-full h-7 px-3">
                  {{ suggestion.content }}
                </Button>
                <Button
                    v-if="suggestions.length > 3 && !extendSuggestions"
                    @click="extendSuggestions = true"
                    variant="outline"
                    size="sm"
                    class="text-muted-foreground rounded-full h-7 px-3">
                  <PlusCircleIcon class="h-4 w-4"/>
                </Button>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <form @submit="handleSubmit" class="flex gap-x-3">
          <Input
              type="text"
              v-model="input"
              placeholder="Waar kan ik je mee helpen?"
              class="text-base"
          />
          <Button type="submit" size="icon" :disabled="loading" class="shrink-0">
            <SendIcon v-if="!loading" class="h-4 w-4" />
            <Loader2Icon v-else class="animate-spin h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
</template>