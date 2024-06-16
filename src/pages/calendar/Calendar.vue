<template>
  <FullCalendar v-if="allEvents.length > 0" :options="calendarOptions" class="w-full h-screen md:h-full" />
  <Loading v-if="isLoading" />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import bookingService from '@/api/services/bookingService'
import eventsService from '@/api/services/eventsService'
import Loading from '@/components/Loading.vue'
import { useGlobalStore } from '@/stores/globalStore'

const globalStore = useGlobalStore()

const isMobile = ref(window.innerWidth < 768)

const isLoading = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const bookings = ref([])
const events = ref([])

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
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
  events: allEvents.value
}))

function handleDateClick (arg) {
  alert('date click! ' + arg.dateStr)
}

async function getEvents () {
  const eventsFromDb = await eventsService.getAllEvents()
  if (!eventsFromDb) return
  events.value = eventsFromDb.map((event) => {
    return {
      ...event
    }
  })
}

async function getBookings () {


  const bookingsFromDb = await bookingService.getAllBookings()
  if (!bookingsFromDb) return
  bookings.value = bookingsFromDb.map((booking) => {
    return {
      ...booking
    }
  });
}

const allEvents = computed(() => {
  isLoading.value = true;
  if (!bookings.value.length && !events.value.length) return []

  const mergedEvents = [...bookings.value, ...events.value];

  const formattedEvents = mergedEvents.map((event) => {
    let formattedEvent;
    if (event.hasOwnProperty("photoShootDate")) {
      formattedEvent = {
        id: event.id,
        title: event.client.name,
        date: event.photoShootDate.toString(),
        start: event.photoShootDate.toString(),
        extendedProps: {
          eventType: "booking",
          duration: event.pricing.duration,
          pricing: event.pricing.description.toUpperCase(),
          notes: event.notes,
          category: event.category.description.toUpperCase(),
        },
        end: calculateEndDate(event.photoShootDate, event.pricing.duration),
        color: getColorFromPricing(event.pricing.description.toUpperCase()),
        backgroundColor: getColorFromPricing(event.pricing.description.toUpperCase()),
        textColor: "black",
      };
    } else {
      formattedEvent = {
        id: event.id,
        title: event.title,
        date: event.date.toString(),
        color: "#bd90a5",
        extendedProps: {
          eventType: "customEvent",
        },
      };
    }
    return formattedEvent;
  });

  isLoading.value = false;
  return formattedEvents;
})

function calculateEndDate (startDate, duration) {
  const date = startDate.toString().split("T")
  const endDate = new Date(date[0] + "T" + date[1])
  let durationInMilliseconds
  if (duration.toString().includes(":")) {
    const [hours, minutes] = duration.split(":").map(Number)
    durationInMilliseconds = hours * 60 * 60 * 1000 + minutes * 60 * 1000
  } else {
    durationInMilliseconds = Number(duration) * 60 * 60 * 1000
  }
  endDate.setTime(endDate.getTime() + durationInMilliseconds)
  return endDate
}

function getColorFromPricing (description) {
  switch (description.toUpperCase()) {
    case "OURO":
      return "#FFD700"
    case "PRATA":
      return "#C0C0C0"
    case "DIAMANTE":
      return "#B9F2FF"
    default:
      return "#FFD700"
  }
}

onBeforeMount(() => {
  getBookings()
  getEvents()
})

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

</script>
