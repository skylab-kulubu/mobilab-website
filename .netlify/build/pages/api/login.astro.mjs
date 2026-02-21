import { P as PASSWORD, C as COOKIE_NAME } from '../../chunks/auth_CZwqK5yY.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    if (body.password === PASSWORD) {
      cookies.set(COOKIE_NAME, PASSWORD, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24
        // 1 day
      });
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    return new Response(JSON.stringify({ success: false, message: "Yanlış şifre" }), { status: 401 });
  } catch (e) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
