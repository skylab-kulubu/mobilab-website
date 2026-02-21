import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { b as getEducationData, $ as $$Layout } from '../../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const educationData = await getEducationData();
  const edu = educationData.items.find((e) => e.id === id);
  if (!edu) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${edu.title} - E\u011Fitimler`, "data-astro-cid-wstz6okp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="detail-page section-padding" data-astro-cid-wstz6okp> <div class="container" data-astro-cid-wstz6okp> <a href="/#education" class="back-link" data-astro-cid-wstz6okp>&larr; Geri Dön</a> <div class="header-content" data-astro-cid-wstz6okp> <h1 data-astro-cid-wstz6okp>${edu.title}</h1> <p class="subtitle" data-astro-cid-wstz6okp>${edu.description}</p> </div> <div class="featured-image glass-card"${addAttribute(`background-image: url('${edu.image}');`, "style")} data-astro-cid-wstz6okp></div> <div class="content user-content" data-astro-cid-wstz6okp> <p data-astro-cid-wstz6okp>${edu.fullDescription || edu.description}</p> </div> </div> </article> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/education/[id].astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/education/[id].astro";
const $$url = "/education/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
