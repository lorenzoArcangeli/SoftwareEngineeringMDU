import { writable, get} from "svelte/store";

//Change form
export const form = writable('first');

//FORM 1 "first"
export const form_one = writable({
    "dishname": "",
    "origin": "",
    "meals": ['breakfast', 'brunch', 'lunch', 'dinner', 'coffe/tea time'],
    "occasions": ['Daily/normal', 'Birthday', 'Wedding', 'Christmas', 'New year', 'Easter', 'Halloween', 'National day', 'Other festival'],
    "occasion": "Daily/normal",
    "meal": "breakfast"
})

//FORM 2 "second"
export const form_two = writable({
    "eventName": "",
    "location": "",
    "price": 0,
    "description": "",
    "menu": "",
    "currency": "SEK",
    "hours": "1",
    "capacity": "1",
})


//FORM 3 "third"
export const form_three = writable({
    "agenda": "",
    "photo": false,
    "walking": false,
    "smoking": false,
    "kids":false,
    "pet": false,
    "alcohol": false,
    "dateStart": "",
    "dateEnd": "",
    "start": "",
})
