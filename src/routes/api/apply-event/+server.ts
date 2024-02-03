import type { RequestHandler } from "@sveltejs/kit";
import ip from "ip"

export const POST: RequestHandler = async ({ request, cookies }) => {
    let data = await request.json()

    const user_id = cookies.get("session_id");

    const requestData = {
        ID_event: data["ID_event"],
        ID_user: user_id ? user_id : -1
    };
    const response = fetch('http://' + ip.address() + ':3000/applyEvent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })


    return response;
}