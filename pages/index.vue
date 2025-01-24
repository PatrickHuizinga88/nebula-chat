<script setup lang="ts">
import {useChat} from '@ai-sdk/vue';
import {Loader2Icon, SendIcon, PlusCircleIcon} from "lucide-vue-next";

const suggestions = [
  {id: 1, content: 'Vertel mij meer over persoon ...'},
  {id: 2, content: 'Wat is de relatie tussen persoon ... en ...?'},
  {id: 3, content: 'Welke gebeurtenis vond plaats op datum ...?'},
  {id: 4, content: 'Welke gebeurtenis vond plaats op datum ...?'},
  {id: 5, content: 'Welke gebeurtenis vond plaats op datum ...?'},
]

const {messages, input, handleSubmit} = useChat()
const chatInput = ref(null)
const extendSuggestions = ref(false)
const loading = ref(false)

const filteredSuggestions = computed(() => {
  return suggestions.slice(0, 3)
})

const selectSuggestions = (suggestion: string) => {
  input.value = suggestion

  if (chatInput.value) {
    nextTick(() => {
      chatInput.value.focus()
    })
  }
}
</script>

<template>
  <div class="h-full flex flex-col">
    <Messages :messages="messages"/>

    <div class="w-full flex justify-center pb-6 pt-2 shadow-[0_-24px_24px_0_#fff] z-10">
      <div class="w-full sm:max-w-4xl">
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
              <ScrollBar orientation="horizontal"/>
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
            <SendIcon v-if="!loading" class="h-4 w-4"/>
            <Loader2Icon v-else class="animate-spin h-4 w-4"/>
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>