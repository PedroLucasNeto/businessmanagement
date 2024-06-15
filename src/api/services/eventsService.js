import { api } from "../index";

async function createEvent(event) {
  try {
    await api.post("/customEvents", event);
  } catch (error) {
    console.log(error)
  }
}


async function getAllEvents() {
  try {
    const {data} = await api.get("/customEvents");
    return data;
  } catch (error) {
    console.log(error)
  }
}


const EventService = {
  createEvent,
  getAllEvents
};

export default EventService;
