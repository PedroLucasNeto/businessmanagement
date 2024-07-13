<template>
  <div>
    <div v-if="globalStore.tableBusy">
      <span class="loading loading-spinner loading-lg text-success"></span>
    </div>
    <div v-else class="flex flex-col items-center min-w-92 gap-4 max-w-full shadow-xl mt-4 p-4 bg-base-100 "
      :class="tableHeight">
      <div class="overflow-x-auto w-full">
        <table class="table">
          <slot name="tableHead">
            <thead>
              <tr>
                <th v-for="(item, index) in tableFields" :key="index">
                  {{ item.label }}
                </th>
              </tr>
            </thead>
          </slot>
          <slot name="tableBody">
            <tbody>
              <tr class="hover:bg-base-300" v-for="(item, index) in paginatedData" :key="index">
                <td v-for="(field, key, index) in tableFields" :key="index">
                  <span>{{ processValue(field.type, item[field.value]) }}</span>
                </td>
                <td>
                  <button @click="deleteItem(item)">
                    <fa class="cursor-pointer p-2" icon="fa-solid fa-trash"  :class="tableIconColor.delete"/>
                  </button>
                  <button @click="retrieveItem(item)">
                    <fa class="cursor-pointer p-2" icon="fa-solid fa-eye"  :class="tableIconColor.retrieve"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </slot>
        </table>
      </div>

      <div class="flex flex-col lg:flex-row justify-between w-full items-center ">
        <slot name="pagination">
          <div class="join mx-auto ">
            <button class="join-item btn focus:text-primary" v-for="page in totalPages" :key="page"
              @click="goToPage(page)">
              {{ page }}
            </button>
          </div>
        </slot>

        <div class="flex flex-row items-center gap-4">
          <label for="perPage">Qtd por página:</label>
          <select id="perPage" class="select select-bordered select-sm max-w-xs" v-model.number="perPage">
            <option>5</option>
            <option>15</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineModel, watch } from 'vue'
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import {processValue} from '@/utils/utilMethods'

const router = useRouter()
const globalStore = useGlobalStore()

const editItem = defineModel('editItem', {
  type: Function
})
const deleteItem = defineModel('deleteItem', {
  type: Function
})

function retrieveItem (item){
  const path = `${router.currentRoute.value.path}/retrieve/${item.id}`
  router.push({ path })
}

const tableData = defineModel('tableData', {
  type: Array,
  required: true
})
const tableFields = defineModel('tableFields', {
  type: Array,
  required: true
})
const perPage = defineModel('perPage', {
  type: Number,
  required: true
})
const quantity = defineModel('quantity', {
  type: Number,
  required: true
})
const currentPage = defineModel('currentPage', {
  type: Number,
  default: 1,
  required: true
})


const totalPages = computed(() => {
  return Math.ceil(quantity.value / perPage.value)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return tableData.value.slice(start, end)
})

const goToPage = (page) => {
  currentPage.value = page
}

const tableHeight = computed(() => {
  return quantity.value > perPage.value ? 'h-96' : 'h-auto'
})

watch(perPage, () => {
  currentPage.value = 1
})



const tableIconColor = {
  delete: 'text-red-500',
  edit: 'text-blue-500',
  retrieve: 'text-green-500'
}
</script>

<style scoped></style>
