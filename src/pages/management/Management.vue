<template>
  <div class="flex flex-col gap-4">
    <nav class="flex justify-between p-4 items-center">
      <Breadcrumbs />
    </nav>
    <!-- <CtaImageCard /> -->
    <div class="flex flex-col items-center gap-4 bg-base-200 p-4 h-screen w-full relative">
      <div
        v-if="'/management' !== currentView"
        class="flex justify-between w-full justify-center items-center"
      >
        <button @click="goBack" class="btn btn-sm btn-primary text-neutral-100">
          <fa :icon="'fa-solid fa-arrow-left'" />
        </button>
        <h1 class="font-bold">{{ viewTitle }}</h1>
        <button @click="redirectCreate" class="btn btn-sm btn-success text-neutral-100">
          <fa :icon="'fa-solid fa-plus'" />
        </button>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { componentsList } from '@/utils/componentsList'

const route = useRoute()
const router = useRouter()

const viewTitle = computed(() => {
  const route = useRoute()

  const componentName = route.path.split('/')[2]
  return componentsList.find((item) => item.routeName === componentName)?.name
})

const currentView = computed(() => {
  const route = useRoute()
  return route.path
})

function redirectCreate() {
  router.push(`${route.path}/create`)
}

function goBack() {
  router.go(-1)
}
</script>

<style scoped></style>
