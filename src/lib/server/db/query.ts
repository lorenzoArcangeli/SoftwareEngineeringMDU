// import necessary modules and types
import { Connect } from "vite";
import { app, db } from ".";
import type { Photo, Test, EventInformation, LandingPageEvent, LandingPageRequest, ApplicationResult } from "./types";
import type { Request, Response } from 'express';
import ip from "ip"

export const getTests = (): Promise<Test[]> => {
  return fetch(ip.address() + ':3000/test')
    .then(response => response.json() as Promise<Test[]>)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // You might want to handle the error appropriately
    });
};


export async function insertEvent(
  ID_user: number,
  available_start_date: Date,
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
  console.log("query.ts");
  const insertQuery = 'INSERT INTO `events` (`ID_user`, `available_start_date`, `available_end_date`, `location`, `capacity`,\
    `guest_price`, `type_of_meal`, `dish_origin`, `dish_name`, `name_of_event`, `duration`, `description`,\
    `start_time`, `currency`, `occasion`, `menu`, `agenda`, `photo`, `walking`, `smoking`,\
    `kids`, `pet`, `alcohol`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';

  return new Promise((resolve, reject) => {
    db.query(insertQuery, [ID_user, available_start_date, availabe_end_date, location, capacity, guest_price, type_of_meal, dishOrigin, dishName,
      name_of_event, duration, description, start_time, currency, occasion, menu, agenda, photo, walking, smoking, kids, pet, alcohol], (err, result) => {
        if (err) {
          console.error('Error inserting into database:', err);
          reject(err);
        } else {
          console.log('Request inserted into database');
          resolve(result.insertId);
        }
      });
  });
}

export async function insertRequest(ID_user: number, available_start_date: Date, availabe_end_date: Date, location: string, partecipant_number: number, joinable_guests: number, //0 or 1
  description: string, type_of_meal: string, dishOrigin: string, dishName: string, special_occasion: string, budget: number, currency: string, name: string[], age: number[]) {
  const currencySub = currency.substring(0, 3);
  const ID_req = await insertOnlyRequest(ID_user, available_start_date, availabe_end_date, location, partecipant_number, joinable_guests, description, type_of_meal, dishOrigin, dishName, special_occasion, budget, currencySub);
  const ID_participant = await insertParticipant(name, age, ID_req);
}


async function insertOnlyRequest(ID_user: number, available_start_date: Date, availabe_end_date: Date, location: string, partecipant_number: number, joinable_guests: number, //0 or 1
  description: string, type_of_meal: string, dishOrigin: string, dishName: string, special_occasion: string, budget: number, currency: string) {

  console.log(ID_user);
  const insertQuery = 'INSERT INTO `requests` (`ID_user`, `available_start_date`, `available_end_date`, `location`, `partecipantNumber`, `joinable_guests`, `description`, `type_of_meal`, `dish_origin`, `dish_name`, `special_occasion`, `budget`, `currency`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';

  return new Promise((resolve, reject) => {
    db.query(insertQuery, [ID_user, available_start_date, availabe_end_date, location, partecipant_number, joinable_guests, description, type_of_meal, dishOrigin, dishName, special_occasion, budget, currency], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
        reject(err);
      } else {
        console.log('Request inserted into database');
        resolve(result.insertId);
      }
    });
  });
}


async function insertParticipant(name: string[], age: number[], ID_req: unknown) {
  for (var i = 0; i < name.length; i++) {
    const insertQuery = 'INSERT INTO `participants` (`name`, `age`) VALUES (?, ?);  ';
    const res = await new Promise((resolve, reject) => {
      db.query(insertQuery, [name[i], age[i]], (err, result) => {
        if (err) {
          console.error('Error inserting into database:', err);
          reject(err);
        } else {
          console.log('Request inserted into database');
          resolve(result.insertId);
        }
      });
    });
    const insertRequestParticipants = 'INSERT INTO `request_participants` (`ID_request`, `ID_partecipant`) VALUES (?, ?);  ';
    db.query(insertRequestParticipants, [ID_req, res], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
      } else {
        console.log('Photo inserted into database');
      }
    });
  }
}




export async function getEventInformation(ID_event: number): Promise<EventInformation[]> {
  const selectQuery = "SELECT DISTINCT a.ID AS ID_application, e.ID AS ID_event, e.available_start_date, e.available_end_date, e.start_time, e.description, e.name_of_event, a.state, u.name, u.surname, u.ID AS ID_userTable\
  FROM events e\
  JOIN apply_events a ON e.ID = a.ID_event\
  JOIN users u ON a.ID_user=u.ID\
  WHERE e.ID = ?;";

  return new Promise((resolve, reject) => {
    db.query(selectQuery, [ID_event], async (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        const eventInfoArray: EventInformation[] = results.map((result: { ID_userTable: any, ID_application: any, ID_event: any; name: string; surname: string; available_start_date: any; available_end_date: any; start_time: any; description: any; name_of_event: any; state: any; }) => {
          return {
            ID_application: result.ID_application,
            ID_event: result.ID_event,
            requestUserName: result.name + " " + result.surname,
            available_start_date: result.available_start_date,
            available_end_date: result.available_end_date,
            start_time: result.start_time,
            description: result.description,
            name_of_event: result.name_of_event,
            state: result.state,
            ID_user: result.ID_userTable,
          };
        });
        resolve(eventInfoArray);
      }
    });
  });
}

export async function getTestByID(testID: number) {
  const ID = testID;
  return fetch(ip.address() + `:3000/getTestByID/${ID}`)
    .then(response => response.json() as Promise<Test>)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; // You might want to handle the error appropriately

    });
}

/**
 * 
 * SELECT e.ID, e.available_start_date, e.available_end_date, e.start_time, e.description, e.name_of_event, a.state, u.name, u.surname\
  FROM events e\
  JOIN apply_events a ON e.ID = a.ID_event\
  JOIN users u ON e.ID_user=u.ID\
  WHERE e.ID = ?;"
 */


export async function getAppliedEvent(ID_user: number): Promise<number[]> {
  const selectQuery = "SELECT e.ID FROM events e\
  JOIN apply_events a ON e.ID=a.ID_event WHERE e.ID_user=?;"
  return new Promise((resolve, reject) => {
    db.query(selectQuery, [ID_user], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        const eventIDs: number[] = results.map((row: any) => row.ID);
        resolve(eventIDs);
      }
    })
  });
}

export async function insertData(ID: number, Name: string) {

  const dataToInsert = {
    ID: ID,
    Name: Name,
  };
  try {
    const response = await fetch(ip.address() + ':3000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dataToInsert }),

    });
    if (response.ok) {
      console.log('Data inserted successfully');
    } else {
      console.error('Error inserting data:', await response.text());
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}

export async function getLanguages(ID_user: number): Promise<string[]> {
  const selectQuery = "SELECT language FROM languages WHERE ID_user = ?;";

  return new Promise((resolve, reject) => {
    db.query(selectQuery, [ID_user], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        // Extract the 'nationality' values from the result rows and map to a string array
        const languages: string[] = results.map((row: any) => row.language);

        console.log('Result set retrieved:', languages);
        resolve(languages);
      }
    });
  });
}



export async function notificationResult(
  ID_application: number,
  state: string,) {
  const insertQuery = "UPDATE apply_events SET state=? WHERE ID=?;";

  return new Promise((resolve, reject) => {
    db.query(insertQuery, [state, ID_application], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
        reject(err);
      } else {
        console.log('Result setted');
        resolve(result.insertId);
      }
    });
  });
}

export async function getEventInformationLandingPage(): Promise<LandingPageEvent[]> {
  const selectQuery = "SELECT\
  users.name,\
  users.surname,\
  events.ID,\
  events.name_of_event,\
  events.location,\
  events.guest_price, \
  events.currency\
  FROM events\
  JOIN users ON events.ID_user = users.ID;";

  return new Promise((resolve, reject) => {
    db.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        console.log('Result set retrieved');

        // Build an array of LandingPageEvent objects
        const landingPageEvents: LandingPageEvent[] = results.map((row: { name: any; surname: any; ID: any, name_of_event: any; location: any; guest_price: any; currency: any; }) => {
          return {
            name: row.name,
            surname: row.surname,
            ID: row.ID,
            name_of_event: row.name_of_event,
            location: row.location,
            guest_price: row.guest_price,
            currency: row.currency
          };
        });
        resolve(landingPageEvents);
      }
    });
  });
}
export async function getRequestInformationLandingPage(): Promise<LandingPageRequest[]> {
  const selectQuery = "SELECT\
    users.ID AS ID_USER,\
    users.name,\
    users.surname,\
    requests.description,\
    requests.ID,\
    requests.location,\
    requests.dish_name,\
    requests.available_start_date,\
    requests.available_end_date, \
    requests.currency,\
    requests.budget\
    FROM requests\
    JOIN users ON requests.ID_user = users.ID;";

  return new Promise((resolve, reject) => {
    db.query(selectQuery, async (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        console.log('Result set retrieved');
        const landingPageRequestsPromises: LandingPageRequest[] = results.map(async (row: {
          currency: any;
          budget: any;
          description: any;
          available_end_date: any;
          available_start_date: any;
          dish_name: any;
          ID_USER: number;
          surname: any;
          name: any; ID: any; location: any;
        }) => {
          let languagesQuery = await getUserLanguages(row.ID_USER);
          return {
            name: row.name,
            surname: row.surname,
            ID: row.ID,
            location: row.location,
            dish_name: row.dish_name,
            available_start_date: row.available_start_date,
            available_end_date: row.available_end_date,
            description: row.description,
            languages: languagesQuery,
            budget: row.budget,
            currency: row.currency
          };
        });
        const landingPageRequests = await Promise.all(landingPageRequestsPromises);

        resolve(landingPageRequests);
      }
    });
  });
}

export async function getUserLanguages(ID_user: number): Promise<string[]> {
  const selectQuery = "SELECT language FROM languages WHERE ID_user=?";
  return new Promise((resolve, reject) => {
    db.query(selectQuery, [ID_user], async (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        const languages: string[] = results.map((row: { language: any; }) => row.language);
        resolve(languages);
      }
    });
  });
}

export async function applyEvent(ID_event: number, ID_user: number) {
  //CHANGE WITH ID_USER
  //static ID_user
  const alreadyAppliedResult = await alreadyApplied(ID_event, ID_user);
  console.log(ID_user);
  if (alreadyAppliedResult)
    return -1;
  const insertApplication = "INSERT INTO apply_events (ID_user, ID_event, state) VALUES (?,?, 'waiting');";
  return new Promise((resolve, reject) => {
    db.query(insertApplication, [ID_user, ID_event], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
        reject(err);
      } else {
        resolve(result.insertId);
      }
    });
  })
}

async function alreadyApplied(ID_event: number, ID_user: number) {
  const insertQuery = "SELECT COUNT(*) AS alreadyPresent FROM apply_events WHERE ID_event=? AND ID_user=?;";
  return new Promise((resolve, reject) => {
    db.query(insertQuery, [ID_event, ID_user], (err, result) => {
      if (err) {
        console.error('Error getting from database:', err);
        reject(err);
      } else {
        if (result[0].alreadyPresent > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  });
}


export async function getApplicationResult(ID_user: number): Promise<ApplicationResult[]> {
  console.log(ID_user);
  const insertQuery = "SELECT u.name, u.surname, e.name_of_event, apply_events.state FROM apply_events\
  JOIN events e ON apply_events.ID_event=e.ID\
  JOIN users u ON e.ID_user = u.ID\
  WHERE apply_events.ID_user=?";


  return new Promise((resolve, reject) => {
    db.query(insertQuery, [ID_user], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        reject(err);
      } else {
        console.log('Result set retrieved');

        // Build an array of LandingPageEvent objects
        const applicationResults: ApplicationResult[] = results.map((row: { name: any; surname: any; name_of_event: any; state: any; }) => {
          return {
            full_name: row.name + " " + row.surname,
            name_of_event: row.name_of_event,
            state: row.state
          };
        });
        resolve(applicationResults);
      }
    });
  });
}
