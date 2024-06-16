import { api } from '../index'
async function monthlyIncome() {
  try {
    const income = await api.get(`/dashboard/monthlyIncome`)
    return income.data
  } catch (error) {
    throw error
  }
}

async function monthlyOutcome() {
  try {
    const outcome = await api.get(`/dashboard/monthlyOutcome`)
    return outcome.data
  } catch (error) {
    console.log(error)
  }
}

// async function periodIncome(startingDate: number, endingDate: number) {
//  try {
//    const income = await api.get(`/dashboard/periodIncome, ${startingDate}, ${endingDate}`);
//    return income.data;
//  } catch (error) {
//    throw error;
//  }
// }

// async function periodOutcome(startingDate: number, endingDate: number) {
//  try {
//    const outcome = await api.get(`/dashboard/periodOutcome, ${startingDate}, ${endingDate}`);
//    return outcome.data;
//  } catch (error) {
//    throw error;
//  }
// }

async function monthlyBookings() {
  try {
    const bookings = await api.get(`/dashboard/monthlyBookings`)
    return bookings.data
  } catch (error) {
    console.log(error)
  }
}

async function monthlyBudgets() {
  try {
    const budgets = await api.get(`/dashboard/monthlyBudgets`)
    return budgets.data
  } catch (error) {
    console.log(error)
  }
}
async function getTransactionOnCurrentMonth(transactionType) {
  try {
    const { data } = await api.get(`/dashboard/currentMonth?transactionType=${transactionType}`)
    return data
  } catch (error) {
    throw error
  }
}

async function countAndGroupBookingsByMonth() {
  try {
    const { data } = await api.get(`/dashboard/annually-bookings`)
    return data
  } catch (error) {
    throw error
  }
}

async function countAndGroupBudgetsByMonth() {
  try {
    const { data } = await api.get(`/dashboard/annually-budgets`)
    return data
  } catch (error) {
    throw error
  }
}

const dashboardService = {
  monthlyIncome,
  monthlyOutcome,
  // periodIncome,
  // periodOutcome,
  monthlyBookings,
  monthlyBudgets,
  getTransactionOnCurrentMonth,
  countAndGroupBookingsByMonth,
  countAndGroupBudgetsByMonth
}

export default dashboardService
