import { dev } from "$app/environment";
import { json, type RequestHandler } from "@sveltejs/kit";
import ip from "ip"


export const POST: RequestHandler = async ({ cookies }) => {

    console.log("hello");
    cookies.delete('session_id', { path: '/' });

    return json("");
}