import { g as getContent } from '../../chunks/content_B-n5f_52.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const content = getContent();
  const jsonStr = JSON.stringify(content, null, 2);
  return new Response(jsonStr, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="airlab_backup_${Date.now()}.json"`
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
