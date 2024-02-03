import { getEventInformationLandingPage, getRequestInformationLandingPage } from "$lib/server/db/query";

export const load = async () => {

  const eventCard = await getEventInformationLandingPage();
  const requestCard = await getRequestInformationLandingPage();
  return {
    eventCard,
    requestCard
  };
};