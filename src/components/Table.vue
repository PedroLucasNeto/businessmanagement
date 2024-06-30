<template>
  <div class="flex flex-col items-center min-w-92 gap-4 max-w-screen" :class="tableHeight">
    <div class="overflow-x-auto">
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
            <tr class="bg-base-200" v-for="(item, index) in paginatedData" :key="index">
              <td v-for="(field, key, index) in tableFields" :key="index">
                <span>{{ processValue(field.type, item[field.value]) }}</span>
              </td>
              <td>
                <button @click="editItem(item)">
                  <fa class="cursor-pointer p-2" icon="fa-solid fa-pen-to-square" />
                </button>
                <button @click="deleteItem(item)">
                  <fa class="cursor-pointer p-2" icon="fa-solid fa-trash" />
                </button>
                <button @click="retrieveItem(item)">
                  <fa class="cursor-pointer p-2" icon="fa-solid fa-eye" />
                </button>
              </td>
            </tr>
          </tbody>
        </slot>
      </table>
    </div>

    <div class="flex justify-between w-full">
      <div></div>

      <slot name="pagination">
        <div class="join">
          <button class="join-item btn focus:text-primary" v-for="page in totalPages" :key="page"
            @click="goToPage(page)">
            {{ page }}
          </button>
        </div>
      </slot>

      <div class="flex flex-row items-center gap-4">
        <label for="perPage">Itens por página:</label>
        <select id="perPage" class="select select-bordered select-sm max-w-xs" v-model.number="perPage">
          <option>5</option>
          <option>15</option>
          <option>30</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineModel, watch } from 'vue'

const editItem = defineModel('editItem', {
  type: Function
})
const deleteItem = defineModel('deleteItem', {
  type: Function
})
const retrieveItem = defineModel('retrieveItem', {
  type: Function
})

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

function processValue (type, value) {
  if (!value || !type) return ''
  if (type === 'date') return new Date(value).toLocaleDateString()
  if (type === 'dateTime') return new Date(value).toLocaleString()
  if (type === 'money') return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  return value
}
</script>

<style scoped></style>
