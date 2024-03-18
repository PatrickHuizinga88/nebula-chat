<template>
  <ol v-if="breadcrumbs.length" class="flex items-center space-x-3 text-gray-500">
    <li v-for="(crumb, index) in breadcrumbs">
      <div class="flex items-center">
        <NuxtLink
            :to="crumb.link"
            :class="[
                {'hover:text-muted-foreground' : crumb.link},
                {'font-medium' : index === breadcrumbs.length - 1},
                {'mr-3': breadcrumbs.length > 1},
                'first-letter:capitalize'
            ]">
          {{ t(crumb.title) }}
        </NuxtLink>
        <svg v-if="index !== breadcrumbs.length - 1" class="h-5 w-5 flex-shrink-0 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
const { t } = useI18n()

const breadcrumbs = computed(() => {
  const fullPath = useRoute().fullPath
  const params = fullPath.startsWith('/')
      ? fullPath.substring(1).split('/')
      : fullPath.split('/')
  const crumbs: any[] = []

  let path = ''

  params.forEach(param => {
    path = `${path}/${param}`
    const isCurrentRoute = path === useRoute().path

    if (path === '/') {
      param = 'chat'
    }

    crumbs.push({
      title: param.replace(/-/g, ' '),
      link: isCurrentRoute ? undefined : path
    })
  })

  return crumbs
})
</script>

<style scoped>

</style>