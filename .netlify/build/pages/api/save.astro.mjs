import { s as saveContent } from '../../chunks/content_B-n5f_52.mjs';
import { i as isAuthenticated } from '../../chunks/auth_CZwqK5yY.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  if (!isAuthenticated(cookies)) {
    return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
  }
  try {
    const data = await request.json();
    if (!data) throw new Error("No data provided");
    const success = saveContent(data);
    if (success) {
      return new Response(JSON.stringify({ success: true, message: "Saved successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ success: false, message: "Write failed" }), {
        status: 500
      });
    }
  } catch (e) {
    return new Response(JSON.stringify({ success: false, message: e.message }), {
      status: 400
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
