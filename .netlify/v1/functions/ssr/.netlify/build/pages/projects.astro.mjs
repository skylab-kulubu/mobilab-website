import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server__ufz4yoa.mjs';
import 'piccolore';
import { c as getProjectsData, $ as $$Layout } from '../chunks/Layout_9Hyh4eXn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projectsData = await getProjectsData();
  const projects = projectsData.items;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "T\xFCm Projeler", "data-astro-cid-2hwget37": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-padding" data-astro-cid-2hwget37> <div class="container" data-astro-cid-2hwget37> <div class="page-header" data-astro-cid-2hwget37> <a href="/" class="back-link" data-astro-cid-2hwget37>&larr; Ana Sayfa</a> <h1 data-astro-cid-2hwget37>Tüm Projeler</h1> <p data-astro-cid-2hwget37>Geliştirdiğimiz tüm açık kaynak projeler ve ürünler.</p> </div> <div class="projects-grid" data-astro-cid-2hwget37> ${projects.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.id}`, "href")} class="project-card glass-card" data-astro-cid-2hwget37> <div class="project-image"${addAttribute(`background-image: url('${project.image}');`, "style")} data-astro-cid-2hwget37></div> <div class="project-content" data-astro-cid-2hwget37> <span class="project-category" data-astro-cid-2hwget37>${project.category}</span> <h3 class="project-title" data-astro-cid-2hwget37>${project.title}</h3> <p class="project-summary" data-astro-cid-2hwget37>${project.summary}</p> <div class="project-footer" data-astro-cid-2hwget37> <div class="tech-tags" data-astro-cid-2hwget37> <span class="tech-tag" data-astro-cid-2hwget37>Flutter</span> <span class="tech-tag" data-astro-cid-2hwget37>Dart</span> </div> <span class="project-link" data-astro-cid-2hwget37>
Detaylar
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-2hwget37> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-2hwget37></path> </svg> </span> </div> </div> </a>`)} </div> </div> </section> ` })} `;
}, "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/projects/index.astro", void 0);

const $$file = "E:/SkyLab/Mobilab/Mobilab-Website/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
