import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { g as getBlogData, $ as $$Layout } from '../../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const blogData = await getBlogData();
  const post = blogData.items.find((p) => p.id === id);
  if (!post) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - Blog`, "data-astro-cid-gsbvazvt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post section-padding" data-astro-cid-gsbvazvt> <div class="container blog-container" data-astro-cid-gsbvazvt> <a href="/#blog" class="back-link" data-astro-cid-gsbvazvt>&larr; Blog'a Dön</a> <div class="post-header" data-astro-cid-gsbvazvt> <span class="post-date" data-astro-cid-gsbvazvt>${post.date}</span> <h1 data-astro-cid-gsbvazvt>${post.title}</h1> </div> <div class="post-image"${addAttribute(`background-image: url('${post.image}');`, "style")} data-astro-cid-gsbvazvt></div> <div class="post-content user-content" data-astro-cid-gsbvazvt> <p class="lead" data-astro-cid-gsbvazvt>${post.excerpt}</p> <hr data-astro-cid-gsbvazvt> <div data-astro-cid-gsbvazvt>${post.content}</div> <p data-astro-cid-gsbvazvt><em data-astro-cid-gsbvazvt>(Buraya Admin panelden tam içerik eklenebilir)</em></p> </div> </div> </article> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/blog/[id].astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
