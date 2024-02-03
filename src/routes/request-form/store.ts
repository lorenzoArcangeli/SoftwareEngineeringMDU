import { writable } from "svelte/store";

export const form = writable ({
    "location": "",
    "dishOrigin": "",
    "dishName": "",
    "startDate": "",
    "endDate": "",
    "stringSelectedTypeOfMeals": "",
    "selectedSpecialOccasion": "Daily/normal",
    "numberGuests": 1,
    "guestsAge": ["","","","","","","","","",""],

})