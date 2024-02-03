import type { Actions } from "./$types";
import { insertRequest } from "$lib/server/db/query";
import { redirect } from "@sveltejs/kit";

/*};
*/
export const actions: Actions = {
    insertRequest: async ({ request, cookies }) => {
        const data = await request.formData()

        const id = cookies.get('session_id')
        const user_id = id ? id : "-1"

        console.log(user_id);

        const startDateString = data.get('startDate')?.toString();
        let startDate = new Date();
        if (startDateString) {
            startDate = new Date(startDateString);
        }
        const endDateString = data.get('endDate')?.toString();
        let endDate = new Date();
        if (endDateString) {
            endDate = new Date(endDateString);
        }
        const location = data.get('location')!.toString();
        const numberOfGuestsString = data.get('numberOfGuests')!.toString();
        const numberOfGuests = parseInt(numberOfGuestsString);
        let guestCanJoinString = data.get('guestsCanJoin')?.toString();
        let guestCanJoin;
        if (guestCanJoinString == "true") {
            guestCanJoin = 1;
        } else {
            guestCanJoin = 0;
        }
        console.log("j");
        const comments = data.get('comments')!.toString();
        const typeOfMeal = data.get('stringTypeOfMeal')!.toString();
        const dishOrigin = data.get('dishOrigin')!.toString();
        const dishName = data.get('dishName')!.toString();
        const specialOccasion = data.get('specialOccasion')!.toString();
        const budgetString = data.get('budget')!.toString();
        const budget = parseInt(budgetString);
        const currency = data.get('currency')!.toString();
        let guestsName = Array.from({ length: 10 });

        const name = data.get('nameArray')!.toString();
        const nameArray = name.split(',');
        const nonEmptyName = nameArray.filter(element => element.trim() !== '');

        const age = data.get('ageArray')!.toString();
        const ageArray = age.split(',');
        const nonEmptyAge = ageArray.filter(element => element.trim() !== '');
        var intNonEmptyAge = nonEmptyAge.map(function (str) {
            return parseInt(str, 10);
        });
        insertRequest(parseInt(user_id), startDate, endDate, location, numberOfGuests, guestCanJoin, comments, typeOfMeal, dishOrigin, dishName, specialOccasion, budget, currency, nonEmptyName, intNonEmptyAge);
        throw redirect(302, "/");
    }
}