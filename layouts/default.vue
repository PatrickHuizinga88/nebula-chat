<script setup>
import {
  MenuIcon,
  SearchIcon
} from 'lucide-vue-next'
</script>

<template>
  <div class="relative flex h-full w-full overflow-hidden">
    <LayoutSidebar />
    <div class="flex flex-1 flex-col h-screen max-w-full overflow-hidden">
      <header class="sticky top-0 w-full bg-background px-6 py-5">
        <div class="flex justify-between items-center">
          <div class="flex">
            <Button variant="ghost" size="icon" class="lg:hidden mr-6">
              <MenuIcon />
            </Button>
            <Breadcrumbs />
          </div>
          <form @sumbit.prevent="handleSubmit">
            <div class="relative w-full max-w-sm items-center">
              <Input id="search" type="text" placeholder="Search..." class="bg-muted border-0 pl-10" />
              <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <SearchIcon class="size-6 text-muted-foreground" />
              </span>
            </div>
          </form>
        </div>
      </header>
      <main class="h-full w-full overflow-auto">
        <slot/>
      </main>
    </div>
  </div>
</template>