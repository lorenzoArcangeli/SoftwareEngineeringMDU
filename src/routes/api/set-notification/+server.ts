import { json, type RequestHandler } from "@sveltejs/kit";
import ip from "ip"

export const POST: RequestHandler = async ({ request }) => {

    let data = await request.json();

    console.log(data)

    const requestData = {
        ID_application: data["ID_application"],
        state: data["state"]
    };


    // Make a POST request to the /insert-event endpoint using fetch
    await fetch('http://' + ip.address() + ':3000/notificationResult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error));


    return json("");
}