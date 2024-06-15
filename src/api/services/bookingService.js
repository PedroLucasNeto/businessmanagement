import { api } from "../index";

async function createBooking(booking) {
  try {
    await api.post("/bookings", booking);
    toast.success("Ensaio cadastrado com sucesso");
  } catch (error) {
    console.log(error)
  }
}

async function getAllBookings() {
  try {
    const { data } = await api.get("/bookings");
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function getAllBookingsDeactivated() {
  try {
    const { data } = await api.get("/bookings/deactivated");
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function getById(id) {
  try {
    const { data } = await api.get(`/bookings/${id}`);
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function updateBooking(booking) {
  try {
    await api.put('/bookings', booking);
    toast.success("Ensaio atualizado com sucesso");
  } catch (error) {
    console.log(error)
  }
}

// async function completePayment(id) {
//   try {
//     await api.put(`/bookings/complete-payment/${id}`);
//     toast.success("Pagamento concluído com sucesso");
//   } catch (error) {
//     throw error;
//   }
// }

async function deleteBookingById(id) {
  try {
    await api.delete(`/bookings/fromdb/${id}`);
    toast.success("Ensaio excluída com sucesso");
  } catch (error) {
    console.log(error)
  }
}

async function updateBookingDate(id, newStartDate, endDate, duration) {
  try {
    await api.put(`/bookings/date/${id}`, { newStartDate, endDate, duration });
    toast.success("Data do ensaio atualizado com sucesso");
  } catch (error) {
    console.log(error)
  }
}

const bookingService = {
  // completePayment,
  createBooking,
  getAllBookings,
  getById,
  updateBooking,
  deleteBookingById,
  updateBookingDate,
  getAllBookingsDeactivated
};

export default bookingService;
