import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { a as getCompetitionsData, $ as $$Layout } from '../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const content = await getCompetitionsData();
  const competitions = content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ba\u015Far\u0131lar\u0131m\u0131z | Mobilab", "data-astro-cid-5ulbm4zo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero" data-astro-cid-5ulbm4zo> <div class="container" data-astro-cid-5ulbm4zo> <span class="page-label" data-astro-cid-5ulbm4zo>Başarılar</span> <h1 data-astro-cid-5ulbm4zo>${competitions?.sectionTitle || "Ba\u015Far\u0131lar\u0131m\u0131z"}</h1> <p class="page-description" data-astro-cid-5ulbm4zo> ${competitions?.description || "Yar\u0131\u015Fmalarda elde etti\u011Fimiz \xF6d\xFCller."} </p> </div> </section> <section class="competitions-page section-padding" data-astro-cid-5ulbm4zo> <div class="container" data-astro-cid-5ulbm4zo> <div class="competitions-grid" data-astro-cid-5ulbm4zo> ${competitions?.items?.map((item) => renderTemplate`<div class="competition-card glass-card" data-astro-cid-5ulbm4zo> <div class="card-image"${addAttribute(`background-image: url('${item.image}');`, "style")} data-astro-cid-5ulbm4zo> <div class="status-badge" data-astro-cid-5ulbm4zo>${item.status}</div> </div> <div class="card-content" data-astro-cid-5ulbm4zo> <div class="card-meta" data-astro-cid-5ulbm4zo> <span class="card-date" data-astro-cid-5ulbm4zo>${item.date}</span> <span class="card-category" data-astro-cid-5ulbm4zo>${item.category}</span> </div> <h3 class="card-title" data-astro-cid-5ulbm4zo>${item.title}</h3> <span class="card-event" data-astro-cid-5ulbm4zo>${item.event}</span> <p class="card-description" data-astro-cid-5ulbm4zo>${item.description}</p> </div> </div>`)} </div> </div> </section> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/competitions/index.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/competitions/index.astro";
const $$url = "/competitions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
