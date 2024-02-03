import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    const sessionid = cookies.get('session_id');

    return {
        user_id: sessionid
    };
}) satisfies LayoutServerLoad;