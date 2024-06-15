<template>
    <FullCalendar :options="calendarOptions" class="w-full h-screen md:h-full"/>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import timeGridPlugin from '@fullcalendar/timegrid'
import bookingService from '@/api/services/bookingService'
  
  const isMobile = ref(window.innerWidth < 768)
  
  const updateIsMobile = () => {
    isMobile.value = window.innerWidth < 768
  }
  
  const bookings = ref([]);
 
  const calendarOptions = computed(() => ({
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin ],
    initialView: 'dayGridMonth',
    dateClick: handleDateClick,
    locale: "pt-br",
    headerToolbar: {
      right: isMobile.value ? "dayGridMonth,timeGridWeek,timeGridDay" : "today prev,next",
      center: "title",
      left: isMobile.value ? "" : "dayGridMonth,timeGridWeek,timeGridDay",
    },
    footerToolbar: {
      right: isMobile.value ? "prev,next" : "",
      left: isMobile.value ? "today" : "",
    },
    buttonText: {
      today: "Data Atual",
      month: "Mês",
      week: "Semana",
      day: "Dia",
    },
    events: [
      { title: 'event 1', date: '2024-06-15' },
      { title: 'event 2', date: '2024-06-12' }
    ]
  }))
  
  function handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  onMounted(() => {
    window.addEventListener('resize', updateIsMobile)

    bookings.value = bookingService.getAllBookings().map((booking)=>{
      return {
        ...booking
      }
    });
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateIsMobile)
  })
  
  </script>
  