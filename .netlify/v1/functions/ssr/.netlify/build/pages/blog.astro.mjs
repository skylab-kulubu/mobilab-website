import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_9Hyh4eXn.mjs';
import { g as getContent } from '../chunks/content_B-n5f_52.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const content = getContent();
  const blog = content.blog;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Mobilab", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <span class="page-label" data-astro-cid-5tznm7mj>Blog</span> <h1 data-astro-cid-5tznm7mj>${blog?.sectionTitle || "Blog"}</h1> <p class="page-description" data-astro-cid-5tznm7mj>${blog?.description || "Mobil geli\u015Ftirme d\xFCnyas\u0131ndan g\xFCncel yaz\u0131lar."}</p> </div> </section> <section class="blog-page section-padding" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="blog-grid" data-astro-cid-5tznm7mj> ${blog?.items?.map((item) => renderTemplate`<a${addAttribute(`/blog/${item.id}`, "href")} class="blog-card glass-card" data-astro-cid-5tznm7mj> <div class="card-image"${addAttribute(`background-image: url('${item.image}');`, "style")} data-astro-cid-5tznm7mj></div> <div class="card-content" data-astro-cid-5tznm7mj> <span class="card-date" data-astro-cid-5tznm7mj>${item.date}</span> <h3 class="card-title" data-astro-cid-5tznm7mj>${item.title}</h3> <p class="card-excerpt" data-astro-cid-5tznm7mj>${item.excerpt}</p> <span class="read-more" data-astro-cid-5tznm7mj>
Devamını Oku
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-5tznm7mj></path> </svg> </span> </div> </a>`)} </div> </div> </section> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/blog/index.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
