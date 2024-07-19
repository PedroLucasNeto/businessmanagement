<template>
  <div class="flex flex-col gap-4">
    <nav class="flex justify-between p-4 items-center">
      <Breadcrumbs />
    </nav>
    <!-- <CtaImageCard /> -->
    <div class="flex flex-col items-center gap-4 bg-base-200 p-4 h-screen w-full relative">
      <div class="flex justify-between w-full justify-center items-center">
        <h1 class="font-bold">{{ viewTitle }}</h1>
        <button @click="redirectCreate" class="btn btn-sm btn-success text-neutral-100">
          <fa :icon="'fa-solid fa-plus'" />
        </button>
      </div>
      <RouterView />
    </div>
    {{ currentView }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { componentsList } from '@/utils/componentsList'

const route = useRoute()
const router = useRouter()

const isRouterViewShowing = computed(() => {
  return route.matched.length > 0
})

const viewTitle = computed(() => {
  const route = useRoute()

  return componentsList.find((item) => item.path === route.path)?.name
})

const currentView = computed(() => {
  const route = useRoute()
  console.log(route.path)
  return route.path
})

function redirectCreate() {
  router.push(`${route.path}/create`)
}
</script>

<style scoped></style>
