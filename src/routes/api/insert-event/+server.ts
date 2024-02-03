import type { RequestHandler } from "@sveltejs/kit";
import ip from "ip"

export const POST: RequestHandler = async ({ request, cookies }) => {
    let data = await request.json()

    const user_id = cookies.get("session_id");

    const requestData = {
        ID_user: user_id,
        available_start_date: data["available_start_date"],
        availabe_end_date: data["availabe_end_date"],
        location: data["location"],
        capacity: data["capacity"],
        guest_price: data["guest_price"],
        type_of_meal: data["type_of_meal"],
        dishOrigin: data["dishOrigin"],
        dishName: data["dishName"],
        name_of_event: data["name_of_event"],
        duration: data["duration"],
        description: data["description"],
        start_time: data["start_time"],
        currency: data["currency"],
        occasion: data["occasion"],
        menu: data["menu"],
        agenda: data["agenda"],
        photo: data["photo"],
        walking: data["walking"],
        smoking: data["smoking"],
        kids: data["kids"],
        pet: data["pet"],
        alcohol: data["alcohol"],
    };
    const response = fetch('http://' + ip.address() + ':3000/insert-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })

    return response;
}