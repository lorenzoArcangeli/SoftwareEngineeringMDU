export type Test = {
    ID: number;
    Name: string;
    photo: Blob;
}


//REAL TYPE


export type Language = {
    language: string;
    ID_user: number;
}


export type MuiscPreference = {
    music: string;
    ID_user: number;
}


export type FavouriteEvent = {
    ID_user: number;
    ID_event: number;
}
export type Credential = {
    ID_user: number;
    email: string;
    password: string;
}
export type Nationality = {
    nationality: string;
    ID_user: number;
}
export type FoodPreference = {
    food: string;
    ID_user: number;
}


export type FavouriteRequest = {
    ID_user: number;
    ID_request: number;
}


export type User = {
    ID: number;
    name: string;
    surname: string;
    profilePhoto: Blob;
    date_of_birth: Date;
    live_in: string;
    description: string;
    accomodation_type: string;
    location: string;
    tenants_number: number;
    kids_number: number;
    gender: string;
}


export type Interest = {
    interest: string;
    ID_user: number;
}


export type Event = {
    ID: number;
    ID_user: number;
    available_start_date: Date;
    availabe_end_date: Date;
    location: string;
    capacity: number;
    joinable_guests: number;
    guest_price: number;
    type_of_meal: string;
    dishOrigin: string;
    dishName: string;
    name_of_event: string;
    duration: number;
    description: string;
    //in the database is time type
    start_time: string;
    currency: string;
    occasion: string;
    menu: string;
    agenda: string;
    photo: number;
    walking: number;
    smoking: number;
    kids: number;
    pet: number;
    alcohol: number;
}


export type EventInformation = {
    ID_application: number;
    ID_event: number;
    requestUserName: string;
    available_start_date: Date;
    available_end_date: Date;
    start_time: string;
    description: string;
    name_of_event: string;
    state: string;
    ID_user: number;
}


export type NotificationUser = {
    //name+surname
    requestUserName: string;
    languages: string;
    ID_event: number;
    available_start_date: Date;
    available_end_date: Date;
    start_time: string;
    description: string;
    name_of_event: string;
    state: string;
}


export type PhotoEvent = {
    ID_event: number;
    photo: Blob
}


export type Request = {
    ID: number;
    ID_user: number;
    available_start_date: Date;
    availabe_end_date: Date;
    location: string;
    partecipant_number: number;
    joinable_guests: number; //0 or 1
    description: string;
    type_of_meal: string;
    dish_origin: string;
    dish_name: string;
    special_occasion: string;
    budget: number;
    currency: string;
}


export type PhotoRequest = {
    ID_request: number;
    photo: Blob
}


export type Partecipant = {
    ID: number;
    name: string;
    age: number;
}


export type RequestPartecipant = {
    ID_request: number;
    ID_partecipant: number;
}


export type Review = {
    ID: number;
    ID_reviewer: number;
    ID_reviewed: number;
    review: string;
    rating: number;
}


export type ApplyEvent = {
    ID: number;
    ID_user: number;
    ID_event: number;
    state: number;
}


export type Photo = {
    img_id: number;
    //da rimuovere
    img_album_id: number;
    img_name: string
    img_mime_type: string;
    last_modified: number;
    img_size: number;
    img_data: Blob;
}


export type LandingPageEvent = {
    name: string;
    surname: string;
    ID: number;
    name_of_event: string;
    location: string;
    guest_price: number;
    currency: string;
}


//requests: dish name, available dates, myself (TO BE ADDED IN DB AFTER PROFILE PAGE IS DONE), nationalities, budget per person, user name+surname
export type LandingPageRequest = {
    name: string;
    surname: string;
    ID: number;
    dish_name: string;
    location: string;
    available_start_date: Date;
    available_end_date: Date;
    description: string;
    languages: string[];
    budget: number;
    currency: string;
}

export type ApplicationResult = {
    full_name: string;
    name_of_event: string;
    state: string
}