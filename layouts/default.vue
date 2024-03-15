<script setup>
import {MessageSquareTextIcon, FileTextIcon, SettingsIcon, PlusIcon, ArrowRightIcon, LogOutIcon} from 'lucide-vue-next';

const user = {
  name: 'John Doe',
  avatar: 'https://via.placeholder.com/150'
}
</script>

<template>
  <div>
    <aside>
      <div>
        <img src="" alt="Logo"/>
      </div>
      <nav>
        <div>
          <div>Algemeen</div>
          <ul>
            <li>
              <NuxtLink to="/">
                <MessageSquareTextIcon/>
                Chat
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <FileTextIcon/>
                Documenten
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <SettingsIcon/>
                Instellingen
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <div>Chat geschiedenis</div>
          <ul>
            <li v-for="chat in history">
              <NuxtLink to="/chat">
                {{ chat.summary }}
              </NuxtLink>
            </li>
          </ul>
          <button>Bekijk alles</button>
          <button>
            Nieuwe chat
            <PlusIcon/>
          </button>
        </div>
      </nav>
      <div>
        <a href="mailto:test@test.com">
          <div>
            Heb je feedback?
            Neem contact op
          </div>
          <ArrowRightIcon/>
        </a>
        <div>
          <div>
            <div>
              <img :src="user.avatar" :alt="user.name">
            </div>
            {{ user.name }}
          </div>
          <button>
            <LogOutIcon/>
          </button>
        </div>
      </div>
    </aside>
    <main>
      <slot/>
    </main>
  </div>
</template>