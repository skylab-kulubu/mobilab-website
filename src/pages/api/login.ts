import type { APIRoute } from 'astro';
import { PASSWORD, COOKIE_NAME } from '../../utils/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const body = await request.json();
        if (body.password === PASSWORD) {
            cookies.set(COOKIE_NAME, PASSWORD, {
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24 // 1 day
            });
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false, message: 'Yanlış şifre' }), { status: 401 });
    } catch (e) {
        return new Response(JSON.stringify({ success: false }), { status: 400 });
    }
}
