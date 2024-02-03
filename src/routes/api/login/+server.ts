import { dev } from "$app/environment";
import { json, type Cookies, type RequestHandler } from "@sveltejs/kit";
import ip from "ip"

function setLoggedIn(cookies: Cookies, userID: string) {
    cookies.set('session_id', userID, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: !dev,
        maxAge: 60 * 60 * 24 * 7 // one week
    })
}

export const POST: RequestHandler = async ({ request, cookies }) => {
    console.log("TRYING TO LOG IN!!");

    const data = await request.json()

    let requestData = {
        email: data["email"],
        password: data["password"]
    };
    try {
        const response = await fetch('http://' + ip.address() + ':3000/loginVerify', {
            method: 'POST', // Use the POST method
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON if sending JSON data
            },
            body: JSON.stringify(requestData) // Convert the request data to a JSON string

        });
        if (response.ok) {
            const responseData = await response.json();
            if (!responseData.success) {
                console.error('Failed to verify login:', responseData.message);
                return json({ success: false });
            } else {
                setLoggedIn(cookies, responseData.userID);
                console.log("logged in!!")
                return json({ success: true });
            }
        } else {
            console.error('Failed to verify login:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during login verification:', error);
    }
    return json({ success: false })
}