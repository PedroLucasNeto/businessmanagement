<template>
  <div class="min-h-screen bg-base-200 p-4 space-y-8">
    <DashboardSummary />
    <RecentActivities />
  </div>
</template>

<script setup>
import DashboardSummary from '../../components/DashboardSummary.vue'
import RecentActivities from '../../components/RecentActivities.vue'
</script>
