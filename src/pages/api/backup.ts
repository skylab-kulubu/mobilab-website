import type { APIRoute } from 'astro';
import { getContent } from '../../utils/content';

export const GET: APIRoute = async () => {
    const content = getContent();
    const jsonStr = JSON.stringify(content, null, 2);

    return new Response(jsonStr, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Content-Disposition': `attachment; filename="airlab_backup_${Date.now()}.json"`
        }
    });
}
