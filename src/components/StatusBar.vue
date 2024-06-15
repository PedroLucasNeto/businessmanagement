<template>
  <div class="flex flex-col md:flex-row shadow-xl shadow-lightblue w-fit">
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
          </path>
        </svg>
      </div>
      <div class="stat-title">Agendamentos</div>
      <div class="stat-value text-primary">{{booking.count}}</div>
      <div class="stat-desc">{{booking.comparedToLastMonth}}% {{booking.comparedToLastMonth >0 ? 'a mais' : 'a menos'}} que o mês passado</div>
    </div>
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div class="stat-title">Orçamentos</div>
      <div class="stat-value text-secondary">{{budget.count}}</div>
      <div class="stat-desc">{{budget.comparedToLastMonth}}% {{budget.comparedToLastMonth >0 ? 'a mais' : 'a menos'}} que o mês passado</div>
    </div>
    <div class="stat">
      <div class="stat-figure text-secondary">
        <div class="avatar online">
          <div class="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      <div class="stat-value">{{goalPercentage}}%</div>
      <div class="stat-title">Meta</div>
      <div class="stat-desc text-secondary">{{goalPercentage >= 100 ? 'Meta alcançada!' : `${bookingRemaining} para alcançar a meta`}}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  booking: {
    type: Object,
    required: true
  },
  budget: {
    type: Object,
    required: true
  },
  goal: {
    type: Number,
    required: true
  }
});

const goalPercentage = computed(() => {
  return (props.booking.count / props.goal) * 100;
});

const bookingRemaining = computed(() =>
    props.goal - props.booking.count
);
</script>

<style scoped></style>
