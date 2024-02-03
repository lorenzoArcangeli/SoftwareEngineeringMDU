import { getAppliedEvent, getEventInformation, getLanguages } from "$lib/server/db/query"
import type { EventInformation, NotificationUser } from "$lib/server/db/types";
import { getApplicationResult } from "$lib/server/db/query";

//        userName: nationality: date: , time: , description: title: 
export const load = async ({ cookies }) => {
  //the parameter is the logged user ID

  const user_id = cookies.get("session_id")

  let appliedEventIDs;

  if (user_id != null) {
    // Convert to number
    var id: number = +user_id;

    appliedEventIDs = await getAppliedEvent(id);
  }
  else {
    appliedEventIDs = await getAppliedEvent(-1);
  }
  const applicationResults = await getApplicationResult(user_id ? parseInt(user_id) : -1);


  const uniqueEventIDs = [];
  const processedEventIDs = new Set();
  for (const eventID of appliedEventIDs) {
    if (!processedEventIDs.has(eventID)) {
      // Add the eventID to the result array
      uniqueEventIDs.push(eventID);
      // Mark the eventID as processed
      processedEventIDs.add(eventID);
    }
  }
  const eventInformationPromises = uniqueEventIDs.map((eventID) => getEventInformation(eventID));
  const eventInformationList: EventInformation[] = (await Promise.all(eventInformationPromises)).flat();
  const notificationsLoad: NotificationUser[] = await Promise.all(
    eventInformationList.map(async (eventInfo) => {
      const languages = await getLanguages(eventInfo.ID_user);
      return {
        requestUserName: eventInfo.requestUserName,
        languages: languages.join(', '),
        ID_application: eventInfo.ID_application,
        ID_event: eventInfo.ID_event,
        available_start_date: eventInfo.available_start_date,
        available_end_date: eventInfo.available_end_date,
        start_time: eventInfo.start_time,
        description: eventInfo.description,
        name_of_event: eventInfo.name_of_event,
        state: eventInfo.state,
      };
    })
  );
  return {
    notificationsLoad,
    applicationResults
  };
}
