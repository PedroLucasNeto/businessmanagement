<template>
  <div class="p-4 bg-base-200">
    <div class="card bg-base-100 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Recent Activities</h2>
        <ul class="list-none p-0">
          <li v-for="activity in recentActivities" :key="activity.id" class="mb-2 border-b pb-2">
            <div class="flex justify-between">
              <span class="font-semibold">{{ activity.title }}</span>
              <span class="text-sm text-gray-500">{{ formatDate(activity.date) }}</span>
            </div>
            <p class="text-gray-600">{{ activity.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const recentActivities = ref([]);

const fetchRecentActivities = async () => {
  // Fetch the recent activities from your API
  // Example:
  const data = await fetch('/api/recent-activities').then(res => res.json());
  recentActivities.value = data;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
};

onMounted(() => {
  fetchRecentActivities();
});
</script>

<style scoped>
.card-title {
  font-size: 1.5rem;
}
</style>
