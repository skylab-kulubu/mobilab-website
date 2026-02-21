import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { b as getEducationData, $ as $$Layout } from '../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const educationData = await getEducationData();
  const items = educationData.items;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "T\xFCm E\u011Fitimler", "data-astro-cid-nzqznpps": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-padding" data-astro-cid-nzqznpps> <div class="container" data-astro-cid-nzqznpps> <div class="page-header" data-astro-cid-nzqznpps> <a href="/" class="back-link" data-astro-cid-nzqznpps>&larr; Ana Sayfa</a> <h1 data-astro-cid-nzqznpps>Eğitim Programlarımız</h1> </div> <div class="education-grid" data-astro-cid-nzqznpps> ${items.map((item) => renderTemplate`<a${addAttribute(`/education/${item.id}`, "href")} class="education-card glass-card" data-astro-cid-nzqznpps> <div class="card-image"${addAttribute(`background-image: url('${item.image}');`, "style")} data-astro-cid-nzqznpps></div> <div class="card-content" data-astro-cid-nzqznpps> <h4 class="card-title" data-astro-cid-nzqznpps>${item.title}</h4> <p class="card-excerpt" data-astro-cid-nzqznpps> ${item.description.substring(0, 100)}...
</p> <span class="read-more" data-astro-cid-nzqznpps>
İncele
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-nzqznpps> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-nzqznpps></path> </svg> </span> </div> </a>`)} </div> </div> </section> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/education/index.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/education/index.astro";
const $$url = "/education";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
