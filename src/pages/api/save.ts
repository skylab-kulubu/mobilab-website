import type { APIRoute } from 'astro';
import { saveContent } from '../../utils/content';
import { isAuthenticated } from '../../utils/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
    if (!isAuthenticated(cookies)) {
        return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401 });
    }

    try {
        const data = await request.json();
        if (!data) throw new Error('No data provided');

        const success = saveContent(data);

        if (success) {
            return new Response(JSON.stringify({ success: true, message: 'Saved successfully' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: 'Write failed' }), {
                status: 500
            });
        }
    } catch (e: any) {
        return new Response(JSON.stringify({ success: false, message: e.message }), {
            status: 400
        });
    }
}
