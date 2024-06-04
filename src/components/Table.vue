<template>
  <div class="flex flex-col items-center min-w-92 gap-4">
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
            <tr class="bg-base-200" v-for="(item, index) in tableData" :key="index">
              <td v-for="(field, index) in tableFields" :key="index">
                <span>{{ item[field.conf] }}</span>
              </td>
              <td>
                <button @click="editItem(item)">
                  <fa class="cursor-pointer p-2 " icon="fa-solid fa-pen-to-square" />
                </button>
                <button @click="deleteItem(item)">
                  <fa class="cursor-pointer p-2 " icon="fa-solid fa-trash" />
                </button>
                <button @click="retrieveItem(item)">
                  <fa class="cursor-pointer p-2 " icon="fa-solid fa-eye" />
                </button>
              </td>
            </tr>
          </tbody>
        </slot>
      </table>
    </div>

    <!-- <slot name="pagination">
      <div class="join">
        <button class="join-item btn">1</button>
        <button class="join-item btn">2</button>
        <button class="join-item btn btn-disabled">...</button>
        <button class="join-item btn">99</button>
        <button class="join-item btn">100</button>
      </div>
    </slot> -->
  </div>
</template>

<script setup>
import { defineModel, onMounted } from 'vue'

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

onMounted(() => {
  console.log(tableData.value)
  console.log(tableFields)
})
</script>

<style scoped></style>