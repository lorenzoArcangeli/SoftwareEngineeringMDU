import FirstForm from './firstForm.svelte';
import SecondForm from './secondForm.svelte';
import ThirdForm from './thirdForm.svelte';
import { form, form_one, form_two, form_three } from './store';
export async function eventDatabaseConnection(available_start_date: Date,
  availabe_end_date: Date,
  location: string,
  capacity: number,
  guest_price: number,
  type_of_meal: string,
  dishOrigin: string,
  dishName: string,
  name_of_event: string,
  duration: number,
  description: string,
  //in the database is time type
  start_time: string,
  currency: string,
  occasion: string,
  menu: string,
  agenda: string,
  photo: number,
  walking: number,
  smoking: number,
  kids: number,
  pet: number,
  alcohol: number) {
  //the event ID is autoincrement
  const requestData = {
    ID_user: 1,
    available_start_date,
    availabe_end_date,
    location,
    capacity,
    guest_price,
    type_of_meal,
    dishOrigin,
    dishName,
    name_of_event,
    duration,
    description,
    start_time,
    currency,
    occasion,
    menu,
    agenda,
    photo,
    walking,
    smoking,
    kids,
    pet,
    alcohol,
  };

  // Make a POST request to the /insert-event endpoint using fetch
  fetch('api/insert-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}