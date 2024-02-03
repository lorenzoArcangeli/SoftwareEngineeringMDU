import { getEventInformationLandingPage, getRequestInformationLandingPage } from "$lib/server/db/query";

//events: event name, location, price per person, user name+surname
//requests: dish name, available dates, profile (TO BE ADDED), nationalities, budget per person, user name+surname
export const load = async () => {
    const eventCard = await getEventInformationLandingPage();
    const requestCard = await getRequestInformationLandingPage()

    return {
        eventCard,
        requestCard
    };
}