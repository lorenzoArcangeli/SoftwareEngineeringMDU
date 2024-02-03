import { dev } from "$app/environment";
import { json, type Cookies, type RequestHandler } from "@sveltejs/kit";
import ip from "ip"

export const POST: RequestHandler = async ({ request, cookies }) => {
    let data = await request.json()
    const requestData = {
        name: data["name"],
        email: data['email'],
        password: data['password']
    };

    console.log("register")

    try {
        const response = await fetch('http://' + ip.address() + ':3000/insertCredential', {
            method: 'POST', // Use the POST method
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON if sending JSON data
            },
            body: JSON.stringify(requestData) // Convert the request data to a JSON string
        });
        if (!response.ok) {
            console.error('Failed to insert credentials:', response.status, response.statusText);
        } else {
            const responseData = await response.json();
            if (!responseData.success) {
                console.log('Error:', responseData.message);
            } else {
                return json({ success: true })
            }
        }
    } catch (error) {
        console.error('Error during login verification:', error);
    }
    return json({ success: false })
}