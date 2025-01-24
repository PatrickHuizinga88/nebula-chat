<script setup lang="ts">
import {ArrowRightIcon, FileTextIcon, LogOutIcon, MessageCircleIcon, PlusIcon, SettingsIcon} from "lucide-vue-next"

const user = {
  name: 'John Doe',
  avatar: '#',
}

const navigation = [
  { label: 'Chat', href: '/', icon: MessageCircleIcon,  },
  { label: 'Documenten', href: '/documents', icon: FileTextIcon },
  { label: 'Instellingen', href: '/settings', icon: SettingsIcon },
]

const history = [
  { id: 1, summary: 'Hoe maak ik een Figma design?' },
  { id: 2, summary: 'Werken AI chatbots echt?' },
  { id: 3, summary: 'Wordt alle data veilig verwerkt?' },
  { id: 4, summary: 'Waarom zijn bananen krom?' },
  { id: 5, summary: 'Is AI de toekomst?' },
  { id: 6, summary: 'Kan mijn baas zien wat ik hier in typ?' },
]
</script>

<template>
  <aside class="hidden lg:flex lg:w-72 lg:flex-col lg:shrink-0">
    <div class="flex grow flex-col overflow-y-auto border-r border-border p-6">
      <div class="shrink-0 mb-12">
        <img src="../../assets/images/logo-dark.svg" alt="Logo" class="h-8 w-auto"/>
      </div>
      <nav class="space-y-12">
        <div>
          <div class="text-xs font-semibold text-muted-foreground mb-3">Algemeen</div>
          <ul class="flex flex-1 flex-col space-y-3 font-medium text-sm">
            <li v-for="item in navigation">
              <NuxtLink :to="item.href" class="flex items-center h-9 rounded-lg hover:bg-muted duration-300" activeClass="bg-muted">
                <div class="p-2 rounded-lg bg-muted mr-3">
                  <component :is="item.icon" class="h-5 w-5"/>
                </div>
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <div class="text-xs font-semibold text-muted-foreground mb-3">Chat geschiedenis</div>
          <ul class="flex flex-1 flex-col font-medium text-sm mb-3">
            <li v-for="chat in history">
              <NuxtLink :to="`/${chat.id}`" class="flex items-center h-9 rounded-lg hover:bg-muted duration-300 px-2">
                  <span class="overflow-hidden text-ellipsis whitespace-nowrap">
                    {{ chat.summary }}
                  </span>
              </NuxtLink>
            </li>
          </ul>
          <Button variant="outline" class="w-full mb-3">Bekijk alles</Button>
          <Button class="w-full">
            Nieuwe chat
            <PlusIcon class="h-4 w-4 ml-2"/>
          </Button>
        </div>
      </nav>
      <div class="mt-auto space-y-6">
        <a href="mailto:test@test.com" class="group flex justify-between items-center bg-gradient-to-br from-primary to-secondary text-primary-foreground text-sm rounded-lg p-4">
          <div>
            <span class="block font-semibold mb-1">Heb je feedback?</span>
            Neem contact op
          </div>
          <ArrowRightIcon class="h-6 w-6 group-hover:translate-x-0.5 duration-100 ease-in"/>
        </a>
        <div class="flex justify-between items-center">
          <div class="flex items-center font-medium text-sm">
            <Avatar :src="user.avatar" :alt="user.name" class="h-10 w-10 mr-3"/>
            {{ user.name }}
          </div>
          <Button variant="ghost" size="icon">
            <LogOutIcon class="h-4 w-4"/>
          </Button>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>

</style>